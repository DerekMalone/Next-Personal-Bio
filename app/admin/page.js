'use client';

import { AuthProvider, useAuth } from '../../contexts/AuthContext';
import AdminLogin from '../components/AdminLogin';
import AdminDashboard from '../components/AdminDashboard';

function AdminContent() {
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
        <AdminDashboard onLogout={handleLogout} />
      )}
    </div>
  );
}

export default function AdminPage() {
  return (
    <AuthProvider>
      <AdminContent />
    </AuthProvider>
  );
}
