import React, { useState } from 'react';

const CareerManager = () => {
  const [pendingJobs] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Microsoft',
      type: 'Full-time',
      location: 'Seattle, USA',
      salary: '$120,000 - $150,000',
      deadline: '2024-02-28',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Data Scientist',
      company: 'Google',
      type: 'Full-time',
      location: 'Singapore',
      salary: '$8,000 - $12,000',
      deadline: '2024-02-15',
      status: 'pending'
    }
  ]);

  const handleApprove = (id) => {
    alert(`Lowongan dengan ID ${id} telah dipublikasikan`);
  };

  const handleReject = (id) => {
    alert(`Lowongan dengan ID ${id} telah ditolak`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-text-dark">Manajemen Karier</h2>
        <button className="btn-primary">Tambah Lowongan Baru</button>
      </div>

      {/* Pending Job Posts */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Lowongan Menunggu Review</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Posisi</th>
                <th className="text-left py-2">Perusahaan</th>
                <th className="text-left py-2">Tipe</th>
                <th className="text-left py-2">Lokasi</th>
                <th className="text-left py-2">Gaji</th>
                <th className="text-left py-2">Deadline</th>
                <th className="text-left py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {pendingJobs.map((job) => (
                <tr key={job.id} className="border-b">
                  <td className="py-3">{job.title}</td>
                  <td className="py-3">{job.company}</td>
                  <td className="py-3">{job.type}</td>
                  <td className="py-3">{job.location}</td>
                  <td className="py-3">{job.salary}</td>
                  <td className="py-3">{job.deadline}</td>
                  <td className="py-3 space-x-2">
                    <button 
                      onClick={() => handleApprove(job.id)}
                      className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                    >
                      Publikasi
                    </button>
                    <button 
                      onClick={() => handleReject(job.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                    >
                      Tolak
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Job Categories Management */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Kelola Kategori Lowongan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Kategori Baru</label>
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Nama kategori"
                className="flex-1 p-2 border rounded"
              />
              <button className="btn-secondary">Tambah</button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Kategori Aktif</label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="flex-1 p-2 bg-secondary rounded">Technology</span>
                <button className="text-red-600 hover:text-red-700">Hapus</button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="flex-1 p-2 bg-secondary rounded">Research</span>
                <button className="text-red-600 hover:text-red-700">Hapus</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Statistik Lowongan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-secondary rounded">
            <p className="text-sm text-text-primary">Total Views</p>
            <p className="text-2xl font-bold text-text-dark">1,234</p>
          </div>
          <div className="p-4 bg-secondary rounded">
            <p className="text-sm text-text-primary">Aplikasi Masuk</p>
            <p className="text-2xl font-bold text-text-dark">56</p>
          </div>
          <div className="p-4 bg-secondary rounded">
            <p className="text-sm text-text-primary">Success Rate</p>
            <p className="text-2xl font-bold text-text-dark">85%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerManager;
