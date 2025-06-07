import React, { useState } from 'react';

const MediaManager = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [events] = useState([
    {
      id: 1,
      title: 'Phi Talks: AI in Physics Research',
      date: '2024-01-15',
      type: 'Video',
      duration: '45:30',
      views: 1250,
      status: 'published'
    },
    {
      id: 2,
      title: 'SINERGI Career Fair 2024',
      date: '2024-01-10',
      type: 'Gallery',
      photos: 25,
      views: 890,
      status: 'draft'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-text-dark">Media & Event Manager</h2>
        <div className="space-x-2">
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'events' ? 'bg-text-dark text-white' : 'bg-secondary'}`}
            onClick={() => setActiveTab('events')}
          >
            Events
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'media' ? 'bg-text-dark text-white' : 'bg-secondary'}`}
            onClick={() => setActiveTab('media')}
          >
            Media
          </button>
        </div>
      </div>

      {activeTab === 'events' && (
        <>
          {/* Event Management */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Kelola Event</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="space-x-2">
                  <button className="btn-primary">Tambah Event Baru</button>
                  <button className="btn-secondary">Kalendar Event</button>
                </div>
                <select className="p-2 border rounded">
                  <option>Semua Event</option>
                  <option>Phi Talks</option>
                  <option>SINERGI</option>
                  <option>Company Visit</option>
                </select>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Judul</th>
                      <th className="text-left py-2">Tanggal</th>
                      <th className="text-left py-2">Tipe</th>
                      <th className="text-left py-2">Durasi/Foto</th>
                      <th className="text-left py-2">Views</th>
                      <th className="text-left py-2">Status</th>
                      <th className="text-left py-2">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.map((event) => (
                      <tr key={event.id} className="border-b">
                        <td className="py-3">{event.title}</td>
                        <td className="py-3">{event.date}</td>
                        <td className="py-3">{event.type}</td>
                        <td className="py-3">{event.duration || `${event.photos} foto`}</td>
                        <td className="py-3">{event.views}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded text-sm ${
                            event.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {event.status}
                          </span>
                        </td>
                        <td className="py-3 space-x-2">
                          <button className="text-blue-600 hover:text-blue-700">Edit</button>
                          <button className="text-red-600 hover:text-red-700">Hapus</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Event Analytics */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Statistik Event</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 bg-secondary rounded">
                <p className="text-sm text-text-primary">Total Event</p>
                <p className="text-2xl font-bold text-text-dark">24</p>
              </div>
              <div className="p-4 bg-secondary rounded">
                <p className="text-sm text-text-primary">Total Peserta</p>
                <p className="text-2xl font-bold text-text-dark">1,250</p>
              </div>
              <div className="p-4 bg-secondary rounded">
                <p className="text-sm text-text-primary">Event Bulan Ini</p>
                <p className="text-2xl font-bold text-text-dark">4</p>
              </div>
              <div className="p-4 bg-secondary rounded">
                <p className="text-sm text-text-primary">Tingkat Kepuasan</p>
                <p className="text-2xl font-bold text-text-dark">4.8/5</p>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === 'media' && (
        <>
          {/* Media Upload */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Upload Media</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-2 border-dashed border-gray-300 rounded p-8 text-center">
                <p className="text-text-primary mb-2">Drag & drop video atau klik untuk upload</p>
                <button className="btn-secondary">Pilih File</button>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded p-8 text-center">
                <p className="text-text-primary mb-2">Drag & drop foto atau klik untuk upload</p>
                <button className="btn-secondary">Pilih File</button>
              </div>
            </div>
          </div>

          {/* Media Gallery */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Galeri Media</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="relative group">
                  <div className="aspect-video bg-secondary rounded"></div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                    <button className="text-white hover:text-blue-200">Edit</button>
                    <button className="text-white hover:text-red-200">Hapus</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MediaManager;
