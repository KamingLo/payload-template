# Product Requirements Document (PRD)

## Project Name: Apple-Style Flat Page Builder (Payload CMS Template)
**Status**: Draft
**Author**: Antigravity Code Assistant & Kaming (Pair Programming)
**Date**: July 2026

---

## 1. Executive Summary & Purpose

Proyek ini adalah **template kerangka halaman (Page Builder Template)** dinamis multi-fungsi yang menggabungkan estetika desain minimalis-flat ala **Apple.com** dengan manajemen konten modular **Payload CMS** dan **Next.js**. 

Tujuan utama dari proyek ini adalah menyediakan fondasi template web generik yang kokoh, di mana seluruh konten, tata letak blok, menu navigasi, dan footer dapat sepenuhnya dikustomisasi secara visual melalui Payload CMS Admin Panel tanpa mengubah kode. Contoh implementasi teks bawaan (default values) dikonfigurasi menggunakan placeholder generik agar mudah dimodifikasi menjadi situs portofolio, landing page produk, profil perusahaan, atau e-commerce katalog.

---

## 2. Target Audience & Personas

1. **Web Creators & Developers**
   - **Profil**: Pengembang Next.js atau agensi web yang memerlukan starter kit dengan Payload CMS yang sudah terstruktur rapi.
   - **Kebutuhan**: Komponen UI & Layout yang terpisah rapi (`ui`, `layout`, `blocks`) serta dokumentasi kode yang bersih.

2. **Content Editors & Admin (End User)**
   - **Profil**: Manajer konten atau pemilik bisnis yang ingin memperbarui teks, gambar, dan tata letak secara dinamis.
   - **Kebutuhan**: Antarmuka admin CMS yang intuitif dengan struktur penamaan kolom (labels) yang jelas dan opsi pengisian data bawaan (defaults) yang mendidik.

---

## 3. Key Core Features & Capabilities

### A. Manajemen Halaman Dinamis (CMS-powered Pages)
- Penyusunan layout halaman berbasis **Blocks** (Bento Grid, Product Showcase, FAQ, Hero Gallery) melalui admin panel Payload CMS.
- Fleksibilitas mengubah susunan blok tanpa memodifikasi kode frontend.

### B. Katalog Produk / Layanan Flat & Minimalis
- Menampilkan produk/layanan dengan minimal card, tanpa border, mengandalkan kekuatan foto produk berkualitas tinggi dan tipografi bersih.

### C. Narasi & Fitur Spesifikasi (Features Grid & Bento)
- Visualisasi keunggulan spesifikasi teknis produk lewat grid bento minimalis.
- Bagian cerita proses (editorial-style rich text) untuk meningkatkan nilai keaslian merek.

### D. Interaktivitas FAQ & Kontak
- Accordion pertanyaan yang sering diajukan mengenai detail produk/layanan.
- Tautan tindakan (CTA) eksternal atau tombol kontak langsung yang bersih.

---

## 4. Technical Constraints & Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19.
- **CMS & Backend**: Payload 3.0 (dengan database SQLite lokal untuk kepraktisan).
- **Styling**: Vanilla CSS (tidak menggunakan Tailwind CSS) untuk kontrol estetika penuh secara granular.
- **Hosting/Media**: Media diunggah langsung melalui koleksi Media Payload CMS.
- **Bahasa**: Multi-bahasa (Indonesia sebagai bahasa utama, siap untuk lokalisasi bahasa Inggris).

---

## 5. Future Roadmap & Goals

### Phase 1: MVP Landing & Catalog (Current Goal)
- Integrasi Payload CMS untuk mengelola halaman, navbar, dan footer secara dinamis.
- Desain antarmuka flat, borderless, dan tipografi berkelas ala Apple.com.
- Katalog produk statis dengan tautan WhatsApp checkout.

### Phase 2: Dynamic Pricing & Forms (Q3 2026)
- Penambahan modul kalkulator harga interaktif dan formulir dinamis yang dapat dikonfigurasi lewat CMS.
- Dukungan filter produk yang lebih kompleks.

### Phase 3: Headless E-commerce & Subscriptions (Q4 2026)
- Integrasi modul keranjang belanja (cart) sisi klien (client-side).
- Hubungan pembayaran pihak ketiga (Midtrans/Stripe/PayPal) untuk kemudahan transaksi digital langsung dari template.
