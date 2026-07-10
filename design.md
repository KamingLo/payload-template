# Design System & Guidelines (Apple.com Inspired)

Sistem desain untuk proyek **Apple-Style Flat Page Builder** mengadopsi estetika **Apple.com**: bersih, berani (bold), datar (flat), tanpa border, tanpa bayangan yang mengambang, serta mengandalkan kekuatan ruang kosong (whitespace), tipografi, dan media berkualitas tinggi.

---

## 1. Filosofi Desain

1. **Flat & Borderless**: Hilangkan semua border-radius besar (di atas 4px) pada kartu konten dan hilangkan outline border solid yang kontras. Gunakan perbedaan warna latar belakang solid atau garis pemisah super tipis untuk pembatas konten.
2. **Typography-Driven**: Fokus pada kontras ukuran font, ketebalan (font-weight), dan kerenggangan antarbaris untuk menciptakan hierarki visual yang jelas.
3. **High-Contrast Imagery**: Latar belakang bernuansa monokrom (hitam, arang, abu-abu, putih) dikombinasikan dengan foto yang sangat tajam dan minimalis untuk menciptakan kesan premium yang "wow".
4. **Intensionalitas**: Setiap elemen harus memiliki tujuan yang jelas. Tidak ada dekorasi berlebihan seperti border neon gradasi atau bayangan mengambang (shadow).

---

## 2. Palet Warna (Monochrome Premium)

| Nama Warna | Kode HEX | Peruntukan / Penggunaan |
|---|---|---|
| **Black (Deep Charcoal)** | `#000000` | Latar belakang halaman utama, navbar, dan footer. |
| **Dark Gray (Coal)** | `#161617` | Latar belakang kartu bento, section sekunder, dan input panel. |
| **Medium Gray** | `#1d1d1f` | Alternatif latar belakang section untuk kontras minimalis. |
| **Light Accent** | `#f5f5f7` | Warna teks utama, judul besar, dan tombol utama. |
| **Muted Text** | `#86868b` | Subtitle, deskripsi panjang, tautan sekunder, hak cipta. |
| **System Link Blue** | `#0066cc` | Tautan interaktif, tombol teks (CTA teks dengan panah). |
| **Pure White** | `#ffffff` | Judul tebal, penanda penting, tombol utama berlatar putih. |

---

## 3. Tipografi

Sistem font harus memprioritaskan font bawaan sistem Apple atau alternatif minimalis yang serupa:

- **Font Family**:
  - `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` (Default Apple SF Pro style stack).
- **Heading 1 (Hero Title)**:
  - Ukuran: `48px` - `64px` (Desktop) / `32px` - `40px` (Mobile)
  - Ketebalan: `700` (Bold) atau `800` (Extra Bold)
  - Letter Spacing: `-1px` atau `-1.5px` (Rapat)
- **Heading 2 (Section Title)**:
  - Ukuran: `32px` - `40px` (Desktop) / `24px` (Mobile)
  - Ketebalan: `600` (Semi Bold)
  - Letter Spacing: `-0.5px`
- **Body Text**:
  - Ukuran: `17px` (Desktop) / `15px` (Mobile)
  - Ketebalan: `400` (Regular)
  - Line Height: `1.5` atau `1.6` (Lebar dan mudah dibaca)

---

## 4. Spesifikasi Komponen & Aturan CSS

1. **Card & Bento Box**:
   - `border-radius: 0px` (Mutlak flat/persegi siku-siku).
   - `border: none` (Tanpa border garis).
   - `box-shadow: none` (Tanpa bayangan).
   - `background-color: #161617`.
   
2. **Buttons (Tombol Akses)**:
   - **Tombol Utama**: Latar belakang `#f5f5f7` (abu terang) dengan teks hitam `#000`, bentuk pill dengan rounded minimal `4px` atau `0px`.
   - **Tautan Teks (Apple Style CTA)**: Teks berwarna `#0066cc` (Link Blue) dengan tanda panah `→` atau chevron `›` di sebelah kanan, transisi hover sedikit bergeser ke kanan.

3. **Garis Pembatas (Dividers)**:
   - Gunakan garis horisontal super tipis `1px` dengan warna `#333` atau `rgba(255, 255, 255, 0.08)`.

4. **Transisi & Animasi**:
   - Efek transisi halus pada link hover: `color 0.2s ease` atau `opacity 0.2s ease`.
   - Tidak ada animasi berputar atau memantul yang berlebihan.
