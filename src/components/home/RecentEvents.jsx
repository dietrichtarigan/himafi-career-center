const RecentEvents = () => {
  const recentEvents = [
    {
      id: 1,
      title: "Phi Talks: AI in Physics Research",
      date: "15 Desember 2024",
      type: "Webinar",
      speaker: "Dr. Budi Santoso",
      description: "Diskusi mendalam tentang penerapan AI dalam penelitian fisika modern",
      image: "/api/placeholder/400/250",
      status: "upcoming"
    },
    {
      id: 2,
      title: "SINERGI: Career Fair 2024",
      date: "20 November 2024",
      type: "Career Fair",
      speaker: "Multiple Companies",
      description: "Pameran karier terbesar dengan 50+ perusahaan teknologi terkemuka",
      image: "/api/placeholder/400/250",
      status: "completed"
    },
    {
      id: 3,
      title: "Company Visit: Gojek HQ",
      date: "5 November 2024",
      type: "Company Visit",
      speaker: "Gojek Team",
      description: "Kunjungan eksklusif ke kantor pusat Gojek dan networking session",
      image: "/api/placeholder/400/250",
      status: "completed"
    }
  ]

  return (
    <section className="section-padding bg-primary-bg">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Kegiatan Terbaru
          </h2>
          <p className="text-lg text-text-primary max-w-2xl mx-auto">
            Ikuti berbagai kegiatan menarik yang diselenggarakan oleh ARCADE HIMAFI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recentEvents.map((event) => (
            <div key={event.id} className="card group hover:shadow-xl transition-all duration-300">
              {/* Event Image */}
              <div className="w-full h-48 bg-secondary rounded-lg mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-text-dark/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.status === 'upcoming' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {event.status === 'upcoming' ? 'Mendatang' : 'Selesai'}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-white/90 text-text-dark px-2 py-1 rounded text-sm font-medium">
                    {event.type}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-primary">{event.date}</span>
                  <span className="text-sm font-medium text-text-dark">{event.speaker}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-text-dark group-hover:text-text-primary transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-text-primary text-sm">
                  {event.description}
                </p>

                <div className="pt-4">
                  <button className="w-full btn-secondary text-sm">
                    {event.status === 'upcoming' ? 'Daftar Sekarang' : 'Lihat Dokumentasi'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="card text-center bg-gradient-to-br from-text-dark to-gray-800 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Portal Alumni</h3>
            <p className="text-sm mb-4 opacity-90">Akses database alumni dan networking</p>
            <button className="btn-secondary bg-white text-text-dark hover:bg-gray-100">
              Masuk Portal
            </button>
          </div>

          <div className="card text-center bg-gradient-to-br from-secondary to-text-primary text-text-dark">
            <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Peluang Karier</h3>
            <p className="text-sm mb-4">Temukan lowongan dan magang terbaru</p>
            <button className="btn-primary">
              Lihat Peluang
            </button>
          </div>

          <div className="card text-center bg-gradient-to-br from-white to-secondary">
            <div className="w-16 h-16 bg-text-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-text-dark">Media Center</h3>
            <p className="text-sm mb-4 text-text-primary">Galeri foto, video, dan podcast</p>
            <button className="btn-secondary">
              Jelajahi Media
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentEvents
