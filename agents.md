# Aturan Pengorganisasian Payload Collections

File ini menyimpan instruksi dan aturan struktur folder untuk Payload CMS Collections dalam proyek ini agar selalu diingat dan dipatuhi oleh AI Coding Assistant.

## Aturan Penempatan Koleksi

1. **Fitur Utama CMS (Main Features)**
   - Jika berupa fitur utama CMS (misal: `blogs`, `products`, `pages`, `users`, `media`), simpan file konfigurasinya di root folder collections.
   - Path: `src/collections/<NamaKoleksi>.ts`

2. **Komponen Kecil (Small Components)**
   - Jika berupa komponen kecil pembentuk layout halaman (misal: `HeroBento`, `CategoryBentoGrid`), simpan file konfigurasinya di folder `components`.
   - Path: `src/collections/components/<NamaKoleksi>.ts`

3. **Komponen Global Kecil (Global Small Components)**
   - Jika berupa komponen kecil yang pasti ada di setiap halaman dan bersifat global (misal: `NavbarLiquid`, `FooterGlobal`), simpan file konfigurasinya di folder `components/global`.
   - Path: `src/collections/components/global/<NamaKoleksi>.ts`

## Struktur Folder Collections Saat Ini

```
src/collections/
├── Media.ts                   # Fitur Utama (Media Upload)
├── Pages.ts                   # Fitur Utama (Pages)
├── Users.ts                   # Fitur Utama (User Auth)
└── components/
    ├── CategoryBentoGrid.ts   # Komponen Kecil
    ├── HeroBento.ts           # Komponen Kecil
    └── global/
        ├── FooterGlobal.ts    # Komponen Global Kecil
        └── NavbarLiquid.ts    # Komponen Global Kecil
```
