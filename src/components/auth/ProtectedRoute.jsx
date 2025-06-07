import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const userRole = localStorage.getItem('userRole');

  if (!isAuthenticated || userRole !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
