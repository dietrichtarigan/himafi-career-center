const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-primary-bg to-secondary min-h-[80vh] flex items-center">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-in">
            <h1 className="text-4xl md:text-6xl font-bold text-text-dark">
              Jembatan Karier dan Alumni HIMAFI ITB
            </h1>
            <p className="text-lg text-text-primary">
              Menghubungkan alumni dan mahasiswa dalam bidang karier, mentoring, 
              dan pengembangan jejaring alumni untuk masa depan yang lebih baik.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                Jelajahi Peluang
              </button>
              <button className="btn-secondary">
                Bergabung Sekarang
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-text-dark">500+</h3>
                <p className="text-text-primary">Alumni Aktif</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-text-dark">50+</h3>
                <p className="text-text-primary">Peluang Karier</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-text-dark">100+</h3>
                <p className="text-text-primary">Event Sukses</p>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-bg to-transparent z-10"></div>
            <div className="w-full h-[500px] bg-secondary rounded-lg overflow-hidden relative animate-float">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 bg-gradient-to-br from-text-dark/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-text-dark/80 to-transparent text-white">
                <p className="text-lg font-semibold">Phi Talks 2024</p>
                <p className="text-sm">Menginspirasi Generasi Mendatang</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
