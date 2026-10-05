# Design System & Visual Specification (`design.md`)
## Personal Developer Portfolio

---

## 1. Visual Direction & Anti-AI Slop Rules

### 1.1 Core Visual Identity
* **Concept:** *Minimalist Tech & Subtle Atmospheric Glow*.
* **Tone:** Professional, intentional, precise, clean, modern.
* **Dominant Color:** Deep Blue Palette.

### 1.2 Anti-AI Slop Manifesto
Untuk memastikan website tidak tampak seperti template AI generik, aturan desain berikut berlaku secara ketat:

| Elemen | ❌ BANNED (AI Slop Pattern) | ✅ REQUIRED (Intentional Design) |
|---|---|---|
| **Background** | Giant rainbow gradients, blob warna acak yang bergerak tak tentu arah. | Monochrome/Dark canvas dengan *single-color subtle aurora* berkecepatan rendah. |
| **Cards** | Glassmorphism tebal dengan border neon menyala di setiap card. | Solid/Semi-opaque background dengan border subtle (1px) ber-kontras rendah. |
| **Typography** | Font futuristik yang sulit dibaca; kata-kata gertak seperti "Crafting Digital Magic". | Font Sans-Serif bersih (Inter/Plus Jakarta Sans) dengan *hierarchy spacing* yang kuat. |
| **Decoration** | Floating 3D shapes, badge berlebihan di setiap paragraf. | Whitespace fungsional; dekorasi hanya berupa aksen garis/grid tipis. |
| **Animation** | Semua elemen membal (*bounce*), berputar, atau *fade-in* simultan saat di-scroll. | Scroll reveal satu arah (*translateY 12px + opacity*), cepat, dan *restrained*. |

---

## 2. Color System

Primary color yang disepakati adalah **BLUE**.

### 2.1 Dark Theme (Default Palette)
* **Canvas / Background (`--bg-primary`):** `#090D16` (Deep slate blue-black)
* **Surface / Card (`--bg-surface`):** `#111827` / `#131C2E` dengan Opacity 80%
* **Border (`--border-color`):** `#1E293B` (Subtle dark slate)
* **Text Primary (`--text-main`):** `#F8FAFC` (Slate 50)
* **Text Secondary (`--text-muted`):** `#94A3B8` (Slate 400)
* **Accent / Primary Blue (`--primary-blue`):** `#3B82F6` (Blue 500)
* **Primary Hover (`--primary-blue-hover`):** `#2563EB` (Blue 600)
* **Glow / Aurora Accent:** `#1D4ED8` (Blue 700) dengan opacity 8%–15%

### 2.2 Light Theme Palette
* **Canvas / Background (`--bg-primary`):** `#F8FAFC` (Clean off-white)
* **Surface / Card (`--bg-surface`):** `#FFFFFF` (Pure white)
* **Border (`--border-color`):** `#E2E8F0` (Slate 200)
* **Text Primary (`--text-main`):** `#0F172A` (Slate 900)
* **Text Secondary (`--text-muted`):** `#64748B` (Slate 500)
* **Accent / Primary Blue (`--primary-blue`):** `#2563EB` (Blue 600)
* **Primary Hover (`--primary-blue-hover`):** `#1D4ED8` (Blue 700)
* **Glow / Aurora Accent:** `#93C5FD` (Blue 300) dengan opacity 12%–20%

---

## 3. Typography Direction

* **Primary Font Family:** `Inter` atau `Plus Jakarta Sans` (Google Fonts).
* **Code / Mono Font:** `JetBrains Mono` atau `Fira Code` (Digunakan secara hemat untuk tech tags, badge, atau code snippet).

### 3.1 Type Scale

| Scale | Size (Desktop) | Weight | Line Height | Usage |
|---|---|---|---|---|
| **Display / Hero Title** | 2.75rem (44px) – 3.5rem (56px) | Bold (700) | 1.15 | Hero Headline |
| **Heading 1 (Section)** | 2.0rem (32px) | SemiBold (600) | 1.25 | Judul Section (About, Skills, Projects) |
| **Heading 2 (Card Title)** | 1.25rem (20px) | Medium (500) | 1.35 | Judul Project / Sub-section |
| **Body Large** | 1.125rem (18px) | Regular (400) | 1.6 | Hero sub-text, Intro About |
| **Body Base** | 1.0rem (16px) | Regular (400) | 1.6 | Deskripsi umum & paragraf |
| **Caption / Small** | 0.875rem (14px) | Medium (500) | 1.5 | Tech badges, Nav links, Footer info |

---

## 4. Layout, Spacing, & Radius

### 4.1 Grid & Container
* **Max Container Width:** `1150px` (Mencegah baris teks terlalu panjang di layar ultrawide).
* **Section Padding Vertikal:** `80px` (Desktop) / `50px` (Mobile).
* **Horizontal Grid Padding:** `24px` (Desktop) / `16px` (Mobile).

### 4.2 Spacing Scale
Menggunakan kelipatan 4px / 8px: `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`.

### 4.3 Border Radius Standard
* **Buttons & Badges:** `8px` (`rounded-md`)
* **Cards & Modals:** `12px` / `16px` (`rounded-xl`)
* **Floating Navbar:** `9999px` (`rounded-full` / pill shape)

---

## 5. Atmosphere: Aurora Background System

Efek aurora dirancang sebagai lapisan pencahayaan sekitarnya (*ambient layer*) yang tenang.

### 5.1 Technical Specs & Implementation
* **Layer Position:** `fixed inset-0 pointer-events-none z-0` (Berada di belakang seluruh konten).
* **Composition:** 2–3 blob lingkaran besar (`width: 40vw; height: 40vw`) dengan CSS filter `blur(100px)`.
* **Dark Theme Setup:**
  * Base opacity: `0.12`
  * Blending mode: `screen` atau `lighten`
  * Color: Variasi `#1D4ED8` dan `#3B82F6`
* **Light Theme Setup:**
  * Base opacity: `0.08`
  * Blending mode: `multiply` atau `normal`
  * Color: Variasi `#93C5FD` dan `#60A5FA`

### 5.2 Aurora Motion
* **Duration:** 20–30 detik per siklus.
* **Keyframes:** Perubahan posisi `translate(x, y)` sejauh 5%–10% dan variasi `scale(1.0)` ke `scale(1.15)`.
* **Reduced Motion:** Saat `prefers-reduced-motion: reduce` aktif, animasi posisi dimatikan; aurora tetap dirender secara statis.

---

## 6. Component Specifications

### 6.1 Navbar (Floating Pill)
* **Shape:** Floating Pill (`rounded-full`), `max-width: 850px`, margin-top `16px`.
* **Default State:** Transparent background, no border.
* **Scrolled State:**
  * Background: `rgba(17, 24, 39, 0.75)` (Dark) / `rgba(255, 255, 255, 0.8)` (Light).
  * Backdrop Blur: `backdrop-blur-md` (12px).
  * Border: `1px solid var(--border-color)`.
* **Nav Links Hover:** Active pill/indicator berlatar belakang halus (`bg-slate-800/50` atau `bg-slate-200/60`) yang berpindah dengan *layoutId* Framer Motion.

### 6.2 Hero Section
* **Grid:** 12-column grid (Kiri: 7 cols untuk Teks + CTA, Kanan: 5 cols untuk Image).
* **Image Container:**
  * Ukuran proporsional dengan *aspect-ratio 1:1* atau *4:5*.
  * Border halus dengan `rounded-2xl`.
  * Tanpa efek aura yang menyilaukan; hanya *subtle inner shadow* atau *subtle border outline*.

### 6.3 Skills Cards
* **Grid Layout:** Auto-fit grid (`minmax(240px, 1fr)`).
* **Visual Card:**
  * Background solid bertekstur bersih.
  * Header kategori menggunakan font mono tebal.
  * Flex-wrap badging untuk item skill.
* **Learning Badge Indicator:** Skill yang sedang dipelajari diberi tag khusus bertuliskan `"Exploring"` dengan gaya *dashed outline border*.

### 6.4 Projects Cards & Detail Modal
* **Project Card:**
  * Aspect ratio thumbnail: `16:9` dengan `object-cover`.
  * Padding konten card: `20px`.
  * Kumpulan tag teknologi di bagian bawah card.
  * Secondary button: `"Detail"` (Membuka modal) & Icon Link GitHub.
* **Detail Modal:**
  * Overlay background: `backdrop-blur-sm bg-black/60`.
  * Modal container: Centered, `max-width: 680px`, `max-height: 85vh` dengan scrollable inner body.
  * Header modal: Judul Project, Close Icon (`X`), dan Action Buttons (Live Demo & GitHub).
  * Section dalam modal terbagi jelas dengan heading tipis: *Problem*, *Solution*, *Key Features*, dan *Tech Stack*.

### 6.5 Floating Back to Top Button
* **Position:** `fixed bottom-6 right-6 z-40`.
* **Visual:** Size 44x44px, `rounded-full`, `1px solid border`, subtle shadow.
* **Animation:** Fade-in (`opacity: 0 -> 1`) dan slide-up (`translateY: 10px -> 0`) saat scroll > 400px.

---

## 7. Animation System & Micro-Interactions

| Jenis Animasi | Durasi | Easing Function | Deskripsi |
|---|---|---|---|
| **UI Interaction (Hover/Active)** | 150ms – 200ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Response cepat pada button hover, card lift (max 4px), dan link underline. |
| **Modal Open / Close** | 200ms – 250ms | `easeOut` | Scale dari `0.95` ke `1.0` bersamaan dengan fade-in opacity. |
| **Scroll Reveal** | 400ms | `cubic-bezier(0.21, 1, 0.35, 1)` | Elemen bergeser naik `12px` sambil fade-in. Di-trigger sekali (*once: true*). |
| **Ambient Aurora** | 25,000ms | `linear` / `easeInOut` | Gerakan melingkar/translasi lembut pada background aurora. |

---

## 8. Responsive Breakpoints Spec
Mobile (375px - 639px)  : Single Column, Hamburger Nav, Full-width Buttons, Hidden Aurora Particles.
Tablet (640px - 1023px) : 2-Column Project Grid, Compact Hero Split.
Desktop (1024px+)       : Full Floating Navbar, 2/3-Column Project Grid, 12-Column Hero.

---

## 9. Actionable Placeholders for User Data

Dokumen ini telah dirancang terpisah dari data spesifik diri Anda. Sebelum melangkah ke proses coding, persiapkan data berikut untuk menggantikan tag `[NEEDS USER INPUT]`:

1. **Hero Content:** Nama Lengkap, Title/Tagline Profesional, Ringkasan Peran 1 Kalimat.
2. **About Content:** Paragraf pengenalan diri, pendekatan pemrograman, dan bidang minat utama.
3. **Skills Data:** Daftar pasti programming languages, framework, database, dan tools yang Anda kuasai.
4. **Projects Data:** Minimal 2–3 data project (Judul, Deskripsi singkat, Thumbnail image, Repo link, Problem, Solution, Key features).
5. **Contact Data:** Alamat Email, URL LinkedIn, URL GitHub, dan Instagram.