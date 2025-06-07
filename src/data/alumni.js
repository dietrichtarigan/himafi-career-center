export const alumniData = [
  {
    id: 1,
    name: "Dr. Sarah Wijaya",
    year: "2018",
    position: "Senior Data Scientist",
    company: "Google",
    location: "Singapore",
    field: "Technology",
    email: "sarah.w@example.com",
    linkedin: "linkedin.com/in/sarahwijaya",
    bio: "Passionate about applying machine learning to solve real-world problems. Currently leading AI research initiatives at Google.",
    skills: ["Machine Learning", "Python", "TensorFlow", "Data Analysis"],
    achievements: ["Published 15+ research papers", "Speaker at AI conferences", "Mentor for 20+ junior data scientists"]
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
    linkedin: "linkedin.com/in/ahmadrizki",
    bio: "Working on autonomous vehicle technology and battery optimization systems at Tesla.",
    skills: ["Autonomous Systems", "C++", "Computer Vision", "Robotics"],
    achievements: ["Patent holder for battery optimization", "Led team of 10 engineers", "Contributed to Model S improvements"]
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
    linkedin: "linkedin.com/in/mayasari",
    bio: "Leading product development for Indonesia's largest e-commerce platform, focusing on user experience and growth.",
    skills: ["Product Strategy", "User Research", "Data Analytics", "Agile Management"],
    achievements: ["Increased user engagement by 40%", "Launched 5 successful products", "Managed $2M product budget"]
  },
  {
    id: 4,
    name: "Dr. Budi Santoso",
    year: "2017",
    position: "Physics Researcher",
    company: "CERN",
    location: "Geneva, Switzerland",
    field: "Research",
    email: "budi.s@example.com",
    linkedin: "linkedin.com/in/budisantoso",
    bio: "Conducting cutting-edge research in particle physics at CERN, contributing to major discoveries in the field.",
    skills: ["Particle Physics", "Data Analysis", "Python", "Statistical Modeling"],
    achievements: ["Co-author of 50+ scientific papers", "Contributed to Higgs boson research", "Received Young Scientist Award"]
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
    linkedin: "linkedin.com/in/rinakusuma",
    bio: "Developing cloud infrastructure solutions at Microsoft Azure, specializing in scalable distributed systems.",
    skills: ["Cloud Computing", "C#", "Azure", "Distributed Systems"],
    achievements: ["Optimized system performance by 60%", "Led migration of legacy systems", "Mentored 5 junior developers"]
  },
  {
    id: 6,
    name: "Dedi Kurniawan",
    year: "2016",
    position: "Quantitative Analyst",
    company: "Goldman Sachs",
    location: "New York, USA",
    field: "Finance",
    email: "dedi.k@example.com",
    linkedin: "linkedin.com/in/dedikurniawan",
    bio: "Applying physics and mathematics to financial modeling and risk management at one of the world's leading investment banks.",
    skills: ["Financial Modeling", "Risk Analysis", "Python", "Statistics"],
    achievements: ["Developed risk models saving $10M annually", "Published in Journal of Finance", "Promoted to VP in 3 years"]
  },
  {
    id: 7,
    name: "Siti Nurhaliza",
    year: "2019",
    position: "Physics Teacher",
    company: "International School Jakarta",
    location: "Jakarta, Indonesia",
    field: "Education",
    email: "siti.n@example.com",
    linkedin: "linkedin.com/in/sitinurhaliza",
    bio: "Inspiring the next generation of physicists through innovative teaching methods and hands-on experiments.",
    skills: ["Physics Education", "Curriculum Development", "Student Mentoring", "Laboratory Management"],
    achievements: ["Students won 10+ science competitions", "Developed new physics curriculum", "Teacher of the Year 2023"]
  },
  {
    id: 8,
    name: "Fajar Ramadhan",
    year: "2020",
    position: "Startup Founder",
    company: "TechInnovate",
    location: "Bandung, Indonesia",
    field: "Entrepreneurship",
    email: "fajar.r@example.com",
    linkedin: "linkedin.com/in/fajarramadhan",
    bio: "Founded a tech startup focusing on IoT solutions for smart cities, combining physics knowledge with entrepreneurship.",
    skills: ["IoT Development", "Business Strategy", "Team Leadership", "Product Development"],
    achievements: ["Raised $500K in seed funding", "Deployed solutions in 5 cities", "Team of 15 employees"]
  }
]

export const alumniStats = {
  totalAlumni: alumniData.length,
  byField: alumniData.reduce((acc, alumni) => {
    acc[alumni.field] = (acc[alumni.field] || 0) + 1
    return acc
  }, {}),
  byLocation: alumniData.reduce((acc, alumni) => {
    const country = alumni.location.split(',').pop().trim()
    acc[country] = (acc[country] || 0) + 1
    return acc
  }, {}),
  byYear: alumniData.reduce((acc, alumni) => {
    acc[alumni.year] = (acc[alumni.year] || 0) + 1
    return acc
  }, {}),
  byCompany: alumniData.reduce((acc, alumni) => {
    acc[alumni.company] = (acc[alumni.company] || 0) + 1
    return acc
  }, {})
}
