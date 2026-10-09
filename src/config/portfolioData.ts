import type { PortfolioData } from '@/types/portfolio';
import profilePhoto from '@/assets/profile/ari-wahyudi.jpg';
import spkMooraScreenshot from '@/assets/projects/spk-moora.png';
import tokoEskrimScreenshot from '@/assets/projects/toko-eskrim.png';
import awVapestoreScreenshot from '@/assets/projects/aw-vapestore.png';

/**
 * Portfolio Data Configuration
 * Single source of truth for all personal content, projects, and contact channels.
 */
export const portfolioData: PortfolioData = {
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],

  personal: {
    name: 'Ari Wahyudi',
    role: 'Web Developer',
    headline: 'Pengembangan Aplikasi Web Berbasis Database yang Terstruktur & Responsif.',
    subheadline:
      'Mahasiswa Teknik Informatika yang berfokus pada pembuatan aplikasi web fungsional menggunakan PHP, MySQL, dan antarmuka responsif.',
    portraitUrl: profilePhoto,

    // About Section structured blocks
    shortIntro:
      'Saya Ari Wahyudi, mahasiswa Teknik Informatika yang berfokus pada pengembangan web. Memiliki minat mendalam dalam membangun aplikasi web yang fungsional, terstruktur, dan mampu memecahkan permasalahan operasional secara efisien.',
    developmentFocus:
      'Terbiasa mengembangkan aplikasi CRUD, dashboard manajemen, dan sistem berbasis database menggunakan PHP dan MySQL, dengan antarmuka yang bersih serta responsif menggunakan Bootstrap, JavaScript, jQuery, AJAX, dan CSS.',
    howIWork:
      'Alur kerja saya berfokus pada pemahaman kebutuhan sistem secara menyeluruh, merancang relasi struktur data dan fitur, membangun kode secara bertahap, melakukan pengujian fungsional, serta melakukan perbaikan berkelanjutan berdasarkan hasil evaluasi.',
    currentFocus:
      'Saat ini sedang aktif memperluas wawasan dan kemampuan pada teknologi web modern, khususnya React dan TypeScript, melalui eksplorasi dan implementasi proyek praktis.',
  },

  skills: [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'PHP' },
        { name: 'JavaScript' },
        { name: 'HTML' },
        { name: 'CSS' },
      ],
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'Bootstrap' },
        { name: 'jQuery' },
        { name: 'AJAX' },
        { name: 'Responsive Web Design' },
        { name: 'React', isExploring: true },
        { name: 'TypeScript', isExploring: true },
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'PHP' },
        { name: 'MySQL' },
      ],
    },
    {
      title: 'Tools & Workflow',
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'VS Code' },
        { name: 'DataTables' },
        { name: 'JsQR' },
      ],
    },
  ],

  projects: [
    {
      id: 'spk-kredit-moora',
      title: 'SPK Kelayakan Pemberian Kredit Anggota Koperasi Konsumen Serba Usaha menggunakan Metode MOORA',
      shortDescription:
        'Sistem pendukung keputusan berbasis web untuk membantu penilaian kelayakan pemberian kredit anggota koperasi menggunakan metode MOORA.',
      thumbnail: spkMooraScreenshot,
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'CSS'],
      githubUrl: undefined,
      demoUrl: undefined,
      problem:
        'Sistem dibuat untuk membantu proses penilaian kelayakan pemberian kredit anggota koperasi berdasarkan beberapa kriteria penilaian.',
      solution:
        'Menggunakan sistem pendukung keputusan berbasis web dengan metode MOORA untuk melakukan kalkulasi objektif dan menghasilkan perangkingan alternatif secara otomatis.',
      keyFeatures: [
        'Pengelolaan data anggota dan calon penerima kredit',
        'Pengelolaan data kriteria penilaian serta bobot preferensi',
        'Kalkulasi normalisasi matriks dan penilaian akhir metode MOORA',
        'Penyajian hasil perangkingan rekomendasi kelayakan kredit',
      ],
      myRole:
        'Web application development dan implementasi algoritma sistem pendukung keputusan.',
    },
    {
      id: 'toko-eskrim',
      title: 'Toko Eskrim',
      shortDescription:
        'Aplikasi web untuk mendukung pengelolaan katalog produk, varian menu, dan proses pencatatan transaksi toko.',
      thumbnail: tokoEskrimScreenshot,
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'jQuery', 'JsQR', 'CSS'],
      githubUrl: undefined,
      demoUrl: undefined,
      problem:
        'Sistem digunakan untuk membantu pengelolaan data produk dan efisiensi pencatatan proses transaksi penjualan toko.',
      solution:
        'Aplikasi web berbasis PHP dan MySQL dengan antarmuka Bootstrap serta JavaScript/jQuery untuk mendukung manajemen data katalog dan kelancaran transaksi.',
      keyFeatures: [
        'Pengelolaan kategori produk dan varian menu toko',
        'Pencatatan dan pemrosesan data transaksi penjualan',
        'Penyajian riwayat dan informasi detail transaksi',
        'Dashboard admin untuk pemantauan operasional toko',
      ],
      myRole:
        'Web application development dan penyusunan struktur database.',
    },
    {
      id: 'aw-vapestore',
      title: 'AW Vapestore',
      shortDescription:
        'Aplikasi manajemen toko dan inventaris dengan fitur monitoring stok, pemindaian QR code, serta interaksi tabel asinkronus.',
      thumbnail: awVapestoreScreenshot,
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'jQuery', 'AJAX', 'DataTables', 'JsQR', 'CSS'],
      githubUrl: undefined,
      demoUrl: undefined,
      problem:
        'Membantu pengelolaan katalog produk, manajemen varian barang, pemantauan stok, dan pencatatan transaksi pada toko.',
      solution:
        'Aplikasi web dengan PHP dan MySQL yang memanfaatkan AJAX untuk interaksi data tanpa reload, DataTables untuk pengelolaan tabel interaktif, serta JsQR untuk kebutuhan scanning.',
      keyFeatures: [
        'Pengelolaan data kategori dan katalog barang',
        'Pengelolaan varian produk dan kontrol jumlah stok',
        'Pencatatan transaksi penjualan kasir',
        'Dashboard ringkasan informasi dan aktivitas toko',
        'Fitur scanning kode menggunakan library JsQR',
        'Penyajian data dinamis dengan DataTables dan interaksi AJAX',
      ],
      myRole:
        'Web application development dan implementasi fitur sistem secara terintegrasi.',
    },
  ],

  contact: {
    email: 'wahyudiari264@gmail.com',
    githubUrl: 'https://github.com/arii-wahyudi',
    linkedinUrl: 'https://www.linkedin.com/in/ari-wahyudi-b82456246/',
    instagramUrl: 'https://www.instagram.com/ari.wahyudi_a03/',
    socials: [
      {
        platform: 'email',
        label: 'Email',
        url: 'mailto:wahyudiari264@gmail.com',
        isPrimary: true,
      },
      {
        platform: 'github',
        label: 'GitHub',
        url: 'https://github.com/arii-wahyudi',
      },
      {
        platform: 'linkedin',
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ari-wahyudi-b82456246/',
      },
      {
        platform: 'instagram',
        label: 'Instagram',
        url: 'https://www.instagram.com/ari.wahyudi_a03/',
      },
    ],
  },
};
