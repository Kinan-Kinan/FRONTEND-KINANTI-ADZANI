// TODO: ganti isi array ini dengan data TEMA KALIAN SENDIRI.
// Aturan (lihat soal.md):
//   - minimal 6 item
//   - tiap item WAJIB punya: id (angka, tidak kembar), nama (teks), kategori (teks)
//   - plus SATU properti angka (mis. harga, halaman, rating)
//   - plus SATU properti true/false (mis. tersedia, buka, dipinjam)
//   - minimal 2 kategori berbeda, dan minimal 1 item yang bernilai false

export const daftarItem = [
  { id: 1, nama: "Monstera Deliciosa", kategori: "Indoor", harga: 75000, tersedia: true, gambar: "images/monstera.jpg" },
  { id: 2, nama: "Sirih Gading", kategori: "Indoor", harga: 15000, tersedia: true, gambar: "images/sirih-gading.png" },
  { id: 3, nama: "Lidah Mertua", kategori: "Indoor", harga: 25000, tersedia: true, gambar: "images/lidah-mertua.png" },
  { id: 4, nama: "Bougenville", kategori: "Outdoor", harga: 35000, tersedia: true, gambar: "images/bougenville.png" },
  { id: 5, nama: "Kaktus Koboi", kategori: "Outdoor", harga: 50000, tersedia: true, gambar: "images/kaktus-koboi.png" },
  { id: 6, nama: "Tabebuya", kategori: "Outdoor", harga: 65000, tersedia: false, gambar: "images/tabebuya.jpg" }
];
