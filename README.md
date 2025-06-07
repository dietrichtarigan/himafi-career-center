# ARCADE HIMAFI ITB Website

Website resmi untuk Divisi Alumni and Career Development (ARCADE) HIMAFI ITB - Jembatan Karier dan Alumni HIMAFI ITB.

## 🎯 Fitur Utama

### 1. Homepage
- Hero section dengan tagline dan statistik real-time
- Featured alumni bulan ini
- Kegiatan terbaru (Phi Talks, SINERGI, Company Visit)
- Newsletter subscription
- Instagram feed preview

### 2. Portal Alumni (ALIVE System)
- Database alumni dengan pencarian dan filter
- Statistik alumni real-time
- Distribusi berdasarkan bidang karier dan lokasi
- Form pendaftaran alumni baru
- Profil alumni dengan kontak dan LinkedIn

### 3. INFOPROF Board (Career Board)
- Daftar lowongan kerja, magang, dan beasiswa
- Filter berdasarkan tipe, kategori, dan lokasi
- Form submit lowongan baru
- Detail lengkap setiap lowongan
- Statistik peluang karier

### 4. Media Center Interaktif
- Auto-scroll carousel untuk featured media
- Galeri foto, video, dan podcast
- Filter berdasarkan kategori (Phi Talks, SINERGI, dll)
- Kalendarium acara mendatang dengan RSVP
- Dokumentasi kegiatan ARCADE

## 🎨 Desain

### Color Palette
- `#F2F2F2` - Background utama
- `#EAE4D5` - Aksen sekunder
- `#B6B09F` - Teks utama dan konten
- `#000000` - Judul, navigasi, garis pemisah

### Typography
- Font: Inter (Google Fonts)
- Responsive design untuk mobile, tablet, dan desktop

## 🛠️ Teknologi

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: SVG icons
- **Animations**: CSS animations dan transitions

## 🚀 Instalasi dan Menjalankan

### Prerequisites
- Node.js (v16 atau lebih baru)
- npm atau yarn

### Langkah Instalasi

1. Clone repository
```bash
git clone <repository-url>
cd himafi-career-center
```

2. Install dependencies
```bash
npm install
```

3. Jalankan development server
```bash
npm run dev
```

4. Buka browser dan akses `http://localhost:3000`

### Build untuk Production
```bash
npm run build
```

### Preview build
```bash
npm run preview
```

## 📁 Struktur Project

```
himafi-career-center/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── layout/        # Layout components (Header, Footer)
│   │   └── home/          # Homepage components
│   ├── pages/             # Page components
│   ├── data/              # Mock data files
│   ├── styles/            # CSS files
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── index.html             # HTML template
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
└── vite.config.js         # Vite configuration
```

## 🎯 Fitur Interaktif

### Auto-scroll Carousel
- Carousel di Media Center bergerak otomatis setiap 5 detik
- Navigation arrows dan dots untuk kontrol manual
- Responsive untuk semua ukuran layar

### Real-time Statistics
- Dashboard alumni dengan statistik live
- Distribusi berdasarkan bidang karier
- Sebaran geografis alumni
- Statistik peluang karier

### Search & Filter
- Pencarian alumni berdasarkan nama, perusahaan, posisi
- Filter berdasarkan angkatan dan perusahaan
- Pencarian lowongan berdasarkan berbagai kriteria
- Filter media berdasarkan kategori

### Responsive Design
- Mobile-first approach
- Breakpoints untuk tablet dan desktop
- Touch-friendly navigation
- Optimized untuk semua device

## 🔧 Kustomisasi

### Menambah Data Alumni
Edit file `src/data/alumni.js` untuk menambah atau mengubah data alumni.

### Menambah Lowongan
Edit file `src/data/jobs.js` untuk menambah atau mengubah data lowongan.

### Mengubah Warna
Edit file `tailwind.config.js` untuk mengubah color palette.

### Menambah Halaman
1. Buat component baru di `src/pages/`
2. Tambahkan route di `src/App.jsx`
3. Update navigation di `src/components/layout/Header.jsx`

## 📱 Fitur Mobile

- Responsive navigation dengan hamburger menu
- Touch gestures untuk carousel
- Optimized layout untuk layar kecil
- Fast loading dan smooth animations

## 🚀 Deployment

Website ini siap untuk di-deploy ke:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

### Deploy ke Vercel
```bash
npm install -g vercel
vercel
```

### Deploy ke Netlify
```bash
npm run build
# Upload folder dist/ ke Netlify
```

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📞 Kontak

ARCADE HIMAFI ITB
- Email: arcade@himafi.itb.ac.id
- Instagram: @CareerHIMAFI
- Website: [himafi-career-center.vercel.app](https://himafi-career-center.vercel.app)

## 📄 License

Copyright © 2024 ARCADE HIMAFI ITB. All rights reserved.
