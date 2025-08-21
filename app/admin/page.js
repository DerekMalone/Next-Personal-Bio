'use client';

import AdminLogin from '../components/AdminLogin';
import AdminDashboard from '../components/AdminDashboard';
import { useAuth } from "../../contexts/AuthContext";

export default function AdminPage() {
  const { currentUser, isAdmin, loading } = useAuth();

  const handleLogin = () => {
    // Login is handled by Firebase Auth context
    // This function can be used for additional logic if needed
  };

  const handleLogout = () => {
    // Logout is handled by Firebase Auth context
    // This function can be used for additional logic if needed
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {!isAdmin() ? (
        <AdminLogin onLogin={handleLogin} />
      ) : (
        <AdminDashboard currentUser={currentUser} onLogout={handleLogout} />
      )}
    </div>
  );
}