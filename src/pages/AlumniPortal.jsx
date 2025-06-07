import { useState } from 'react'

const AlumniPortal = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterYear, setFilterYear] = useState('')
  const [filterCompany, setFilterCompany] = useState('')
  const [showForm, setShowForm] = useState(false)

  // Mock alumni data
  const alumniData = [
    {
      id: 1,
      name: "Dr. Sarah Wijaya",
      year: "2018",
      position: "Senior Data Scientist",
      company: "Google",
      location: "Singapore",
      field: "Technology",
      email: "sarah.w@example.com",
      linkedin: "linkedin.com/in/sarahwijaya"
    },
    {
      id: 2,
      name: "Ahmad Rizki",
      year: "2019",
      position: "Research Engineer",
      company: "Tesla",
      location: "California, USA",
      field: "Automotive",
      email: "ahmad.r@example.com",
      linkedin: "linkedin.com/in/ahmadrizki"
    },
    {
      id: 3,
      name: "Maya Sari",
      year: "2020",
      position: "Product Manager",
      company: "Tokopedia",
      location: "Jakarta, Indonesia",
      field: "E-commerce",
      email: "maya.s@example.com",
      linkedin: "linkedin.com/in/mayasari"
    },
    {
      id: 4,
      name: "Budi Santoso",
      year: "2017",
      position: "Physics Researcher",
      company: "CERN",
      location: "Geneva, Switzerland",
      field: "Research",
      email: "budi.s@example.com",
      linkedin: "linkedin.com/in/budisantoso"
    },
    {
      id: 5,
      name: "Rina Kusuma",
      year: "2021",
      position: "Software Engineer",
      company: "Microsoft",
      location: "Seattle, USA",
      field: "Technology",
      email: "rina.k@example.com",
      linkedin: "linkedin.com/in/rinakusuma"
    }
  ]

  // Filter alumni based on search and filters
  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.position.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesYear = filterYear === '' || alumni.year === filterYear
    const matchesCompany = filterCompany === '' || alumni.company === filterCompany

    return matchesSearch && matchesYear && matchesCompany
  })

  // Get unique years and companies for filters
  const uniqueYears = [...new Set(alumniData.map(alumni => alumni.year))].sort()
  const uniqueCompanies = [...new Set(alumniData.map(alumni => alumni.company))].sort()

  // Statistics
  const stats = {
    total: alumniData.length,
    byField: alumniData.reduce((acc, alumni) => {
      acc[alumni.field] = (acc[alumni.field] || 0) + 1
      return acc
    }, {}),
    byLocation: alumniData.reduce((acc, alumni) => {
      const country = alumni.location.split(',').pop().trim()
      acc[country] = (acc[country] || 0) + 1
      return acc
    }, {})
  }

  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="container-max section-padding py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Portal Alumni HIMAFI (ALIVE System)
            </h1>
            <p className="text-lg text-text-primary max-w-2xl mx-auto">
              Temukan dan terhubung dengan alumni HIMAFI di seluruh dunia
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Dashboard */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="card text-center">
              <h3 className="text-3xl font-bold text-text-dark mb-2">{stats.total}</h3>
              <p className="text-text-primary">Total Alumni</p>
            </div>
            <div className="card text-center">
              <h3 className="text-3xl font-bold text-text-dark mb-2">
                {Object.keys(stats.byField).length}
              </h3>
              <p className="text-text-primary">Bidang Karier</p>
            </div>
            <div className="card text-center">
              <h3 className="text-3xl font-bold text-text-dark mb-2">
                {Object.keys(stats.byLocation).length}
              </h3>
              <p className="text-text-primary">Negara</p>
            </div>
            <div className="card text-center">
              <h3 className="text-3xl font-bold text-text-dark mb-2">
                {uniqueCompanies.length}
              </h3>
              <p className="text-text-primary">Perusahaan</p>
            </div>
          </div>

          {/* Field Distribution */}
          <div className="card mb-8">
            <h3 className="text-xl font-semibold text-text-dark mb-4">Distribusi Bidang Karier</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(stats.byField).map(([field, count]) => (
                <div key={field} className="bg-secondary rounded-lg p-4 text-center">
                  <h4 className="font-semibold text-text-dark">{field}</h4>
                  <p className="text-2xl font-bold text-text-primary">{count}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="section-padding pt-0">
        <div className="container-max">
          <div className="card mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text-dark">Directory Alumni</h2>
              <button
                onClick={() => setShowForm(!showForm)}
                className="btn-primary"
              >
                + Daftarkan Data Alumni
              </button>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Cari nama, perusahaan, atau posisi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary focus:border-transparent"
              />
              <select
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary focus:border-transparent"
              >
                <option value="">Semua Angkatan</option>
                {uniqueYears.map(year => (
                  <option key={year} value={year}>Angkatan {year}</option>
                ))}
              </select>
              <select
                value={filterCompany}
                onChange={(e) => setFilterCompany(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary focus:border-transparent"
              >
                <option value="">Semua Perusahaan</option>
                {uniqueCompanies.map(company => (
                  <option key={company} value={company}>{company}</option>
                ))}
              </select>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setFilterYear('')
                  setFilterCompany('')
                }}
                className="btn-secondary"
              >
                Reset Filter
              </button>
            </div>
          </div>

          {/* Alumni Registration Form */}
          {showForm && (
            <div className="card mb-8 bg-secondary">
              <h3 className="text-xl font-semibold text-text-dark mb-4">Daftarkan Data Alumni</h3>
              <form className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary"
                />
                <input
                  type="text"
                  placeholder="Angkatan"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary"
                />
                <input
                  type="text"
                  placeholder="Posisi Saat Ini"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary"
                />
                <input
                  type="text"
                  placeholder="Perusahaan"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary"
                />
                <input
                  type="text"
                  placeholder="Lokasi"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary"
                />
                <div className="md:col-span-2 flex gap-4">
                  <button type="submit" className="btn-primary">
                    Kirim Data
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="btn-secondary"
                  >
                    Batal
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Alumni List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAlumni.map((alumni) => (
              <div key={alumni.id} className="card hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-text-dark">
                      {alumni.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-text-dark mb-1">{alumni.name}</h3>
                    <p className="text-text-primary text-sm mb-1">{alumni.position}</p>
                    <p className="text-text-dark font-medium text-sm mb-2">{alumni.company}</p>
                    <div className="flex items-center space-x-4 text-xs text-text-primary mb-3">
                      <span>📍 {alumni.location}</span>
                      <span>🎓 {alumni.year}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-xs bg-text-dark text-white px-3 py-1 rounded-full hover:bg-gray-800 transition-colors">
                        Kontak
                      </button>
                      <button className="text-xs bg-secondary text-text-dark px-3 py-1 rounded-full hover:bg-opacity-80 transition-colors">
                        LinkedIn
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredAlumni.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-primary text-lg">
                Tidak ada alumni yang ditemukan dengan kriteria pencarian tersebut.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default AlumniPortal
