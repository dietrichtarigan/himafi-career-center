const FeaturedAlumni = () => {
  const featuredAlumni = [
    {
      id: 1,
      name: "Dr. Sarah Wijaya",
      position: "Senior Data Scientist",
      company: "Google",
      year: "2018",
      quote: "HIMAFI memberikan fondasi yang kuat untuk karier saya di bidang teknologi.",
      image: "/api/placeholder/150/150"
    },
    {
      id: 2,
      name: "Ahmad Rizki",
      position: "Research Engineer",
      company: "Tesla",
      year: "2019",
      quote: "Jejaring alumni HIMAFI sangat membantu dalam pengembangan karier internasional.",
      image: "/api/placeholder/150/150"
    },
    {
      id: 3,
      name: "Maya Sari",
      position: "Product Manager",
      company: "Tokopedia",
      year: "2020",
      quote: "Program mentoring ARCADE membantu saya menemukan passion di bidang product management.",
      image: "/api/placeholder/150/150"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Alumni Inspiratif Bulan Ini
          </h2>
          <p className="text-lg text-text-primary max-w-2xl mx-auto">
            Mengenal lebih dekat alumni HIMAFI yang telah berhasil berkarier di berbagai bidang
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredAlumni.map((alumni) => (
            <div key={alumni.id} className="card group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 overflow-hidden">
                  {/* Placeholder for alumni photo */}
                  <div className="w-full h-full bg-gradient-to-br from-text-primary to-text-dark opacity-20"></div>
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-1">{alumni.name}</h3>
                <p className="text-text-primary mb-1">{alumni.position}</p>
                <p className="text-sm font-medium text-text-dark mb-2">{alumni.company}</p>
                <span className="inline-block bg-secondary text-text-dark text-xs px-3 py-1 rounded-full mb-4">
                  Angkatan {alumni.year}
                </span>
                <blockquote className="text-sm text-text-primary italic">
                  "{alumni.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">
            Lihat Semua Alumni
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedAlumni
