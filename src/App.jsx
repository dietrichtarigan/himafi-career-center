import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import AlumniPortal from './pages/AlumniPortal'
import CareerBoard from './pages/CareerBoard'
import MediaCenter from './pages/MediaCenter'
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'
import ProtectedRoute from './components/auth/ProtectedRoute'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alumni" element={<AlumniPortal />} />
          <Route path="/careers" element={<CareerBoard />} />
          <Route path="/media" element={<MediaCenter />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Layout>
    </AuthProvider>
  )
}

export default App
