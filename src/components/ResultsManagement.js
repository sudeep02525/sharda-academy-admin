"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:5000/api";

export default function ResultsManagement() {
  const [results, setResults] = useState([]);
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filterExam, setFilterExam] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [batch, setBatch] = useState("");

  const [formData, setFormData] = useState({
    examName: "",
    marks: [{ subject: "", obtained: "", max: 100 }],
  });

  const [bulkData, setBulkData] = useState({
    examName: "",
    classLevel: "",
    batch: "",
    results: [],
  });

  useEffect(() => {
    fetchResults();
    fetchStudents();
  }, [filterExam]);

  const fetchResults = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (filterExam) params.append("examName", filterExam);
      const response = await axios.get(`${API}/results?${params}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
      });
      setResults(response.data.data);
    } catch (error) {
      alert("Error fetching results: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${API}/admin/students`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
      });
      setStudents(response.data.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMarkChange = (index, field, value) => {
    const newMarks = [...formData.marks];
    newMarks[index][field] = value;
    setFormData((prev) => ({ ...prev, marks: newMarks }));
  };

  const addMarkField = () => {
    setFormData((prev) => ({
      ...prev,
      marks: [...prev.marks, { subject: "", obtained: "", max: 100 }],
    }));
  };

  const removeMarkField = (index) => {
    setFormData((prev) => ({
      ...prev,
      marks: prev.marks.filter((_, i) => i !== index),
    }));
  };

  const handleDelete = async (id) => {
    if (confirm("Delete this result?")) {
      try {
        await axios.delete(`${API}/admin/results/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
        });
        alert("Result deleted successfully");
        fetchResults();
      } catch (error) {
        alert("Error: " + error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Results Management</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            + Upload Results
          </button>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Upload Exam Results</h2>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                      const resultsArray = students
                        .filter(
                          (s) =>
                            classLevel === "" ||
                            s.classLevel == classLevel ||
                            (batch === "" || s.batch === batch)
                        )
                        .map((student) => ({
                          studentId: student._id,
                          marks: formData.marks,
                        }));

                      await axios.post(
                        `${API}/admin/results`,
                        {
                          examName: formData.examName,
                          classLevel: classLevel ? parseInt(classLevel) : undefined,
                          batch: batch || undefined,
                          results: resultsArray,
                        },
                        {
                          headers: {
                            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
                          },
                        }
                      );
                      alert("Results uploaded successfully");
                      setShowForm(false);
                      setFormData({ examName: "", marks: [{ subject: "", obtained: "", max: 100 }] });
                      fetchResults();
                    } catch (error) {
                      alert("Error: " + error.response?.data?.message || error.message);
                    }
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Exam Name *</label>
                      <input
                        type="text"
                        value={formData.examName}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, examName: e.target.value }))
                        }
                        required
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Class</label>
                      <select
                        value={classLevel}
                        onChange={(e) => setClassLevel(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                      >
                        <option value="">All Classes</option>
                        {[...Array(12)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            Class {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Batch</label>
                      <input
                        type="text"
                        value={batch}
                        onChange={(e) => setBatch(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold mb-2">Subjects & Marks</h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {formData.marks.map((mark, index) => (
                        <div key={index} className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Subject"
                            value={mark.subject}
                            onChange={(e) => handleMarkChange(index, "subject", e.target.value)}
                            className="flex-1 px-3 py-2 border rounded-lg"
                          />
                          <input
                            type="number"
                            placeholder="Obtained"
                            value={mark.obtained}
                            onChange={(e) =>
                              handleMarkChange(index, "obtained", e.target.value)
                            }
                            className="w-24 px-3 py-2 border rounded-lg"
                          />
                          <input
                            type="number"
                            placeholder="Max"
                            value={mark.max}
                            onChange={(e) => handleMarkChange(index, "max", e.target.value)}
                            className="w-24 px-3 py-2 border rounded-lg"
                          />
                          {formData.marks.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeMarkField(index)}
                              className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={addMarkField}
                      className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      + Add Subject
                    </button>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                    >
                      Upload Results
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        <div className="mb-4">
          <input
            type="text"
            placeholder="Filter by exam name..."
            value={filterExam}
            onChange={(e) => setFilterExam(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="bg-white rounded-lg shadow overflow-x-auto">
          {loading ? (
            <div className="p-6 text-center">Loading...</div>
          ) : results.length === 0 ? (
            <div className="p-6 text-center text-gray-500">No results found</div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Student</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Exam</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold">Percentage</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold">Grade</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr key={result._id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-3">{result.studentId?.name || "N/A"}</td>
                    <td className="px-6 py-3">{result.examName}</td>
                    <td className="px-6 py-3 text-center">{result.percentage}%</td>
                    <td className="px-6 py-3 text-center font-bold">{result.grade}</td>
                    <td className="px-6 py-3">
                      <button
                        onClick={() => handleDelete(result._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
