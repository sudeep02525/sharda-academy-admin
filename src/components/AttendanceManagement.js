"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:5000/api";

export default function AttendanceManagement() {
  const [attendance, setAttendance] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [classLevel, setClassLevel] = useState("");
  const [batch, setBatch] = useState("");
  const [students, setStudents] = useState([]);
  const [marks, setMarks] = useState({});
  const [loading, setLoading] = useState(false);
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [report, setReport] = useState(null);

  useEffect(() => {
    if (classLevel && batch) {
      fetchStudentsForClass();
    }
  }, [classLevel, batch]);

  const fetchStudentsForClass = async () => {
    try {
      const response = await axios.get(`${API}/admin/students?classLevel=${classLevel}&batch=${batch}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
      });
      setStudents(response.data.data);
      const initialMarks = {};
      response.data.data.forEach((s) => {
        initialMarks[s._id] = "Present";
      });
      setMarks(initialMarks);
    } catch (error) {
      alert("Error fetching students: " + error.message);
    }
  };

  const handleMarkChange = (studentId, value) => {
    setMarks((prev) => ({ ...prev, [studentId]: value }));
  };

  const handleSubmitAttendance = async (e) => {
    e.preventDefault();
    try {
      const attendanceRecords = Object.entries(marks).map(([studentId, status]) => ({
        studentId,
        status,
      }));

      await axios.post(
        `${API}/admin/attendance/mark`,
        {
          date,
          classLevel: parseInt(classLevel),
          batch,
          attendanceRecords,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
        }
      );
      alert("Attendance marked successfully");
      setMarks({});
    } catch (error) {
      alert("Error: " + error.response?.data?.message || error.message);
    }
  };

  const handleGenerateMonthlyReport = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API}/admin/attendance/monthly-report?classLevel=${classLevel}&batch=${batch}&month=${month}&year=${year}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
        }
      );
      setReport(response.data.data);
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Attendance Management</h1>

        {/* Mark Attendance Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Mark Attendance</h2>
          <form onSubmit={handleSubmitAttendance} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
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
                  <option value="">Select Class</option>
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
                  placeholder="e.g., Batch A"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="flex items-end">
                <button
                  type="button"
                  onClick={fetchStudentsForClass}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  Load Students
                </button>
              </div>
            </div>

            {students.length > 0 && (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-semibold">Name</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold">Roll Number</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student) => (
                        <tr key={student._id} className="border-b">
                          <td className="px-4 py-2">{student.name}</td>
                          <td className="px-4 py-2">{student.rollNumber}</td>
                          <td className="px-4 py-2">
                            <select
                              value={marks[student._id] || "Present"}
                              onChange={(e) => handleMarkChange(student._id, e.target.value)}
                              className="px-3 py-1 border rounded"
                            >
                              <option value="Present">Present</option>
                              <option value="Absent">Absent</option>
                              <option value="Late">Late</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                >
                  Save Attendance
                </button>
              </>
            )}
          </form>
        </div>

        {/* Monthly Report Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Monthly Attendance Report</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <select
              value={classLevel}
              onChange={(e) => setClassLevel(e.target.value)}
              className="px-3 py-2 border rounded-lg"
            >
              <option value="">Select Class</option>
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  Class {i + 1}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              placeholder="Batch"
              className="px-3 py-2 border rounded-lg"
            />
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="px-3 py-2 border rounded-lg"
            >
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {new Date(2024, i).toLocaleString("default", { month: "long" })}
                </option>
              ))}
            </select>
            <button
              onClick={handleGenerateMonthlyReport}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Generate Report
            </button>
          </div>

          {report && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold">Name</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold">Roll Number</th>
                    <th className="px-4 py-2 text-center text-sm font-semibold">Present</th>
                    <th className="px-4 py-2 text-center text-sm font-semibold">Absent</th>
                    <th className="px-4 py-2 text-center text-sm font-semibold">Late</th>
                    <th className="px-4 py-2 text-center text-sm font-semibold">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {report.students.map((student) => (
                    <tr key={student.studentId} className="border-b">
                      <td className="px-4 py-2">{student.name}</td>
                      <td className="px-4 py-2">{student.rollNumber}</td>
                      <td className="px-4 py-2 text-center text-green-600">{student.presentCount}</td>
                      <td className="px-4 py-2 text-center text-red-600">{student.absentCount}</td>
                      <td className="px-4 py-2 text-center text-orange-600">{student.lateCount}</td>
                      <td className="px-4 py-2 text-center font-semibold">{student.attendancePercentage}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
