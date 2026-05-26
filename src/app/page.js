"use client";

import { useState, useEffect } from "react";
const getSidebarIcon = (id, className) => {
  switch (id) {
    case "overview":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v5.25c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 0 1 3 18.375v-5.25ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125v-9.75ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v14.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      );
    case "students":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      );
    case "admissions":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
      );
    case "schedules":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
        </svg>
      );
    case "biometric":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a14.805 14.805 0 0 0 1.586 6.74M15.01 1.777a8.962 8.962 0 0 1 3.74 2.235M8.457 20.278a14.887 14.887 0 0 1-2.715-3.328M11.662 2.011a8.968 8.968 0 0 1 3.2 1.53m-7.817 14.3a14.852 14.852 0 0 1-1.047-3.473M10.5 8.5a1.5 1.5 0 1 1 3 0v4.882c0 .866-.491 1.652-1.258 2.002L10.5 16.5M9 10.5a3 3 0 0 1 6 0v2.882c0 .577.327 1.101.839 1.335l.661.303" />
        </svg>
      );
    case "billing":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-19.5 8.25h3m3 0h3m-9-1.5h18a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      );
    case "logs":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
        </svg>
      );
    default:
      return null;
  }
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function AdminPortal() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // authView: "login" | "forgot_email" | "forgot_otp"
  const [authView, setAuthView] = useState("login");
  // step: 1 = login panel, 3 = dashboard
  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  
  // Dashboard states
  const [dashboardData, setDashboardData] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  // Collapsible sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Simulate biometric punch state
  const [simBiometricId, setSimBiometricId] = useState("RFID-9988-77");
  const [simSuccess, setSimSuccess] = useState("");

  // CRUD Forms
  const [newUser, setNewUser] = useState({
    name: "", email: "", phone: "", role: "student",
    rollNumber: "", classLevel: 10, batch: "Batch A",
    biometricId: "", parentEmail: ""
  });
  
  const [newFee, setNewFee] = useState({ studentId: "", amount: "", dueDate: "", description: "" });
  const [newSchedule, setNewSchedule] = useState({
    classLevel: 10, batch: "Batch A", subject: "", teacherName: "Prof. Sudeep Das",
    day: "Monday", startTime: "04:00 PM", endTime: "05:30 PM", room: "Classroom 101"
  });

  const [idCardSimulating, setIdCardSimulating] = useState(null);
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [classFilter, setClassFilter] = useState("all");

  useEffect(() => {
    const savedToken = localStorage.getItem("admin_token");
    if (savedToken) {
      setToken(savedToken);
      setStep(3);
      fetchAnalytics(savedToken);
    }
  }, []);

  const fetchAnalytics = async (authToken) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/sams/admin/analytics`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      const data = await res.json();
      if (data.success) {
        setDashboardData(data);
        if (data.usersList && data.usersList.length > 0) {
          const firstStudent = data.usersList.find(u => u.role === "student");
          if (firstStudent) {
            setNewFee(prev => ({ ...prev, studentId: firstStudent._id }));
          }
        }
      } else {
        setError(data.message || "Failed to load admin analytics.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to connect to SAMS backend.");
    } finally {
      setLoading(false);
    }
  };

  // ─── ADMIN LOGIN (Email + Password) ──────────────────────────────────────────
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        if (data.user.role !== "admin") {
          setError("Forbidden: This console is restricted to Admin accounts only.");
          return;
        }
        localStorage.setItem("admin_token", data.token);
        localStorage.setItem("admin_name", data.user.name);
        setToken(data.token);
        setStep(3);
        fetchAnalytics(data.token);
      } else {
        setError(data.message || "Invalid email or password.");
      }
    } catch (err) {
      console.error(err);
      setError("Unable to connect to SAMS backend server.");
    } finally {
      setLoading(false);
    }
  };

  // ─── FORGOT PASSWORD — Step 1: Request OTP ───────────────────────────────────
  const handleForgotRequest = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setAuthView("forgot_otp");
        setMessage("A 6-digit recovery code has been dispatched to your email. Check backend console logs.");
      } else {
        setError(data.message || "No admin account found with this email.");
      }
    } catch (err) {
      console.error(err);
      setError("Connection failed. Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  // ─── FORGOT PASSWORD — Step 2: Verify OTP + Reset Password ──────────────────
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!otp || !newPassword) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, newPassword }),
      });
      const data = await res.json();
      if (data.success) {
        setMessage("Password reset successfully! You can now log in with your new password.");
        setAuthView("login");
        setOtp("");
        setNewPassword("");
      } else {
        setError(data.message || "Invalid or expired recovery code.");
      }
    } catch (err) {
      console.error(err);
      setError("Reset failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_name");
    setToken("");
    setStep(1);
    setAuthView("login");
    setEmail("");
    setPassword("");
    setDashboardData(null);
  };

  // Simulate hardware biometric tap event
  const simulateBiometricSync = async () => {
    setError("");
    setSimSuccess("");
    try {
      const res = await fetch(`${API_BASE_URL}/api/sams/biometric-sync`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ biometricId: simBiometricId, deviceId: "Front Entrance Biometric Device" }),
      });
      const data = await res.json();
      if (data.success) {
        setSimSuccess(`Biometric Synced: Registered ${data.type.toUpperCase()} safely! Check terminal logs.`);
        fetchAnalytics(token);
      } else {
        setError(data.message || "Biometric card check failed.");
      }
    } catch (err) {
      console.error(err);
      setError("Sync failed.");
    }
  };

  // CRUD OPERATIONS
  const createUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/sams/admin/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newUser)
      });
      const data = await res.json();
      if (data.success) {
        setMessage(`Successfully registered student profile for ${newUser.name}!`);
        setNewUser({
          name: "", email: "", phone: "", role: "student",
          rollNumber: "", classLevel: 10, batch: "Batch A",
          biometricId: "", parentEmail: ""
        });
        fetchAnalytics(token);
      } else {
        setError(data.message || "Failed to create user.");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    if (!confirm("Are you sure you want to delete this student record?")) return;
    setLoading(true);
    try {
      await fetch(`${API_BASE_URL}/api/sams/admin/users/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchAnalytics(token);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const issueInvoice = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/sams/admin/fees`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newFee)
      });
      const data = await res.json();
      if (data.success) {
        setMessage("Tuition invoice issued successfully!");
        setNewFee({ studentId: dashboardData?.usersList?.find(u=>u.role==="student")?._id || "", amount: "", dueDate: "", description: "" });
        fetchAnalytics(token);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const markInvoicePaid = async (feeId) => {
    setLoading(true);
    try {
      await fetch(`${API_BASE_URL}/api/sams/admin/fees/${feeId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status: "Paid", paymentMethod: "Admin Desk Cashier" })
      });
      fetchAnalytics(token);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const scheduleRoutine = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/sams/admin/timetables`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newSchedule)
      });
      const data = await res.json();
      if (data.success) {
        setMessage("Routine class scheduled successfully!");
        setNewSchedule({
          classLevel: 10, batch: "Batch A", subject: "", teacherName: "Prof. Sudeep Das",
          day: "Monday", startTime: "04:00 PM", endTime: "05:30 PM", room: "Classroom 101"
        });
        fetchAnalytics(token);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const approveInquiry = async (id, status) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/sams/admin/admissions/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });
      const data = await res.json();
      if (data.success) {
        setMessage(`Inquiry marked as ${status}!`);
        fetchAnalytics(token);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Simulating CSV ledger report downloads
  const simulateExportCSV = () => {
    alert("System exporting complete student records to SAMS-Ledger.csv... Check your browser downloads folder!");
  };

  const printIDCard = (student) => {
    setIdCardSimulating(student);
  };

  const triggerBrowserPrintID = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Student ID Card - ${idCardSimulating.name}</title>
          <style>
            body { font-family: 'Inter', system-ui, -apple-system, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #faf9f6; }
            .card { width: 330px; height: 480px; border: 4px solid #0a1835; border-radius: 16px; padding: 20px; text-align: center; box-shadow: 0 4px 15px rgba(10,24,53,0.1); position: relative; background: #ffffff; }
            .header { border-bottom: 3px solid #f1af3c; padding-bottom: 10px; margin-bottom: 20px; }
            .header h2 { color: #0a1835; margin: 0; font-size: 20px; font-weight: 900; letter-spacing: 1px; }
            .header p { margin: 2px 0; font-size: 10px; color: #dc2626; font-weight: bold; letter-spacing: 2px; }
            .avatar { border-radius: 50%; background: #0a1835; color: white; display: flex; justify-content: center; align-items: center; font-size: 32px; font-weight: bold; margin: 0 auto 20px; width: 90px; height: 90px; border: 2px solid #f1af3c; }
            .name { font-size: 18px; font-weight: 800; color: #0a1835; margin: 0 0 10px 0; }
            .details { font-size: 12px; color: #0f1a30; margin-bottom: 5px; text-align: left; background: #faf9f6; padding: 10px; border-radius: 8px; border: 1px solid rgba(10,24,53,0.06); }
            .details p { margin: 4px 0; }
            .barcode { font-family: monospace; font-size: 10px; margin-top: 30px; border-top: 1px solid rgba(10,24,53,0.1); padding-top: 10px; color: #888; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h2>SHARDA ACADEMY</h2>
              <p>MANKHURD - 43</p>
            </div>
            <div class="avatar">${idCardSimulating.name[0].toUpperCase()}</div>
            <h3 class="name">${idCardSimulating.name}</h3>
            
            <div class="details">
              <p><strong>Roll Number:</strong> ${idCardSimulating.rollNumber}</p>
              <p><strong>Class Level:</strong> Standard ${idCardSimulating.classLevel}</p>
              <p><strong>Batch Allocation:</strong> ${idCardSimulating.batch}</p>
              <p><strong>Biometric Card:</strong> ${idCardSimulating.biometricId || "RFID-9988-77"}</p>
            </div>

            <div class="barcode">
              ||||| | ||||| || ||| | ||| ||||<br>
              RFID-CARD-AUTHENTICATED
            </div>
          </div>
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  // Render Login / Forgot Password Panels
  if (step < 3) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-brand-beige dotbg noise">
        
        <div className="w-full max-w-md relative z-10">
          
          {/* Logo & branding header */}
          <div className="flex flex-col items-center mb-6 text-center">
            <img src="/logo.png" alt="Sharda Academy Logo" className="w-16 h-16 mb-2"
              onError={(e) => { e.target.style.display = 'none'; }} style={{ objectFit: "contain" }} />
            <h2 className="text-xl font-black text-brand-blue uppercase tracking-tight">SHARDA ACADEMY</h2>
            <p className="text-[9px] font-bold text-brand-yellow uppercase tracking-widest mt-0.5">Master Admin Console</p>
          </div>

          {/* Unified White Card with Gold highlight */}
          <div className="w-full max-w-md p-8 rounded-2xl bg-white border border-brand-yellow/30 shadow-2xl space-y-6">

            {/* Alert banners */}
            {error && (
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700 animate-pulse w-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
                <span>{error}</span>
              </div>
            )}
            {message && (
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50 border border-brand-yellow/30 text-xs font-semibold text-brand-yellow-dark w-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-4 h-4 text-brand-yellow-dark flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span>{message}</span>
              </div>
            )}

            {/* ── LOGIN VIEW: Email + Password ──────────────────────── */}
            {authView === "login" && (
              <form onSubmit={handleAdminLogin} className="space-y-4 text-xs">
                <div className="text-center pb-1">
                  <p className="text-xs font-black text-brand-blue uppercase tracking-wider">Secure Admin Sign In</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">Admin Email</label>
                    <input
                      type="email" required
                      value={email} onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. admin@gmail.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"} required
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-4 py-2.5 pr-12 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/50 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 focus:outline-none select-none"
                      >
                        {showPassword ? (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.815 7.815 3 3m-3-3a8.2 8.2 0 0 1-4.59 1.59M12.013 9.014a3 3 0 1 0 4.28 4.28" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="submit" disabled={loading}
                  className="w-full py-3 rounded-xl text-xs font-extrabold text-brand-blue bg-brand-yellow hover:bg-amber-400 shadow-md shadow-brand-yellow/20 uppercase tracking-widest transition-all hover:-translate-y-0.5 active:scale-95 duration-200 cursor-pointer mt-2"
                >
                  {loading ? "AUTHENTICATING..." : "SIGN IN TO CONSOLE"}
                </button>

                <button
                  type="button"
                  onClick={() => { setAuthView("forgot_email"); setError(""); setMessage(""); }}
                  className="block w-full text-center text-[10px] font-bold text-slate-500 hover:text-brand-blue uppercase tracking-wider transition-colors duration-200 cursor-pointer"
                >
                  Forgot Password?
                </button>
              </form>
            )}

            {/* ── FORGOT: Step 1 — Enter Email ──────────────────────── */}
            {authView === "forgot_email" && (
              <form onSubmit={handleForgotRequest} className="space-y-4 text-xs">
                <div className="text-center pb-1">
                  <p className="text-xs font-black text-brand-blue uppercase tracking-wider">Password Recovery</p>
                  <p className="text-[10px] text-slate-500 mt-1 font-medium">Enter your admin email to receive a recovery code</p>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">Admin Email</label>
                  <input
                    type="email" required
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. admin@gmail.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/50 transition-all"
                  />
                </div>

                <button
                  type="submit" disabled={loading}
                  className="w-full py-3 rounded-xl text-xs font-extrabold text-brand-blue bg-brand-yellow hover:bg-amber-400 shadow-md shadow-brand-yellow/20 uppercase tracking-widest transition-all hover:-translate-y-0.5 active:scale-95 duration-200 cursor-pointer mt-2"
                >
                  {loading ? "SENDING CODE..." : "SEND RECOVERY CODE"}
                </button>

                <button
                  type="button"
                  onClick={() => { setAuthView("login"); setError(""); setMessage(""); }}
                  className="block w-full text-center text-[10px] font-bold text-slate-500 hover:text-brand-blue uppercase tracking-wider transition-colors duration-200 cursor-pointer"
                >
                  ← Back to Sign In
                </button>
              </form>
            )}

            {/* ── FORGOT: Step 2 — OTP + New Password ──────────────── */}
            {authView === "forgot_otp" && (
              <form onSubmit={handleResetPassword} className="space-y-4 text-xs">
                <div className="text-center pb-1">
                  <p className="text-xs font-black text-brand-blue uppercase tracking-wider">Reset Password</p>
                  <p className="text-[10px] text-slate-500 mt-1 font-medium">Enter the 6-digit code sent to your email</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">6-Digit Email OTP</label>
                    <input
                      type="text" required maxLength={6}
                      value={otp} onChange={(e) => setOtp(e.target.value)}
                      placeholder="— — — — — —"
                      className="w-full px-4 py-2.5 text-center font-mono text-lg tracking-widest rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">New Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"} required
                        value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Create new secure password"
                        className="w-full px-4 py-2.5 pr-12 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/50 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 focus:outline-none select-none"
                      >
                        {showPassword ? (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.815 7.815 3 3m-3-3a8.2 8.2 0 0 1-4.59 1.59M12.013 9.014a3 3 0 1 0 4.28 4.28" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="submit" disabled={loading}
                  className="w-full py-3 rounded-xl text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 uppercase tracking-widest transition-all hover:-translate-y-0.5 active:scale-95 duration-200 cursor-pointer mt-2"
                >
                  {loading ? "RESETTING..." : "RESET & SIGN IN"}
                </button>

                <button
                  type="button"
                  onClick={() => { setAuthView("login"); setError(""); setMessage(""); setOtp(""); setNewPassword(""); }}
                  className="block w-full text-center text-[10px] font-bold text-slate-500 hover:text-brand-blue uppercase tracking-wider transition-colors duration-200 cursor-pointer"
                >
                  ← Back to Sign In
                </button>
              </form>
            )}

          </div>



        </div>
      </div>
    );
  }

  const { metrics, syncLogs, usersList, feesList, inquiriesList, activityLogs } = dashboardData || {
    metrics: {}, syncLogs: [], usersList: [], feesList: [], inquiriesList: [], activityLogs: []
  };

  return (
    <div className="min-h-screen bg-brand-beige text-brand-text-navy flex flex-col md:flex-row noise dotbg relative">
      
      {/* Mobile Sidebar backdrop */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)} 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
        />
      )}

      {/* 🖥️ Collapsible Sidebar for Admin ERP */}
      <aside className={`fixed inset-y-0 left-0 z-50 flex flex-col transition-all duration-300 md:sticky md:top-0 md:h-screen shrink-0 border-r border-white/10 ${
        sidebarOpen 
          ? "w-64 translate-x-0" 
          : "w-64 -translate-x-full md:w-16 md:translate-x-0"
      }`}>
        
        {sidebarOpen ? (
          <div className="p-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="w-8 h-8" onError={(e) => { e.target.style.display = 'none'; }} style={{ objectFit: "contain" }} />
              <div>
                <h1 className="text-xs font-black text-white uppercase tracking-tight">SHARDA ACADEMY</h1>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <p className="text-[7.5px] font-bold text-emerald-400 uppercase tracking-widest leading-none">Console Online</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1.5 rounded-lg bg-white/5 text-white/60 hover:text-white cursor-pointer transition-all hover:bg-white/10"
              aria-label="Collapse Sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="p-3.5 flex flex-col items-center gap-3 border-b border-white/10">
            <img src="/logo.png" alt="Logo" className="w-8 h-8" onError={(e) => { e.target.style.display = 'none'; }} style={{ objectFit: "contain" }} />
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-1.5 rounded-lg bg-white/5 text-white/60 hover:text-white cursor-pointer transition-all hover:bg-white/10"
              aria-label="Expand Sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        )}

        <nav className="p-3 flex-grow space-y-1.5 overflow-y-auto">
          {[
            { id: "overview", label: "Analytics Overview" },
            { id: "students", label: "Students CRUD" },
            { id: "admissions", label: "Admissions Inquiry" },
            { id: "biometric", label: "Biometric Logs" },
            { id: "billing", label: "Tuition Fees" },
            { id: "schedules", label: "Class Schedules" },
            { id: "logs", label: "Audit Activity Logs" },
          ].map((t) => {
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => {
                  setActiveTab(t.id);
                  // Auto-close sidebar on mobile after choosing a tab
                  if (window.innerWidth < 768) {
                    setSidebarOpen(false);
                  }
                }}
                className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center cursor-pointer ${
                  sidebarOpen ? "px-3.5 gap-3" : "justify-center px-1"
                } ${
                  isActive
                    ? "bg-brand-yellow text-brand-blue shadow-lg shadow-brand-yellow/25 translate-x-1 border-l-4 border-brand-yellow"
                    : "text-slate-100 hover:text-brand-yellow hover:bg-white/5 hover:translate-x-0.5 border-l-2 border-transparent hover:border-brand-yellow"
                }`}
              >
                {getSidebarIcon(t.id, `h-5 w-5 transition-colors ${isActive ? "text-brand-blue" : "text-slate-300"}`)}
                {sidebarOpen && <span>{t.label}</span>}
              </button>
            );
          })}
        </nav>

        <div className="p-3 border-t border-white/10">
          {sidebarOpen ? (
            <button
              onClick={handleLogout}
              className="w-full py-2 px-3.5 rounded-xl border border-red-500/35 bg-red-500/10 text-red-400 hover:bg-brand-red hover:text-white hover:border-transparent text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer hover:shadow-lg hover:shadow-brand-red/15"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="h-4.5 w-4.5 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
              </svg>
              <span>Sign Out</span>
            </button>
          ) : (
            <div className="flex justify-center">
              <button
                onClick={handleLogout}
                className="w-10 h-10 rounded-full border border-red-500/35 bg-red-500/10 text-red-400 hover:bg-brand-red hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-brand-red/15"
                title="Sign Out"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="h-4.5 w-4.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Main Panel Content Area */}
      <div className="flex-grow flex flex-col min-w-0 w-full">
        
        <header className="p-4 bg-[#0a1835] border-b-2 border-brand-yellow flex items-center justify-between sticky top-0 z-20 shadow-md">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white md:hidden cursor-pointer"
              aria-label="Open Sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <h2 className="text-sm font-black uppercase tracking-wider text-white">
              {activeTab === "overview" ? "OVERVIEW" : activeTab === "students" ? "STUDENTS CRUD" : activeTab === "admissions" ? "ADMISSIONS INQUIRY" : activeTab === "biometric" ? "BIOMETRIC LOGS" : activeTab === "billing" ? "TUITION FEES" : activeTab === "schedules" ? "CLASS SCHEDULES" : activeTab === "logs" ? "AUDIT ACTIVITY LOGS" : activeTab.toUpperCase()}
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={simulateExportCSV}
              className="px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#0a1835] bg-brand-yellow hover:bg-amber-400 rounded-lg shadow transition duration-200 cursor-pointer flex items-center gap-1.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <span>EXPORT LEDGER CSV</span>
            </button>
          </div>
        </header>

        <main className="p-6 md:p-8 max-w-7xl w-full mx-auto space-y-6 flex-grow">

          {error && (
            <div className="p-3.5 text-xs font-semibold text-red-800 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2.5 shadow-sm animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-4 h-4 text-red-600 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
              <span>{error}</span>
            </div>
          )}
          {message && (
            <div className="p-3.5 text-xs font-semibold text-brand-blue bg-brand-yellow-light border border-brand-yellow/30 rounded-xl flex items-center gap-2.5 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-brand-yellow-dark flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>{message}</span>
            </div>
          )}

          {/* ========================================================
              TAB CONTENT: OVERVIEW
              ======================================================== */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              
              {/* Quick Summary Widgets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                {/* Total Students Card (Blue Wing Theme) */}
                <div className="p-5 bg-white border-l-4 border-l-[#0c46c4] border-t border-r border-b border-brand-blue/8 rounded-2xl shadow-sm flex items-center justify-between hover-glow transition-all duration-300 cursor-pointer">
                  <div className="space-y-1.5 text-left">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Total Students</p>
                    <div className="text-3xl font-black text-[#0c46c4] tracking-tight">{metrics.students}</div>
                    <p className="text-[9px] text-[#0c46c4]/70 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0c46c4]"></span> Active Learners
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#dbeafe]/60 flex items-center justify-center text-[#0c46c4] flex-shrink-0">
                    {getSidebarIcon("students", "w-6 h-6")}
                  </div>
                </div>

                {/* Paid Invoices Card (Gold Wing Theme) */}
                <div className="p-5 bg-white border-l-4 border-l-[#f1af3c] border-t border-r border-b border-brand-blue/8 rounded-2xl shadow-sm flex items-center justify-between hover-glow transition-all duration-300 cursor-pointer">
                  <div className="space-y-1.5 text-left">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Paid Invoices</p>
                    <div className="text-3xl font-black text-[#d97706] tracking-tight">₹{metrics.paidFees}</div>
                    <p className="text-[9px] text-[#d97706]/70 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]"></span> Consolidated
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#fef3c7]/60 flex items-center justify-center text-[#d97706] flex-shrink-0">
                    {getSidebarIcon("billing", "w-6 h-6")}
                  </div>
                </div>

                {/* Online Inquiries Card (Red Wing Theme) */}
                <div className="p-5 bg-white border-l-4 border-l-[#dc2626] border-t border-r border-b border-brand-blue/8 rounded-2xl shadow-sm flex items-center justify-between hover-glow transition-all duration-300 cursor-pointer">
                  <div className="space-y-1.5 text-left">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Online Inquiries</p>
                    <div className="text-3xl font-black text-[#dc2626] tracking-tight">{metrics.inquiries || 0}</div>
                    <p className="text-[9px] text-[#dc2626]/70 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] animate-pulse"></span> Pending Review
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#fee2e2]/60 flex items-center justify-center text-[#dc2626] flex-shrink-0">
                    {getSidebarIcon("admissions", "w-6 h-6")}
                  </div>
                </div>

              </div>

              {/* Biometric center */}
              <div className="p-6 bg-white border border-brand-blue/5 rounded-2xl shadow-sm space-y-5 hover-glow transition-all duration-300">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    {getSidebarIcon("biometric", "w-5 h-5 text-brand-blue animate-pulse")}
                    <h4 className="text-xs font-black uppercase tracking-wider text-brand-blue">Biometric Sync Center</h4>
                  </div>
                  <span className="px-2.5 py-0.5 text-[8px] font-extrabold text-white bg-emerald-500 rounded-full tracking-widest animate-pulse">ONLINE</span>
                </div>
                
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/40 text-xs flex justify-between items-center gap-4">
                  <div className="text-left">
                    <p className="font-extrabold text-brand-blue">RFID Biometric Gate Sync</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Punch live gate attendance logs automatically</p>
                  </div>
                  <button
                    onClick={simulateBiometricSync}
                    className="px-4 py-2 text-[10px] font-extrabold uppercase text-[#0a1835] bg-brand-yellow hover:bg-amber-400 rounded-lg shadow shadow-brand-yellow/15 transition-all hover:-translate-y-0.5 active:scale-95 duration-200 cursor-pointer flex-shrink-0 flex items-center gap-1.5"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    <span>SIMULATE GATE PUNCH</span>
                  </button>
                </div>

                {simSuccess && (
                  <div className="p-3 text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-250/20 rounded-lg font-semibold animate-pulse">
                    ✓ {simSuccess}
                  </div>
                )}

                <div className="text-left">
                  <label className="block text-[10px] font-extrabold text-brand-blue uppercase tracking-wider mb-2">Select Student Biometric RFID Card</label>
                  <div className="relative">
                    <select
                      value={simBiometricId}
                      onChange={(e) => setSimBiometricId(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/50 transition-all appearance-none cursor-pointer"
                    >
                      {usersList.filter(u=>u.role==="student").map((s) => (
                        <option key={s._id} value={s.biometricId}>
                          {s.name} (RFID Card: {s.biometricId || "RFID-9988-77"})
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-[10px]">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ========================================================
              TAB CONTENT: STUDENTS CRUD & ID CARDS
              ======================================================== */}
          {activeTab === "students" && (() => {
            const students = usersList.filter(u => u.role === "student");
            const classLevels = [...new Set(students.map(s => s.classLevel || 10))].sort((a, b) => a - b);
            const filteredLevels = classFilter === "all" ? classLevels : classLevels.filter(c => c === parseInt(classFilter));

            return (
            <div className="space-y-5">
              
              {/* Header with Add Student Button */}
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-black uppercase tracking-wider text-[#0a1835]">Student Directory</h4>
                  <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{students.length} registered students across {classLevels.length} classes</p>
                </div>
                <button
                  onClick={() => setShowAddStudentModal(true)}
                  className="px-5 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-[#0a1835] bg-brand-yellow hover:bg-amber-400 rounded-xl shadow-md shadow-brand-yellow/20 flex items-center gap-2 cursor-pointer hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  <span>Add Student</span>
                </button>
              </div>

              {/* Class Filter Pills */}
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setClassFilter("all")}
                  className={`px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wider rounded-lg border transition-all cursor-pointer ${
                    classFilter === "all"
                      ? "bg-[#0a1835] text-white border-[#0a1835] shadow-md"
                      : "bg-white text-slate-500 border-slate-200 hover:border-[#0a1835] hover:text-[#0a1835]"
                  }`}
                >
                  All ({students.length})
                </button>
                {[1,2,3,4,5,6,7,8,9,10,11,12].map(cls => {
                  const count = students.filter(s => (s.classLevel || 10) === cls).length;
                  if (count === 0) return null;
                  return (
                    <button
                      key={cls}
                      onClick={() => setClassFilter(String(cls))}
                      className={`px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wider rounded-lg border transition-all cursor-pointer ${
                        classFilter === String(cls)
                          ? "bg-[#0a1835] text-white border-[#0a1835] shadow-md"
                          : "bg-white text-slate-500 border-slate-200 hover:border-[#0a1835] hover:text-[#0a1835]"
                      }`}
                    >
                      Std {cls} ({count})
                    </button>
                  );
                })}
              </div>

              {/* Class-wise Grouped Sections */}
              {filteredLevels.map(cls => {
                const classStudents = students.filter(s => (s.classLevel || 10) === cls);
                const isFoundation = cls <= 5;
                const isMiddle = cls > 5 && cls <= 8;
                const sectionColor = isFoundation ? "#d97706" : isMiddle ? "#0c46c4" : "#dc2626";
                const sectionBg = isFoundation ? "bg-amber-50" : isMiddle ? "bg-blue-50" : "bg-red-50";
                const avatarBg = isFoundation ? "bg-amber-500" : isMiddle ? "bg-[#0c46c4]" : "bg-[#0a1835]";
                const classBadge = isFoundation ? "bg-amber-50 text-amber-700 border-amber-200" :
                                   isMiddle ? "bg-blue-50 text-blue-700 border-blue-200" :
                                   "bg-red-50 text-red-700 border-red-200";
                const wingName = isFoundation ? "Foundation Wing" : isMiddle ? "Middle Wing" : "Senior Wing";

                return (
                  <div key={cls} className="bg-white border border-brand-blue/6 rounded-2xl shadow-sm overflow-hidden">
                    
                    {/* Section Header */}
                    <div className={`px-5 py-3.5 ${sectionBg} border-b border-slate-100 flex items-center justify-between`}>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-white text-sm shadow-sm" style={{ backgroundColor: sectionColor }}>
                          {cls}
                        </div>
                        <div>
                          <h4 className="text-xs font-black text-[#0a1835] uppercase tracking-wider">Standard {cls}</h4>
                          <p className="text-[9px] font-semibold mt-0.5" style={{ color: sectionColor }}>{wingName} • {classStudents.length} student{classStudents.length !== 1 ? "s" : ""}</p>
                        </div>
                      </div>
                    </div>

                    {/* Students in this class */}
                    <div className="divide-y divide-slate-100">
                      {classStudents.map((student) => {
                        const initial = student.name ? student.name[0].toUpperCase() : "S";
                        return (
                          <div key={student._id} className="hover:bg-slate-50/50 transition-colors duration-200">
                            {/* Card Top Bar */}
                            <div className="px-5 py-3.5 flex items-center gap-4">
                              <div className={`w-10 h-10 rounded-full ${avatarBg} text-white flex items-center justify-center font-black text-sm flex-shrink-0 shadow-sm`}>
                                {initial}
                              </div>
                              <div className="flex-grow min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h5 className="text-[13px] font-black text-[#0a1835] truncate">{student.name}</h5>
                                  <span className={`px-2 py-0.5 rounded-md border text-[8px] font-extrabold uppercase tracking-wider ${classBadge}`}>
                                    Std {cls}
                                  </span>
                                  <span className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[#0a1835] text-[8px] font-bold">
                                    {student.batch || "Batch A"}
                                  </span>
                                </div>
                                <p className="text-[10px] text-slate-400 font-semibold mt-0.5 font-mono">Roll: {student.rollNumber || "N/A"}</p>
                              </div>
                              <div className="flex items-center gap-2 flex-shrink-0">
                                <button
                                  onClick={() => printIDCard(student)}
                                  className="px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wider text-[#0a1835] bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-all flex items-center gap-1.5 cursor-pointer"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm-1.2 6.477a6 6 0 0 0-5.1 0A2.25 2.25 0 0 0 3 18.062v.188c0 .245.02.49.06.732a1.492 1.492 0 0 0 1.378 1.12h7.624a1.492 1.492 0 0 0 1.378-1.12c.04-.242.06-.487.06-.732v-.188a2.25 2.25 0 0 0-1.238-2.028Z" />
                                  </svg>
                                  ID CARD
                                </button>
                                <button
                                  onClick={() => deleteUser(student._id)}
                                  className="px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 hover:bg-red-100 rounded-lg border border-red-200 transition-all flex items-center gap-1.5 cursor-pointer"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                  </svg>
                                  DELETE
                                </button>
                              </div>
                            </div>
                            {/* Detail Row */}
                            <div className="px-5 py-2.5 bg-slate-50/40 grid grid-cols-2 md:grid-cols-4 gap-3">
                              <div className="text-left">
                                <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Email</p>
                                <p className="text-[10px] font-semibold text-[#0a1835] truncate">{student.email}</p>
                              </div>
                              <div className="text-left">
                                <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Phone</p>
                                <p className="text-[10px] font-semibold text-[#0a1835]">{student.phone || "N/A"}</p>
                              </div>
                              <div className="text-left">
                                <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Parent Email</p>
                                <p className="text-[10px] font-semibold text-[#0a1835] truncate">{student.parentEmail || "Not Registered"}</p>
                              </div>
                              <div className="text-left">
                                <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">RFID Biometric</p>
                                <p className="text-[10px] font-mono font-bold text-emerald-600 flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                  {student.biometricId || "RFID-9988-77"}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {students.length === 0 && (
                <div className="py-16 text-center bg-white rounded-2xl border border-brand-blue/6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-slate-300 mx-auto mb-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                  <p className="text-xs font-bold text-slate-400">No students registered yet</p>
                  <p className="text-[10px] text-slate-300 mt-1">Click "+ Add Student" to register your first student</p>
                </div>
              )}

            </div>
            );
          })()}

          {/* ========================================================
              TAB CONTENT: ADMISSIONS INQUIRY REVIEW
              ======================================================== */}
          {activeTab === "admissions" && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Admissions Inquiry Review Board</h4>
              {inquiriesList.map((inq) => (
                <div key={inq._id} className="p-4 bg-white border border-slate-200 rounded-xl shadow space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Class Level: Std {inq.classLevel}</span>
                    <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded ${
                      inq.status === "Approved" ? "bg-emerald-100 text-emerald-700" :
                      inq.status === "Contacted" ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"
                    }`}>{inq.status}</span>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <p className="font-bold text-slate-900">Candidate: {inq.name}</p>
                    <p className="text-slate-500">Parent: {inq.parentName}</p>
                    <p className="text-slate-500">Phone: {inq.phone} | Email: {inq.email}</p>
                  </div>

                  {inq.status === "Pending" && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => approveInquiry(inq._id, "Approved")}
                        className="flex-grow py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span>APPROVE APPLICATION</span>
                      </button>
                      <button
                        onClick={() => approveInquiry(inq._id, "Contacted")}
                        className="py-2 px-3.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-3.5 h-3.5 text-slate-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.022a12.083 12.083 0 0 1-6.173-6.173L9.75 12c.362-.27.527-.732.417-1.173L9.06 6.405a1.022 1.022 0 0 0-1.091-.852H6.75A2.25 2.25 0 0 0 4.5 8.125V6.75Z" />
                        </svg>
                        <span>MARK CONTACTED</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ========================================================
              TAB CONTENT: BIOMETRIC ATTENDANCE LOGS
              ======================================================== */}
          {activeTab === "biometric" && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Attendance Sync Logs Ledger</h4>
              {syncLogs.map((log) => (
                <div key={log._id} className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between text-xs shadow-sm">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-400">{log.date}</span>
                    <p className="font-bold text-slate-900 mt-0.5">{log.studentId?.name}</p>
                    <p className="text-[10px] text-slate-450">Checkin: {log.checkInTime || "--"} | Checkout: {log.checkOutTime || "--"}</p>
                  </div>
                  <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded ${
                    log.status === "Present" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                  }`}>{log.status}</span>
                </div>
              ))}
            </div>
          )}

          {/* ========================================================
              TAB CONTENT: TUITION FEES
              ======================================================== */}
          {activeTab === "billing" && (() => {
            const students = usersList.filter(u => u.role === "student");
            const feesWithClass = feesList.map(fee => {
              const student = students.find(s => s._id === fee.studentId?._id || s._id === fee.studentId);
              return { ...fee, classLevel: student?.classLevel || fee.studentId?.classLevel || 10 };
            });
            const feeClassLevels = [...new Set(feesWithClass.map(f => f.classLevel))].sort((a, b) => a - b);

            return (
            <div className="space-y-6">
              
              {/* Issue Invoice Form */}
              <div className="p-5 bg-white border border-brand-blue/6 rounded-2xl shadow-sm">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#0a1835] mb-4">Issue Tuition Invoice</h4>
                <form onSubmit={issueInvoice} className="space-y-3 text-[11px]">
                  <div>
                    <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Select Student</label>
                    <select
                      value={newFee.studentId} onChange={e=>setNewFee({...newFee, studentId: e.target.value})}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-brand-text-navy focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/50 transition-all cursor-pointer"
                    >
                      {[...new Set(students.map(s => s.classLevel || 10))].sort((a,b) => a-b).map(cls => (
                        <optgroup key={cls} label={`Standard ${cls}`}>
                          {students.filter(s => (s.classLevel || 10) === cls).map(s=>(
                            <option key={s._id} value={s._id}>{s.name} (Roll: {s.rollNumber})</option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number" required placeholder="Fee Amount (₹)"
                      value={newFee.amount} onChange={e=>setNewFee({...newFee, amount: parseInt(e.target.value)})}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-brand-text-navy placeholder-slate-400 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/50 transition-all"
                    />
                    <input
                      type="date" required
                      value={newFee.dueDate} onChange={e=>setNewFee({...newFee, dueDate: e.target.value})}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-brand-text-navy placeholder-slate-400 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/50 transition-all"
                    />
                  </div>
                  <input
                    type="text" placeholder="Description (e.g. Term 1 Coaching Fee)"
                    value={newFee.description} onChange={e=>setNewFee({...newFee, description: e.target.value})}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-brand-text-navy placeholder-slate-400 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/50 transition-all"
                  />
                  <button type="submit" className="w-full py-2.5 text-xs font-extrabold text-brand-blue bg-brand-yellow hover:bg-amber-400 rounded-xl shadow shadow-brand-yellow/15 uppercase tracking-widest transition-all hover:-translate-y-0.5 active:scale-95 duration-200 cursor-pointer">ISSUE INVOICE BILL</button>
                </form>
              </div>

              {/* Class-wise Fee Sections */}
              <div>
                <h4 className="text-sm font-black uppercase tracking-wider text-[#0a1835] mb-4">Fee Ledger by Class</h4>
                
                <div className="space-y-4">
                  {feeClassLevels.map(cls => {
                    const classFees = feesWithClass.filter(f => f.classLevel === cls);
                    const totalAmount = classFees.reduce((sum, f) => sum + (f.amount || 0), 0);
                    const paidCount = classFees.filter(f => f.status === "Paid").length;
                    const unpaidCount = classFees.filter(f => f.status !== "Paid").length;
                    const isFoundation = cls <= 5;
                    const isMiddle = cls > 5 && cls <= 8;
                    const sectionColor = isFoundation ? "#d97706" : isMiddle ? "#0c46c4" : "#dc2626";
                    const sectionBg = isFoundation ? "bg-amber-50" : isMiddle ? "bg-blue-50" : "bg-red-50";

                    return (
                      <div key={cls} className="bg-white border border-brand-blue/6 rounded-2xl shadow-sm overflow-hidden">
                        
                        {/* Section Header */}
                        <div className={`px-5 py-3.5 ${sectionBg} border-b border-slate-100 flex items-center justify-between`}>
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-white text-sm shadow-sm" style={{ backgroundColor: sectionColor }}>
                              {cls}
                            </div>
                            <div>
                              <h4 className="text-xs font-black text-[#0a1835] uppercase tracking-wider">Standard {cls} Fees</h4>
                              <p className="text-[9px] font-semibold mt-0.5" style={{ color: sectionColor }}>
                                {classFees.length} invoice{classFees.length !== 1 ? "s" : ""} • Total ₹{totalAmount.toLocaleString()}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 text-[8px] font-extrabold uppercase rounded-md bg-emerald-100 text-emerald-700">{paidCount} Paid</span>
                            {unpaidCount > 0 && (
                              <span className="px-2 py-0.5 text-[8px] font-extrabold uppercase rounded-md bg-red-100 text-red-700">{unpaidCount} Unpaid</span>
                            )}
                          </div>
                        </div>

                        {/* Fee Items */}
                        <div className="divide-y divide-slate-100">
                          {classFees.map((fee) => (
                            <div key={fee._id} className="px-5 py-3 flex items-center justify-between text-xs hover:bg-slate-50/50 transition-colors">
                              <div>
                                <h5 className="font-bold text-[#0a1835]">{fee.description || "Tuition Fee"}</h5>
                                <p className="text-[10px] text-slate-400 mt-0.5">Student: {fee.studentId?.name} • Invoice: {fee.invoiceId}</p>
                              </div>
                              <div className="flex items-center gap-3">
                                <p className="font-mono font-black text-[#0a1835] text-sm">₹{(fee.amount || 0).toLocaleString()}</p>
                                <div className="text-right space-y-1">
                                  <span className={`text-[8px] font-extrabold uppercase px-2 py-0.5 rounded-md inline-block ${
                                    fee.status === "Paid" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
                                  }`}>{fee.status}</span>
                                  {fee.status === "Unpaid" && (
                                    <button
                                      onClick={() => markInvoicePaid(fee._id)}
                                      className="block px-2.5 py-1 text-[8px] font-extrabold uppercase text-white bg-emerald-600 hover:bg-emerald-700 rounded-md shadow cursor-pointer transition-all"
                                    >
                                      MARK PAID
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}

                  {feesList.length === 0 && (
                    <div className="py-12 text-center bg-white rounded-2xl border border-brand-blue/6">
                      <p className="text-xs font-bold text-slate-400">No invoices issued yet</p>
                      <p className="text-[10px] text-slate-300 mt-1">Use the form above to issue your first invoice</p>
                    </div>
                  )}
                </div>
              </div>

            </div>
            );
          })()}

          {/* ========================================================
              TAB CONTENT: AUDIT ACTIVITY LOGS
              ======================================================== */}
          {activeTab === "logs" && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">System Audit Timeline Logs</h4>
              <div className="space-y-3 border-l-2 border-slate-200 pl-4 py-2">
                {activityLogs.map((log) => (
                  <div key={log._id} className="text-xs relative">
                    <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-brand-blue border border-white"></span>
                    <span className="text-[9px] text-slate-400 font-mono">{new Date(log.timestamp).toLocaleTimeString()} | {new Date(log.timestamp).toLocaleDateString()}</span>
                    <p className="font-bold text-slate-850 mt-0.5 leading-snug">{log.action}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-semibold">User: {log.adminName}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================
              TAB CONTENT: TIMETABLES SCHEDULES
              ======================================================== */}
          {activeTab === "schedules" && (
            <div className="p-4 bg-white border border-brand-blue/10 rounded-xl shadow">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Schedule Class Routines</h4>
              <form onSubmit={scheduleRoutine} className="space-y-3 text-[11px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <select
                    value={newSchedule.classLevel} onChange={e=>setNewSchedule({...newSchedule, classLevel: parseInt(e.target.value)})}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded text-brand-text-navy focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/50 transition-all cursor-pointer"
                  >
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map(n=>(<option key={n} value={n}>Class {n}</option>))}
                  </select>
                  <input
                    type="text" required placeholder="Batch (e.g. HSC Board)"
                    value={newSchedule.batch} onChange={e=>setNewSchedule({...newSchedule, batch: e.target.value})}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded text-brand-text-navy placeholder-slate-400 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/50 transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text" required placeholder="Subject"
                    value={newSchedule.subject} onChange={e=>setNewSchedule({...newSchedule, subject: e.target.value})}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded text-brand-text-navy placeholder-slate-400 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/50 transition-all"
                  />
                  <input
                    type="text" required placeholder="Teacher Name"
                    value={newSchedule.teacherName} onChange={e=>setNewSchedule({...newSchedule, teacherName: e.target.value})}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded text-brand-text-navy placeholder-slate-400 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/50 transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <select
                    value={newSchedule.day} onChange={e=>setNewSchedule({...newSchedule, day: e.target.value})}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded text-brand-text-navy focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/50 transition-all cursor-pointer"
                  >
                    {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(d=>(<option key={d} value={d}>{d}</option>))}
                  </select>
                  <input
                    type="text" required placeholder="Start Time (e.g. 04:00 PM)"
                    value={newSchedule.startTime} onChange={e=>setNewSchedule({...newSchedule, startTime: e.target.value})}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded text-brand-text-navy placeholder-slate-400 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/50 transition-all"
                  />
                  <input
                    type="text" required placeholder="End Time (e.g. 05:30 PM)"
                    value={newSchedule.endTime} onChange={e=>setNewSchedule({...newSchedule, endTime: e.target.value})}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded text-brand-text-navy placeholder-slate-400 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/50 transition-all"
                  />
                </div>
                <input
                  type="text" placeholder="Room Number (e.g. Classroom 101)"
                  value={newSchedule.room} onChange={e=>setNewSchedule({...newSchedule, room: e.target.value})}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded text-brand-text-navy placeholder-slate-400 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/50 transition-all"
                />
                <button type="submit" className="w-full py-2.5 text-xs font-extrabold text-brand-blue bg-brand-yellow hover:bg-amber-400 rounded-xl shadow shadow-brand-yellow/15 uppercase tracking-widest transition-all hover:-translate-y-0.5 active:scale-95 duration-200 cursor-pointer">SCHEDULE ROUTINE</button>
              </form>
            </div>
          )}

        </main>
      </div>

      {/* STUDENT ID CARD EXPORT DIALOG MODAL */}
      {idCardSimulating && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4">
          <div className="w-full max-w-md p-6 bg-white rounded-t-2xl sm:rounded-2xl shadow-xl border border-brand-blue/10 animate-slide-up space-y-4">
            
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-850">ID Card Generator</h3>
              <button onClick={() => setIdCardSimulating(null)} className="text-slate-400 hover:text-slate-700 hover:bg-slate-100 p-1.5 rounded-lg transition cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 border-2 border-brand-blue bg-white rounded-xl text-center shadow-lg max-w-[280px] mx-auto space-y-3 relative overflow-hidden">
              <div className="border-b border-brand-red pb-1">
                <h4 className="text-sm font-black text-brand-blue">SHARDA ACADEMY</h4>
                <p className="text-[8px] font-bold text-brand-red uppercase tracking-wider">Mankhurd - 43</p>
              </div>
              <div className="w-14 h-14 rounded-full gradient-brand-header text-white font-bold flex items-center justify-center text-lg mx-auto shadow-sm">
                {idCardSimulating.name[0].toUpperCase()}
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-900 leading-tight">{idCardSimulating.name}</h5>
                <p className="text-[10px] text-brand-red font-semibold">{idCardSimulating.rollNumber}</p>
              </div>

              <div className="text-left text-[9px] bg-slate-50 p-2.5 rounded-lg border border-slate-200 space-y-0.5">
                <p><strong>Class Level:</strong> Standard {idCardSimulating.classLevel}</p>
                <p><strong>Batch:</strong> {idCardSimulating.batch}</p>
                <p><strong>RFID Card:</strong> <span className="text-emerald-600 font-bold">{idCardSimulating.biometricId || "RFID-9988-77"}</span></p>
              </div>

              <div className="pt-2 text-[8px] font-mono text-slate-400 leading-none">
                ||||||||||||||||||||||||||||||||||||||<br />
                STUDENT-RFID-AUTHENTICATED
              </div>
            </div>

            <button
              onClick={triggerBrowserPrintID}
              className="w-full py-3.5 text-xs font-extrabold uppercase tracking-widest text-brand-blue bg-brand-yellow hover:bg-amber-400 rounded-xl shadow shadow-brand-yellow/20 transition-all hover:-translate-y-0.5 active:scale-95 duration-200 cursor-pointer flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096a42.42 42.42 0 0 0-10.56 0m10.56 0L17.66 18m0 0a1.072 1.072 0 0 1-.767.983c-2.449.698-5.022.698-7.472 0A1.073 1.073 0 0 1 8.66 18m9 0v-2.625M8.66 18v-2.625m9-.002a3 3 0 0 0-3-3h-5.32a3 3 0 0 0-3 3M16.5 7.5V3a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v4.5m10.5 0V9a1.5 1.5 0 0 1-1.5 1.5h-10.5A1.5 1.5 0 0 1 3 9V7.5m13.5 0h.008v.008H16.5V7.5Z" />
              </svg>
              <span>PRINT ID CARD</span>
            </button>

          </div>
        </div>
      )}

      {/* ══════ ADD STUDENT MODAL POPUP ══════ */}
      {showAddStudentModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-brand-blue/10 overflow-hidden">
            
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#0a1835] flex items-center justify-between">
              <div>
                <h3 className="text-sm font-black text-white uppercase tracking-wider">Register New Student</h3>
                <p className="text-[9px] text-slate-400 font-semibold mt-0.5">Fill in the student profile details below</p>
              </div>
              <button
                onClick={() => setShowAddStudentModal(false)}
                className="text-white/60 hover:text-white hover:bg-white/10 p-2 rounded-lg transition cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={(e) => { createUser(e); setShowAddStudentModal(false); }} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Full Name</label>
                  <input
                    type="text" required placeholder="Student name"
                    value={newUser.name} onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Email Address</label>
                  <input
                    type="email" required placeholder="student@email.com"
                    value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Phone Number</label>
                  <input
                    type="text" placeholder="Mobile number"
                    value={newUser.phone} onChange={(e) => setNewUser({...newUser, phone: e.target.value})}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Roll Number</label>
                  <input
                    type="text" required placeholder="SA-2026-001"
                    value={newUser.rollNumber} onChange={(e) => setNewUser({...newUser, rollNumber: e.target.value})}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Class</label>
                  <select
                    value={newUser.classLevel} onChange={(e) => setNewUser({...newUser, classLevel: parseInt(e.target.value)})}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg cursor-pointer"
                  >
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map(n=>(<option key={n} value={n}>Class {n}</option>))}
                  </select>
                </div>
                <div>
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Batch</label>
                  <input
                    type="text" placeholder="Batch A"
                    value={newUser.batch} onChange={(e) => setNewUser({...newUser, batch: e.target.value})}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">RFID Card ID</label>
                  <input
                    type="text" placeholder="RFID-XXXX-XX"
                    value={newUser.biometricId} onChange={(e) => setNewUser({...newUser, biometricId: e.target.value})}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Parent Email Address</label>
                <input
                  type="email" placeholder="parent@email.com"
                  value={newUser.parentEmail} onChange={(e) => setNewUser({...newUser, parentEmail: e.target.value})}
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg"
                />
              </div>

              {/* Modal Actions */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddStudentModal(false)}
                  className="flex-1 py-3 text-xs font-extrabold uppercase tracking-wider text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-[2] py-3 text-xs font-extrabold uppercase tracking-widest text-[#0a1835] bg-brand-yellow hover:bg-amber-400 rounded-xl shadow-md shadow-brand-yellow/20 transition-all hover:-translate-y-0.5 active:scale-95 duration-200 cursor-pointer"
                >
                  Register Student
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
