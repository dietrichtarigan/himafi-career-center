import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status on mount
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    const role = localStorage.getItem('userRole');
    setIsAuthenticated(authStatus);
    setUserRole(role);
  }, []);

  const login = (email, password) => {
    // For demo purposes, using hardcoded credentials
    if (email === 'admin@himafi.itb.ac.id' && password === 'admin123') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', 'admin');
      setIsAuthenticated(true);
      setUserRole('admin');
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    setIsAuthenticated(false);
    setUserRole(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
