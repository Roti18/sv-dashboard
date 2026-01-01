# SV Dashboard - Boilerplate

Proyek ini adalah sebuah templat (boilerplate) untuk membangun antarmuka dasbor yang modern dan responsif menggunakan SvelteKit. Dibuat untuk mempercepat proses pengembangan dengan menyediakan komponen UI yang siap pakai, tata letak standar, dan konfigurasi proyek yang optimal.

**Status:** Proyek ini masih dalam tahap pengembangan awal.

---

## Fitur Utama

- **Framework Modern:** Dibangun di atas **SvelteKit**, memberikan performa tinggi dan pengalaman pengembangan yang menyenangkan.
- **Peralatan Cepat:** Menggunakan **Vite** untuk *build tool*, memastikan *hot-reloading* yang instan dan proses *build* yang cepat.
- **Type Safety:** Ditulis sepenuhnya menggunakan **TypeScript** untuk kode yang lebih andal dan mudah dikelola.
- **Koleksi Komponen UI:** Dilengkapi dengan berbagai komponen siap pakai di dalam `src/lib/components` dan `src/lib/ui`, seperti:
  - `Card`: Untuk menampilkan konten dalam blok terstruktur.
  - `Button`, `Input`, `Select`, `Textarea`: Elemen formulir interaktif.
  - `Sidebar`, `Topbar`, `DashboardLayout`: Komponen tata letak utama untuk dasbor.
  - `Avatar`, `Badge`, `Tooltip`: Komponen UI tambahan untuk memperkaya tampilan.
- **Tata Letak Dasbor:** Tata letak dasbor yang responsif sudah tersedia, lengkap dengan *sidebar* dan *topbar*.
- **Data Mock:** Menyertakan data tiruan (`src/lib/data/mock.ts`) untuk mempermudah pengembangan dan *prototyping* tampilan.
- **Konfigurasi Modern:** Sudah terkonfigurasi dengan ESLint dan Prettier untuk menjaga konsistensi dan kualitas kode.

## Memulai Proyek

1. **Install Dependensi**
   Gunakan npm (atau package manager pilihan Anda) untuk menginstal semua dependensi yang dibutuhkan.
   ```sh
   npm install
   ```

2. **Jalankan Server Pengembangan**
   Perintah ini akan menjalankan aplikasi dalam mode pengembangan dan membukanya di browser.
   ```sh
   npm run dev -- --open
   ```

## Proses Build

Untuk membuat versi produksi dari aplikasi Anda:

```sh
npm run build
```

Anda dapat melihat hasil build produksi dengan menjalankan `npm run preview`.

> **Catatan:** Untuk melakukan *deployment*, Anda mungkin perlu menginstal [adapter](https://kit.svelte.dev/docs/adapters) yang sesuai dengan lingkungan target Anda (misalnya Vercel, Netlify, atau Node.js server).
