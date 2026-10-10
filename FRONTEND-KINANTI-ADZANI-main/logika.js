// Tugas 1A — Data & Logika
// ATURAN: untuk TIAP fungsi, tulis LANGKAH 1–3 sebagai komentar DULU, baru kode.
// Pakai for...of + if. JANGAN pakai .map / .filter / .find / .reduce dulu (lihat soal.md).

console.table(daftarItem);

// ─────────────────────────────────────────────
// FUNGSI 1 — hitungTersedia(daftar)
// Berapa banyak item yang properti true/false-nya bernilai true?
// ─────────────────────────────────────────────
// LANGKAH 1 — PAHAMI : Masukan: daftar item. Keluaran: angka (jumlah tanaman yang tersedia)
// LANGKAH 2 — CONTOH : daftarItem -> 5. Daftar kosong -> 0 
// LANGKAH 3 — LANGKAH (pseudocode)
// 1. Buat variabel `jumlah` dan beri nilai awal 0
// 2. Periksa apakah `daftar` berupa array dan tidak kosong
//    - Jika kosong, langsung kembalikan nilai 0
// 3. Lakukan perulangan untuk setiap `item` di dalam `daftar`:
//    - Jika `item.tersedia` bernilai true, tambahkan `jumlah` sebesar 1
// 4. Kembalikan nilai `jumlah`

// LANGKAH 4 — TERJEMAHKAN
function hitungTersedia(daftar) {
  // Pengecekan kasus tepi jika array kosong
  if (daftar.length === 0) {
    return 0;
  }
  
  // Tempat menyimpan hitungan
  let jumlah = 0;
  
  // Cek item di dalam daftar secara berulang
  for (const item of daftar) {
    if (item.tersedia === true) { // cek jika item tersedia
      jumlah++; // tambah 1 ke jumlah
    }
  }
  
  // Kembalikan hasil akhir
  return jumlah;
}


// ─────────────────────────────────────────────
// FUNGSI 2 — cariBerdasarkanId(daftar, id)
// Kembalikan item yang id-nya cocok. Kalau tidak ada, kembalikan null.
// ─────────────────────────────────────────────
// LANGKAH 1 — PAHAMI : Masukan: daftar item dan id. Keluaran: item yang id-nya cocok
// LANGKAH 2 — CONTOH  : cariBerdasarkanId(daftarItem, 3) -> Lidah Mertua. Kasus tepi: id 99 -> null
// LANGKAH 3 — LANGKAH (pseudocode)
// 1. Jika daftar kosong, langsung kembalikan null
// 2. Lakukan perulangan untuk setiap item di dalam daftar:
//    - Jika item.id sama dengan id yang dicari, kembalikan item tersebut
// 3. Jika perulangan selesai dan tidak ada yang cocok, kembalikan null

// LANGKAH 4 — TERJEMAHKAN
function cariBerdasarkanId(daftar, id) {
  // Kasus tepi: jika daftar kosong
  if (daftar.length === 0) {
    return null;
  }
  
  for (const item of daftar) {
    if (item.id === id) {
      return item;
    }
  }
  
  return null;
}


// ─────────────────────────────────────────────
// FUNGSI 3 — saringKategori(daftar, kategori)
// Kembalikan ARRAY BARU berisi item dengan kategori itu. Kalau tidak ada, array kosong [].
// ─────────────────────────────────────────────
// LANGKAH 1 — PAHAMI : Masukan: daftar item dan kategori. Keluaran: array baru berisi item kategori
// LANGKAH 2 — CONTOH  : saringKategori(daftarItem, "Indoor") -> [Monstera, Sirih Gading, Lidah Mertua]. Kasus tepi: "LuarAngkasa" -> []
// LANGKAH 3 — LANGKAH (pseudocode)
// 1. Buat array kosong bernama `hasil` untuk menampung item yang cocok
// 2. Lakukan perulangan untuk setiap `item` di dalam `daftar`:
//    - Jika `item.kategori` sama dengan `kategori` yang dicari:
//      - Masukkan `item` tersebut ke dalam array `hasil`
// 3. Kembalikan array `hasil`

// LANGKAH 4 — TERJEMAHKAN
function saringKategori(daftar, kategori) {
  // Tanpa pengecekan khusus pun, jika daftar kosong / kategori tidak ada,
  // fungsi akan otomatis mengembalikan array kosong [] sesuai ketentuan kasus tepi.
  const hasil = [];

  for (const item of daftar) {
    if (item.kategori === kategori) {
      hasil.push(item); // Memasukkan item yang cocok ke array hasil
    }
  }

  return hasil; // Mengembalikan array hasil (berisi item cocok atau [] jika tidak ada yang cocok)
}


// ─────────────────────────────────────────────
// FUNGSI 4 — rataRataTersedia(daftar)
// Rata-rata properti angka, HANYA dari item yang bernilai true.
// Kalau tidak ada satu pun yang true, kembalikan null.
// ─────────────────────────────────────────────
// LANGKAH 1 — PAHAMI : Masukan: daftar item. Keluaran: Angka (rata-rata harga dari item yang tersedia)
// LANGKAH 2 — CONTOH  : rataRataTersedia(daftarItem) -> 37000. Kasus tepi: tidak ada item tersedia / array kosong -> null
// LANGKAH 3 — LANGKAH (pseudocode)
// 1. Buat variabel `totalHarga` bernilai 0 dan `jumlahTersedia` bernilai 0
// 2. Lakukan perulangan untuk setiap `item` di dalam `daftar`:
//    - Jika `item.tersedia` bernilai true:
//      - Tambahkan `item.harga` ke `totalHarga`
//      - Tambahkan 1 ke `jumlahTersedia`
// 3. Periksa `jumlahTersedia`:
//    - Jika `jumlahTersedia` adalah 0, kembalikan null (kasus tepi)
//    - Jika tidak, kembalikan hasil `totalHarga / jumlahTersedia`

// LANGKAH 4 — TERJEMAHKAN
function rataRataTersedia(daftar) {
  let totalHarga = 0;
  let jumlahTersedia = 0;

  for (const item of daftar) {
    if (item.tersedia === true) {
      totalHarga += item.harga;
      jumlahTersedia++;
    }
  }

  // Kasus tepi: jika tidak ada satu pun item yang tersedia (atau daftar kosong)
  if (jumlahTersedia === 0) {
    return null;
  }

  return totalHarga / jumlahTersedia;
}


// ─────────────────────────────────────────────
// UJI — minimal 2 panggilan per fungsi: satu kasus normal, satu kasus tepi
// ─────────────────────────────────────────────

console.log("=== UJI FUNGSI 1: hitungTersedia ===");
console.log("Kasus Normal:", hitungTersedia(daftarItem));
console.log("Kasus Tepi (Array Kosong):", hitungTersedia([]));

console.log("\n=== UJI FUNGSI 2: cariBerdasarkanId ===");
console.log("Kasus Normal (ID 2):", cariBerdasarkanId(daftarItem, 2));
console.log("Kasus Tepi (ID Tidak Ada):", cariBerdasarkanId(daftarItem, 99));

console.log("\n=== UJI FUNGSI 3: saringKategori ===");
console.log("Kasus Normal (Indoor):", saringKategori(daftarItem, "Indoor"));
console.log("Kasus Tepi (Kategori Tidak Ada):", saringKategori(daftarItem, "LuarAngkasa"));

console.log("\n=== UJI FUNGSI 4: rataRataTersedia ===");
console.log("Kasus Normal:", rataRataTersedia(daftarItem));
console.log("Kasus Tepi (Array Kosong):", rataRataTersedia([]));