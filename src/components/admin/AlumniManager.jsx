import React, { useState } from 'react';

const AlumniManager = () => {
  const [pendingAlumni] = useState([
    {
      id: 1,
      name: 'Ahmad Rizki',
      email: 'ahmad.rizki@email.com',
      nim: '13518001',
      angkatan: '2018',
      company: 'Tesla',
      position: 'Research Engineer',
      status: 'pending'
    },
    {
      id: 2,
      name: 'Maya Sari',
      email: 'maya.sari@email.com',
      nim: '13519002',
      angkatan: '2019',
      company: 'Tokopedia',
      position: 'Product Manager',
      status: 'pending'
    }
  ]);

  const handleApprove = (id) => {
    alert(`Alumni dengan ID ${id} telah disetujui`);
  };

  const handleReject = (id) => {
    alert(`Alumni dengan ID ${id} telah ditolak`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-text-dark">Manajemen Alumni</h2>
        <div className="space-x-2">
          <button className="btn-primary">Export CSV</button>
          <button className="btn-secondary">Import Data</button>
        </div>
      </div>

      {/* Pending Verifications */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Alumni Menunggu Verifikasi</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Nama</th>
                <th className="text-left py-2">Email</th>
                <th className="text-left py-2">Angkatan</th>
                <th className="text-left py-2">Perusahaan</th>
                <th className="text-left py-2">Posisi</th>
                <th className="text-left py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {pendingAlumni.map((alumni) => (
                <tr key={alumni.id} className="border-b">
                  <td className="py-3">{alumni.name}</td>
                  <td className="py-3">{alumni.email}</td>
                  <td className="py-3">{alumni.angkatan}</td>
                  <td className="py-3">{alumni.company}</td>
                  <td className="py-3">{alumni.position}</td>
                  <td className="py-3 space-x-2">
                    <button 
                      onClick={() => handleApprove(alumni.id)}
                      className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                    >
                      Setujui
                    </button>
                    <button 
                      onClick={() => handleReject(alumni.id)}
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

      {/* Bulk Actions */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Aksi Massal</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Kirim Email ke Angkatan</label>
            <select className="w-full p-2 border rounded">
              <option>Pilih Angkatan</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Template Email</label>
            <select className="w-full p-2 border rounded">
              <option>Newsletter Bulanan</option>
              <option>Undangan Event</option>
              <option>Update Lowongan</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="btn-primary w-full">Kirim Email</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniManager;
