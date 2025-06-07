import { useState } from 'react'

const CareerBoard = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterCategory, setFilterCategory] = useState('')
  const [showSubmitForm, setShowSubmitForm] = useState(false)

  // Mock job listings data
  const jobListings = [
    {
      id: 1,
      title: "Data Scientist",
      company: "Google",
      location: "Singapore",
      type: "Full-time",
      category: "Technology",
      deadline: "2024-02-15",
      description: "Join our data science team to work on cutting-edge ML projects",
      requirements: [
        "Ph.D. in Physics, Computer Science, or related field",
        "Experience with Python and ML frameworks",
        "Strong analytical skills"
      ],
      salary: "$8,000 - $12,000",
      status: "active"
    },
    {
      id: 2,
      title: "Research Intern",
      company: "CERN",
      location: "Geneva, Switzerland",
      type: "Internship",
      category: "Research",
      deadline: "2024-03-01",
      description: "Summer internship program in particle physics research",
      requirements: [
        "Currently pursuing Physics degree",
        "Strong academic record",
        "Programming skills"
      ],
      salary: "Competitive stipend",
      status: "active"
    },
    {
      id: 3,
      title: "Product Manager",
      company: "Tokopedia",
      location: "Jakarta, Indonesia",
      type: "Full-time",
      category: "Business",
      deadline: "2024-02-28",
      description: "Lead product development for our e-commerce platform",
      requirements: [
        "Bachelor's degree in any field",
        "3+ years PM experience",
        "Strong communication skills"
      ],
      salary: "IDR 25-35 Million",
      status: "active"
    },
    {
      id: 4,
      title: "Physics Teacher",
      company: "International School",
      location: "Bandung, Indonesia",
      type: "Part-time",
      category: "Education",
      deadline: "2024-02-20",
      description: "Teach physics to high school students",
      requirements: [
        "Physics degree",
        "Teaching experience",
        "Good communication skills"
      ],
      salary: "IDR 8-12 Million",
      status: "active"
    }
  ]

  // Filter jobs based on search and filters
  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === '' || job.type === filterType
    const matchesCategory = filterCategory === '' || job.category === filterCategory

    return matchesSearch && matchesType && matchesCategory
  })

  // Get unique types and categories for filters
  const uniqueTypes = [...new Set(jobListings.map(job => job.type))].sort()
  const uniqueCategories = [...new Set(jobListings.map(job => job.category))].sort()

  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="container-max section-padding py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              INFOPROF Board
            </h1>
            <p className="text-lg text-text-primary max-w-2xl mx-auto">
              Temukan peluang karier terbaik dari alumni dan perusahaan partner
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="card text-center">
              <h3 className="text-3xl font-bold text-text-dark mb-2">
                {jobListings.length}
              </h3>
              <p className="text-text-primary">Lowongan Aktif</p>
            </div>
            <div className="card text-center">
              <h3 className="text-3xl font-bold text-text-dark mb-2">
                {uniqueTypes.length}
              </h3>
              <p className="text-text-primary">Tipe Pekerjaan</p>
            </div>
            <div className="card text-center">
              <h3 className="text-3xl font-bold text-text-dark mb-2">
                {uniqueCategories.length}
              </h3>
              <p className="text-text-primary">Kategori</p>
            </div>
            <div className="card text-center">
              <h3 className="text-3xl font-bold text-text-dark mb-2">
                {new Set(jobListings.map(job => job.company)).size}
              </h3>
              <p className="text-text-primary">Perusahaan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="section-padding pt-0">
        <div className="container-max">
          <div className="card mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text-dark">Daftar Lowongan</h2>
              <button
                onClick={() => setShowSubmitForm(!showSubmitForm)}
                className="btn-primary"
              >
                + Submit Lowongan Baru
              </button>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Cari posisi, perusahaan, atau deskripsi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary focus:border-transparent"
              />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary focus:border-transparent"
              >
                <option value="">Semua Tipe</option>
                {uniqueTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary focus:border-transparent"
              >
                <option value="">Semua Kategori</option>
                {uniqueCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setFilterType('')
                  setFilterCategory('')
                }}
                className="btn-secondary"
              >
                Reset Filter
              </button>
            </div>
          </div>

          {/* Submit Job Form */}
          {showSubmitForm && (
            <div className="card mb-8 bg-secondary">
              <h3 className="text-xl font-semibold text-text-dark mb-4">Submit Lowongan Baru</h3>
              <form className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Judul Posisi"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary"
                />
                <input
                  type="text"
                  placeholder="Nama Perusahaan"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary"
                />
                <input
                  type="text"
                  placeholder="Lokasi"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary"
                />
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary"
                >
                  <option value="">Pilih Tipe Pekerjaan</option>
                  {uniqueTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary"
                >
                  <option value="">Pilih Kategori</option>
                  {uniqueCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <input
                  type="date"
                  placeholder="Deadline"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary"
                />
                <textarea
                  placeholder="Deskripsi Pekerjaan"
                  className="md:col-span-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-primary h-32"
                ></textarea>
                <div className="md:col-span-2 flex gap-4">
                  <button type="submit" className="btn-primary">
                    Submit Lowongan
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSubmitForm(false)}
                    className="btn-secondary"
                  >
                    Batal
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="card hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-text-dark">
                          {job.company[0]}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-text-dark mb-1">{job.title}</h3>
                        <p className="text-text-primary mb-2">{job.company}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-xs bg-secondary text-text-dark px-2 py-1 rounded-full">
                            {job.type}
                          </span>
                          <span className="text-xs bg-secondary text-text-dark px-2 py-1 rounded-full">
                            {job.category}
                          </span>
                          <span className="text-xs bg-secondary text-text-dark px-2 py-1 rounded-full">
                            📍 {job.location}
                          </span>
                          <span className="text-xs bg-secondary text-text-dark px-2 py-1 rounded-full">
                            💰 {job.salary}
                          </span>
                        </div>
                        <p className="text-sm text-text-primary mb-4">{job.description}</p>
                        <div className="space-y-1">
                          {job.requirements.map((req, index) => (
                            <p key={index} className="text-sm text-text-primary flex items-center gap-2">
                              <span className="w-1 h-1 bg-text-primary rounded-full"></span>
                              {req}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-4">
                    <div className="text-right">
                      <p className="text-sm text-text-primary">Deadline:</p>
                      <p className="font-medium text-text-dark">
                        {new Date(job.deadline).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                    <button className="btn-primary">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-text-primary text-lg">
                  Tidak ada lowongan yang ditemukan dengan kriteria pencarian tersebut.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CareerBoard
