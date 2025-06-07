import Hero from '../components/home/Hero'
import FeaturedAlumni from '../components/home/FeaturedAlumni'
import RecentEvents from '../components/home/RecentEvents'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Alumni Section */}
      <FeaturedAlumni />

      {/* Recent Events Section */}
      <RecentEvents />

      {/* Newsletter Section */}
      <section className="bg-text-dark text-white py-20">
        <div className="container-max section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tetap Terhubung dengan ARCADE
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Dapatkan informasi terbaru tentang peluang karier, event, dan update dari alumni
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent w-full sm:w-96"
              />
              <button className="btn-secondary whitespace-nowrap">
                Berlangganan
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Kami menghargai privasi Anda. Unsubscribe kapan saja.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Feed Preview */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4">
              Instagram @CareerHIMAFI
            </h2>
            <p className="text-text-primary">
              Ikuti kami di Instagram untuk update terbaru
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="aspect-square bg-secondary rounded-lg overflow-hidden relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-text-dark/20 to-transparent"></div>
                <div className="absolute inset-0 bg-text-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <p className="font-medium">ARCADE Event</p>
                    <p className="text-sm">❤️ 123 likes</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://instagram.com/CareerHIMAFI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-text-primary hover:text-text-dark transition-colors"
            >
              <span>Lihat Lebih Banyak di Instagram</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
