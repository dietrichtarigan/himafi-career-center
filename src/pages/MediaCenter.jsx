import { useState, useEffect } from 'react'

const MediaCenter = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Mock media data
  const mediaData = [
    {
      id: 1,
      title: "Phi Talks: AI in Physics Research",
      type: "video",
      category: "phi-talks",
      date: "2024-01-15",
      thumbnail: "/api/placeholder/400/250",
      duration: "45:30",
      views: 1250,
      description: "Diskusi mendalam tentang penerapan AI dalam penelitian fisika modern"
    },
    {
      id: 2,
      title: "SINERGI Career Fair 2024 Highlights",
      type: "video",
      category: "sinergi",
      date: "2024-01-10",
      thumbnail: "/api/placeholder/400/250",
      duration: "12:45",
      views: 890,
      description: "Sorotan acara career fair terbesar HIMAFI 2024"
    },
    {
      id: 3,
      title: "Company Visit: Gojek HQ",
      type: "gallery",
      category: "company-visit",
      date: "2024-01-05",
      thumbnail: "/api/placeholder/400/250",
      imageCount: 25,
      views: 650,
      description: "Dokumentasi kunjungan eksklusif ke kantor pusat Gojek"
    },
    {
      id: 4,
      title: "Cerita Kita: Alumni Success Story",
      type: "podcast",
      category: "cerita-kita",
      date: "2024-01-01",
      thumbnail: "/api/placeholder/400/250",
      duration: "32:15",
      views: 420,
      description: "Podcast inspiratif dengan alumni sukses di berbagai bidang"
    },
    {
      id: 5,
      title: "Physics Research Symposium 2024",
      type: "video",
      category: "events",
      date: "2023-12-20",
      thumbnail: "/api/placeholder/400/250",
      duration: "1:25:30",
      views: 1100,
      description: "Simposium penelitian fisika dengan pembicara internasional"
    },
    {
      id: 6,
      title: "Alumni Networking Night",
      type: "gallery",
      category: "events",
      date: "2023-12-15",
      thumbnail: "/api/placeholder/400/250",
      imageCount: 40,
      views: 780,
      description: "Malam networking alumni dengan berbagai generasi"
    }
  ]

  // Filter media based on category
  const filteredMedia = selectedCategory === 'all' 
    ? mediaData 
    : mediaData.filter(item => item.category === selectedCategory)

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredMedia.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [filteredMedia.length])

  const categories = [
    { id: 'all', name: 'Semua', icon: '🎬' },
    { id: 'phi-talks', name: 'Phi Talks', icon: '🎤' },
    { id: 'sinergi', name: 'SINERGI', icon: '🤝' },
    { id: 'company-visit', name: 'Company Visit', icon: '🏢' },
    { id: 'cerita-kita', name: 'Cerita Kita', icon: '📖' },
    { id: 'events', name: 'Events', icon: '🎉' }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Phi Talks: Quantum Computing",
      date: "2024-02-20",
      time: "19:00 WIB",
      speaker: "Dr. Quantum Expert",
      type: "Online",
      rsvp: 45
    },
    {
      id: 2,
      title: "Company Visit: Microsoft Indonesia",
      date: "2024-02-25",
      time: "09:00 WIB",
      speaker: "Microsoft Team",
      type: "Offline",
      rsvp: 25
    },
    {
      id: 3,
      title: "SINERGI: Tech Career Workshop",
      date: "2024-03-01",
      time: "14:00 WIB",
      speaker: "Industry Experts",
      type: "Hybrid",
      rsvp: 60
    }
  ]

  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="container-max section-padding py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Media Center Interaktif
            </h1>
            <p className="text-lg text-text-primary max-w-2xl mx-auto">
              Galeri foto, video, podcast, dan dokumentasi kegiatan ARCADE HIMAFI
            </p>
          </div>
        </div>
      </section>

      {/* Auto-scroll Carousel */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-text-dark mb-6">Featured Media</h2>
          <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {filteredMedia.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Media Thumbnail */}
                    <div className="relative h-64 md:h-80 bg-secondary">
                      <div className="absolute inset-0 bg-gradient-to-br from-text-dark/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-text-dark px-3 py-1 rounded-full text-sm font-medium">
                          {item.type === 'video' && `📹 ${item.duration}`}
                          {item.type === 'gallery' && `📷 ${item.imageCount} photos`}
                          {item.type === 'podcast' && `🎧 ${item.duration}`}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 rounded-lg p-3">
                          <p className="text-sm text-text-primary">{item.views} views • {item.date}</p>
                        </div>
                      </div>
                    </div>

                    {/* Media Info */}
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-text-dark mb-4">{item.title}</h3>
                      <p className="text-text-primary mb-6">{item.description}</p>
                      <div className="flex gap-4">
                        <button className="btn-primary">
                          {item.type === 'video' && 'Tonton Sekarang'}
                          {item.type === 'gallery' && 'Lihat Galeri'}
                          {item.type === 'podcast' && 'Dengarkan'}
                        </button>
                        <button className="btn-secondary">
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {filteredMedia.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-text-dark' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + filteredMedia.length) % filteredMedia.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-text-dark p-2 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % filteredMedia.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-text-dark p-2 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding pt-0">
        <div className="container-max">
          <div className="card">
            <h3 className="text-xl font-semibold text-text-dark mb-4">Kategori Media</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-text-dark text-white'
                      : 'bg-secondary text-text-dark hover:bg-opacity-80'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="section-padding pt-0">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item) => (
              <div key={item.id} className="card group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 bg-secondary rounded-lg mb-4 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-text-dark/20 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 text-text-dark px-2 py-1 rounded text-xs font-medium">
                      {item.type === 'video' && '📹 Video'}
                      {item.type === 'gallery' && '📷 Gallery'}
                      {item.type === 'podcast' && '🎧 Podcast'}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-text-dark/80 text-white px-2 py-1 rounded text-xs">
                      {item.type === 'video' && item.duration}
                      {item.type === 'gallery' && `${item.imageCount} photos`}
                      {item.type === 'podcast' && item.duration}
                    </span>
                  </div>
                </div>
                <h4 className="font-semibold text-text-dark mb-2 group-hover:text-text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-text-primary mb-3">{item.description}</p>
                <div className="flex items-center justify-between text-xs text-text-primary">
                  <span>{item.views} views</span>
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Calendar */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-text-dark mb-6">Kalendarium Acara Mendatang</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="card bg-secondary">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-text-dark mb-1">{event.title}</h4>
                    <p className="text-sm text-text-primary">{event.speaker}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    event.type === 'Online' ? 'bg-green-100 text-green-800' :
                    event.type === 'Offline' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {event.type}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-text-primary flex items-center gap-2">
                    📅 {new Date(event.date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                  <p className="text-sm text-text-primary flex items-center gap-2">
                    🕐 {event.time}
                  </p>
                  <p className="text-sm text-text-primary flex items-center gap-2">
                    👥 {event.rsvp} RSVP
                  </p>
                </div>
                <button className="w-full btn-primary text-sm">
                  RSVP Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default MediaCenter
