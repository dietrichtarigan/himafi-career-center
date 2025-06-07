import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AlumniManager from '../components/admin/AlumniManager';
import CareerManager from '../components/admin/CareerManager';
import MediaManager from '../components/admin/MediaManager';
import { useAuth } from '../contexts/AuthContext';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    alumni: {
      total: 500,
      newThisMonth: 25,
      pendingVerification: 10
    },
    jobs: {
      active: 15,
      expired: 8,
      pendingReview: 5
    },
    events: {
      upcoming: 4,
      past: 12,
      registrations: 156
    },
    media: {
      totalVideos: 24,
      totalPhotos: 85,
      pendingUploads: 3
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'alumni':
        return <AlumniManager />;
      case 'career':
        return <CareerManager />;
      case 'media':
        return <MediaManager />;
      default:
        return (
          <>
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="card">
                <h3 className="font-semibold mb-2">Alumni</h3>
                <p className="text-2xl font-bold text-text-dark">{stats.alumni.total}</p>
                <p className="text-sm text-text-primary">+{stats.alumni.newThisMonth} bulan ini</p>
              </div>
              <div className="card">
                <h3 className="font-semibold mb-2">Lowongan Aktif</h3>
                <p className="text-2xl font-bold text-text-dark">{stats.jobs.active}</p>
                <p className="text-sm text-text-primary">{stats.jobs.pendingReview} menunggu review</p>
              </div>
              <div className="card">
                <h3 className="font-semibold mb-2">Event Mendatang</h3>
                <p className="text-2xl font-bold text-text-dark">{stats.events.upcoming}</p>
                <p className="text-sm text-text-primary">{stats.events.registrations} pendaftar</p>
              </div>
              <div className="card">
                <h3 className="font-semibold mb-2">Media</h3>
                <p className="text-2xl font-bold text-text-dark">{stats.media.totalVideos + stats.media.totalPhotos}</p>
                <p className="text-sm text-text-primary">{stats.media.pendingUploads} siap upload</p>
              </div>
            </div>

            {/* Main Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="card">
                <h3 className="text-xl font-bold text-text-dark mb-4">Manajemen Alumni</h3>
                <div className="space-y-3">
                  <button 
                    onClick={() => setActiveTab('alumni')}
                    className="btn-primary w-full"
                  >
                    Kelola Alumni
                  </button>
                  <button className="btn-secondary w-full">Export Data Alumni</button>
                  <button className="btn-secondary w-full">Kirim Newsletter</button>
                </div>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold text-text-dark mb-4">Manajemen Karier</h3>
                <div className="space-y-3">
                  <button 
                    onClick={() => setActiveTab('career')}
                    className="btn-primary w-full"
                  >
                    Kelola Lowongan
                  </button>
                  <button className="btn-secondary w-full">Update Status Lowongan</button>
                  <button className="btn-secondary w-full">Statistik Aplikasi</button>
                </div>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold text-text-dark mb-4">Media & Event</h3>
                <div className="space-y-3">
                  <button 
                    onClick={() => setActiveTab('media')}
                    className="btn-primary w-full"
                  >
                    Kelola Media
                  </button>
                  <button className="btn-secondary w-full">Kelola Event</button>
                  <button className="btn-secondary w-full">Update Galeri</button>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="card">
              <h3 className="text-xl font-bold text-text-dark mb-4">Aktivitas Terbaru</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b">
                  <div>
                    <p className="font-medium">Alumni Baru Terdaftar</p>
                    <p className="text-sm text-text-primary">Sarah Wijaya - Data Scientist Google</p>
                  </div>
                  <span className="text-sm text-text-primary">2 jam yang lalu</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <div>
                    <p className="font-medium">Lowongan Baru</p>
                    <p className="text-sm text-text-primary">Software Engineer - Microsoft</p>
                  </div>
                  <span className="text-sm text-text-primary">5 jam yang lalu</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <div>
                    <p className="font-medium">Event Selesai</p>
                    <p className="text-sm text-text-primary">Phi Talks: AI in Physics Research</p>
                  </div>
                  <span className="text-sm text-text-primary">1 hari yang lalu</span>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-primary-bg">
      <div className="container-max py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold text-text-dark">Admin Dashboard</h1>
            <button 
              onClick={() => useAuth().logout()}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex space-x-2">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded ${activeTab === 'overview' ? 'bg-text-dark text-white' : 'bg-secondary'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('alumni')}
              className={`px-4 py-2 rounded ${activeTab === 'alumni' ? 'bg-text-dark text-white' : 'bg-secondary'}`}
            >
              Alumni
            </button>
            <button 
              onClick={() => setActiveTab('career')}
              className={`px-4 py-2 rounded ${activeTab === 'career' ? 'bg-text-dark text-white' : 'bg-secondary'}`}
            >
              Karier
            </button>
            <button 
              onClick={() => setActiveTab('media')}
              className={`px-4 py-2 rounded ${activeTab === 'media' ? 'bg-text-dark text-white' : 'bg-secondary'}`}
            >
              Media
            </button>
          </div>
        </div>
        
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
