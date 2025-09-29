# 🐾 Pokémon Catalog App

Aplikasi web sederhana untuk menampilkan daftar Pokémon dan detailnya.
Dibangun dengan **JavaScript modular (ES Modules)**, **Fetch API**, serta menggunakan **localStorage** untuk caching data.

---

## 🚀 Fitur Utama

* **Daftar Pokémon** (50 Pokémon pertama dari [PokéAPI](https://pokeapi.co/)).
* **Halaman Detail**: Menampilkan informasi lengkap per Pokémon (id, tinggi, berat, tipe).
* **Fallback Gambar Lokal**: Menggunakan gambar lokal dari `assets/images/` bila gambar dari API tidak digunakan.
* **Responsive UI**: Grid card fleksibel (2 kolom di HP, lebih banyak di layar besar).
* **Caching Data**: Daftar Pokémon disimpan di `localStorage` untuk mengurangi fetch berulang.
* **Error Handling**: Menampilkan pesan ramah jika gagal memuat data.

---

## 📂 Struktur Folder

```
project-root/
│
├── index.html          # Halaman utama (daftar Pokémon)
├── detail.html         # Halaman detail Pokémon
├── assets/
│   └── images/         # Gambar Pokémon lokal
│   └── screenshots/    # Screenshot aplikasi
├── src/
│   ├── main.js         # Entry point untuk index.html
│   ├── detail.js       # Entry point untuk detail.html
│   ├── utils.js        # Helper (capitalize, formatHeight, formatWeight)
│   ├── styles/
│   │   └── style.css   # Styling aplikasi
│   └── modules/
│       ├── api.js      # Fetch data dari PokéAPI
│       ├── ui.js       # Render UI (list & detail)
│       └── storage.js  # Simpan & ambil data dari localStorage
└── README.md
```

---

## ⚙️ Teknologi

* **HTML5, CSS3 (Flex/Grid, Responsive)**
* **JavaScript (ES6+ Modular)**
* **Fetch API (async/await + try...catch)**
* **localStorage untuk caching**
* **PokéAPI** sebagai sumber data

---

## 📖 Cara Menjalankan

1. Clone repository:

   ```bash
   git clone https://github.com/username/pokemon-app.git
   cd pokemon-app
   ```
2. Jalankan dengan live server (contoh VSCode extension **Live Server**).
   Atau buka langsung `index.html` di browser.
3. Pastikan folder `assets/images/` berisi gambar Pokémon dengan nama file **sama seperti nama Pokémon** (contoh: `pikachu.png`).

---

## 🔮 Fitur Tambahan (Opsional)

* Pagination atau infinite scroll untuk menampilkan lebih banyak Pokémon.
* Pencarian Pokémon berdasarkan nama.
* Skeleton/loading UI sebelum data tampil.
* Penyimpanan **favorite Pokémon** ke `localStorage`.

---

## 📌 Lisensi

Proyek ini hanya untuk tujuan pembelajaran.
Data Pokémon diambil dari [PokéAPI](https://pokeapi.co/) (open API).
