# Product Requirement Document (PRD)
## Personal Developer Portfolio

---

## 1. Product Overview

### 1.1 Purpose
Membangun website personal portfolio berbasis *static site* yang profesional, berkinerja tinggi, dan bersih. Website ini berfungsi sebagai instrumen kualifikasi utama yang dilampirkan dalam CV saat melamar pekerjaan sebagai Web Developer.

### 1.2 Core Philosophy
* **Intentionality over Decoration:** Setiap elemen UI/UX memiliki fungsi jelas untuk menyampaikan kualifikasi teknis.
* **Clarity & Frictionless UX:** Memudahkan recruiter menemukan bukti kemampuan (project, code repository, tech stack) dalam kurun waktu kurang dari 30 detik.
* **Anti "AI Slop":** Menghindari estetik template generik (excessive gradients, glassmorphism liar, marketing jargon) dan mengutamakan fondasi UI/UX yang matang.

---

## 2. Goals & Success Metrics

### 2.1 Primary Goals
1. Menyajikan identitas profesional, keahlian teknis, dan portofolio karya secara terstruktur.
2. Menyediakan akses langsung dan tepercaya ke bukti kode sumber (*GitHub*) serta profil profesional (*LinkedIn*).
3. Memberikan jalur komunikasi yang cepat bagi HRD / Hiring Manager (*Contact Section* & *Direct Link*).

### 2.2 Success Criteria
* **Performance:** Lighthouse Performance score ≥ 95/100 pada desktop & mobile.
* **Accessibility:** Lighthouse Accessibility score ≥ 95/100 (kontras warna memenuhi kriteria WCAG AA).
* **Usability:** Recruiter dapat mengakses demo/repo project hanya dalam 2 kali klik dari halaman utama.
* **Responsive:** Tampilan optimal pada breakpoint Desktop (1280px+), Laptop (1024px), Tablet (768px), dan Mobile (375px+).

---

## 3. Target User & Persona

| Attribute | Detail |
|---|---|
| **Primary Audience** | HRD / Recruiter, Technical Hiring Manager, Lead Developer. |
| **Context** | Membuka puluhan hingga ratusan CV per hari; memiliki waktu screening rata-rata 30–60 detik per kandidat. |
| **User Needs** | • Ringkasan skill set yang relevan secara cepat.<br>• Bukti project riil (bukan sekadar daftar nama tools).<br>• Kemudahan navigasi dan aksesibilitas link repositori. |
| **Pain Points** | • Website yang lambat diakses atau terlalu banyak animasi mengganggu.<br>• Klaim skill yang terlalu muluk tanpa bukti karya.<br>• Struktur navigasi yang membingungkan/terlalu eksperimental. |

---

## 4. User Journey
[Membuka Link dari CV]
│
▼
[Hero Section] ──(Pahami Peran & Identitas) ──► [Klik CTA "Hubungi Saya"] ──► [Contact Section]
│
▼
[About Section] ──(Baca Konteks & Cara Kerja)
│
▼
[Skills Section] ──(Validasi Tech Stack & Tools)
│
▼
[Projects Section] ──(Uji Kualifikasi Karya) ──► [Klik "Detail"] ──► [Baca Modal & Klik Repo GitHub]
│
▼
[Contact / Footer] ──(Salin Email / Buka LinkedIn)

---

## 5. Information Architecture (IA)

Website menggunakan arsitektur *Single-Page Application (SPA)* dengan struktur navigasi linier:

1. **Header / Floating Navbar** (Fixed / Sticky floating pill)
2. **Hero Section** (Introduction & Core CTA)
3. **About Section** (Professional Context & Work Approach)
4. **Skills Section** (Categorized Tech Stack)
5. **Projects Section** (Card Grid + Detail Modal)
6. **Contact Section** (Professional Social & Direct Email)
7. **Footer** (Copyright & Brief Links)
8. **Floating Utilities** (Theme Toggle & Back to Top)

---

## 6. Detailed Feature & Section Requirements

### 6.1 Navbar
* **Requirement:** Sticky Floating Pill Navigation.
* **Desktop Layout:** Left (`PORTFOLIO` / Brand text), Center (Nav Links: Home, About, Skills, Projects, Contact), Right (Theme Toggle).
* **Mobile Layout:** Brand text di kiri, Hamburger Menu di kanan. Ketika di-expand, menampilkan overlay/drawer bersih berisi Nav Links dan Theme Toggle.
* **Scroll Behavior:**
  * Saat posisi teratas (*Hero top*): Transparan / tanpa background solid.
  * Saat di-scroll melewati Hero: Mendapat *translucent backdrop blur*, *semi-transparent background*, dan *subtle border*.
* **Interactive Hover:** Marker/indicator halus yang berpindah mulus antar nav link.

### 6.2 Hero Section
* **Desktop Layout:** Split 2 kolom (Kiri: Typography introduction & CTA; Kanan: Clean professional portrait / image container).
* **Content:**
  * Headline utama (Siapa Anda & Peran Web Developer Anda).
  * Sub-headline singkat yang menjelaskan nilai/fokus pekerjaan Anda.
  * CTA Button: `"Hubungi Saya"` (smooth scroll ke `#contact`).
* **Mobile Layout:** Stack vertikal (Foto di atas/tengah, teks intro di bawah).

### 6.3 About Section
* **Purpose:** Memberikan konteks profesional tanpa menjadikannya otobiografi panjang.
* **Recommended Structure:**
  * **Short Intro:** Latar belakang singkat & minat utama di bidang pengembangan web.
  * **Development Focus:** Fokus arsitektur web yang ditekuni (misal: clean code, responsive design, efisiensi database).
  * **How I Work:** Pendekatan pemecahan masalah dan alur kerja teknis.
  * **Current Focus:** Teknologi/metodologi yang sedang dipelajari/didalami.
* **Content Distinction:**
  * `[NEEDS USER INPUT]`: Pengalaman spesifik, riwayat pendidikan/pelatihan, deskripsi latar belakang personal.

### 6.4 Skills Section
* **Structure:** Pengelompokan teknologi secara kategoris untuk *scannability* tinggi.
* **Categories:**
  * *Programming Languages*
  * *Frontend Development*
  * *Backend & Database*
  * *Tools & Workflow*
* **Skill Distinction:**
  * Skill utama (digunakan dalam project produksi/portfolio): Tampilan badge solid/standard.
  * Skill yang sedang dipelajari (*Learning/Exploring*): Badge khusus dengan *subtle indicator* (misal: tag *"Exploring"* atau outline terpisah) untuk menjaga kejujuran kualifikasi.

### 6.5 Projects Section & Detail Modal
* **Grid Layout:** Responsive Grid (1 kolom pada mobile, 2/3 kolom pada desktop).
* **Project Card Content:**
  * Screenshot / Thumbnail visual project.
  * Project Title & Tagline ringkas.
  * Technology Badges (Primary tech used).
  * Action Buttons: Button `"Detail"` dan Direct GitHub Link.
* **Project Detail Behavior (Modal/Dialog):**
  * Dipilih pendekatan **Modal Overlay** (UX paling efisien tanpa merusak konteks scroll utama).
  * **Modal Content:**
    1. Judul Project & Live Demo / Repo Link.
    2. *The Problem / Background:* Masalah apa yang diselesaikan.
    3. *The Solution:* Solusi teknis yang dibangun.
    4. *Key Features:* Poin-poin fitur utama.
    5. *My Role & Tech Stack Detail:* Peran spesifik Anda dan daftar tools/library lengkap.

### 6.6 GitHub Integration Strategy
* **Decision:** Menggunakan pendekatan **Static Curation + Repository Direct Links** dibanding GitHub Live API fetch.
* **Rationale:**
  * Menghindari masalah *API Rate Limit* (unauthenticated GitHub API dibatasi 60 req/jam per IP).
  * Menjamin kecepatan muat (*zero latency network fetch*) dan keandalan website jika GitHub sedang *degraded performance*.
  * Memungkinkan penyajian deskripsi dan thumbnail project yang terkurasi secara rapi dibanding memuaskan data *raw* dari repositori.

### 6.7 Contact Section
* **Layout:** Centered or Two-Column Clean Layout.
* **Channels (Diurutkan berdasarkan hierarki profesional):**
  1. **Primary CTA:** Email direct copy / `mailto:` button.
  2. **Professional Networks:** LinkedIn profile link.
  3. **Code Repositories:** GitHub profile link.
  4. **Secondary/Social:** Instagram (opsional, jika relevan dengan identitas profesional).

### 6.8 Floating Back to Top
* **Behavior:** Fixed di sudut kanan bawah.
* **Visibility:** Hidden saat berada di area Hero. Fade-in saat scroll melewati threshold Hero Section.
* **Action:** Smooth scroll ke posisi teratas (`#home` / `window.scrollTo({top: 0})`).

---

## 7. Non-Functional & Technical Requirements

### 7.1 Tech Stack Justification
* **Hosting:** GitHub Pages (Static Hosting, Gratis, Reliable, CI/CD terintegrasi).
* **Framework:** React + TypeScript + Vite (Memberikan *type safety*, performa build ultra-cepat, dan struktur komponen yang teratur).
* **Styling:** Tailwind CSS (Atomic CSS untuk efisiensi ukuran bundle dan fleksibilitas *design system*).
* **UI Components:** shadcn/ui (Accessible, unstyled primitives yang mudah disesuaikan tanpa menambah bobot *AI slop*).
* **Animation Engine:** Framer Motion (Mendukung *layout animation* dan *micro-interactions* yang sangat halus dengan performa GPU-accelerated).

### 7.2 Theme System Requirements
* Mendukung **Dark Mode** (Default) dan **Light Mode**.
* Menggunakan CSS Variables / Tailwind `dark:` class.
* Preferensi tema disimpan di `localStorage` dan mendeteksi OS system preference (`prefers-color-scheme`).

### 7.3 Accessibility & Performance
* Mendukung `prefers-reduced-motion` untuk menghentikan/menyederhanakan animasi aurora dan scroll reveal.
* Navigasi keyboard penuh (Tab focus state yang jelas pada semua elemen interaktif).