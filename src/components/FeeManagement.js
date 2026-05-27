"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/sams";

export default function FeeManagement() {
  const [fees, setFees] = useState([]);
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState("");

  const [formData, setFormData] = useState({
    studentId: "",
    amount: "",
    dueDate: "",
    description: "",
    classStandard: "",
    batch: "",
    paymentMethod: "",
  });

  useEffect(() => {
    fetchFees();
    fetchStudents();
  }, [filterStatus]);

  const fetchFees = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (filterStatus) params.append("status", filterStatus);
      const response = await axios.get(`${API}/fees?${params}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
      });
      setFees(response.data.data);
    } catch (error) {
      alert("Error fetching fees: " + error.message);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${API}/admin/fees/${editingId}`, formData, {
          headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
        });
        alert("Fee updated successfully");
      } else {
        await axios.post(`${API}/admin/fees`, formData, {
          headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
        });
        alert("Fee invoice created successfully");
      }
      setShowForm(false);
      setEditingId(null);
      setFormData({
        studentId: "",
        amount: "",
        dueDate: "",
        description: "",
        classStandard: "",
        batch: "",
        paymentMethod: "",
      });
      fetchFees();
    } catch (error) {
      alert("Error: " + error.response?.data?.message || error.message);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Delete this fee invoice?")) {
      try {
        await axios.delete(`${API}/admin/fees/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
        });
        alert("Fee deleted successfully");
        fetchFees();
      } catch (error) {
        alert("Error: " + error.message);
      }
    }
  };

  const handleEdit = (fee) => {
    setFormData(fee);
    setEditingId(fee._id);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Fee Management</h1>
          <button
            onClick={() => {
              setShowForm(true);
              setEditingId(null);
              setFormData({
                studentId: "",
                amount: "",
                dueDate: "",
                description: "",
                classStandard: "",
                batch: "",
                paymentMethod: "",
              });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            + Add Invoice
          </button>
        </div>

        <div className="mb-4">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="">All Statuses</option>
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {editingId ? "Edit Fee" : "Add Fee Invoice"}
                </h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Student *</label>
                    <select
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border rounded-lg"
                    >
                      <option value="">Select Student</option>
                      {students.map((s) => (
                        <option key={s._id} value={s._id}>
                          {s.name} ({s.rollNumber})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Amount *</label>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Due Date *</label>
                    <input
                      type="date"
                      name="dueDate"
                      value={formData.dueDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Payment Method</label>
                    <input
                      type="text"
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleInputChange}
                      placeholder="e.g., Cash, UPI"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-lg"
                      rows="2"
                    />
                  </div>
                  <div className="md:col-span-2 flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                    >
                      {editingId ? "Update" : "Create Invoice"}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false);
                        setEditingId(null);
                      }}
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

        <div className="bg-white rounded-lg shadow overflow-x-auto">
          {loading ? (
            <div className="p-6 text-center">Loading...</div>
          ) : fees.length === 0 ? (
            <div className="p-6 text-center text-gray-500">No fee records found</div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Student</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Due Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((fee) => (
                  <tr key={fee._id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-3">{fee.studentId?.name || "N/A"}</td>
                    <td className="px-6 py-3">₹{fee.amount}</td>
                    <td className="px-6 py-3">{fee.dueDate}</td>
                    <td className="px-6 py-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          fee.status === "Paid"
                            ? "bg-green-100 text-green-800"
                            : fee.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {fee.status}
                      </span>
                    </td>
                    <td className="px-6 py-3 space-x-2">
                      <button
                        onClick={() => handleEdit(fee)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(fee._id)}
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
