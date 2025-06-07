import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const success = login(email, password);
    if (success) {
      navigate('/admin');
    } else {
      setError('Email atau password salah');
    }
  };

  return (
    <div className="min-h-screen bg-primary-bg flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-text-dark">ARCADE Admin</h2>
          <p className="text-text-primary mt-2">Login untuk mengakses panel admin</p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-text-dark"
              placeholder="admin@himafi.itb.ac.id"
              autoComplete="username"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-dark mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-text-dark"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-text-dark text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-text-primary">
          <p>Demo Credentials:</p>
          <p>Email: admin@himafi.itb.ac.id</p>
          <p>Password: admin123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
