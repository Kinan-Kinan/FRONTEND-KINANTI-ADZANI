import { useState } from "react";

function FormTambah({ onTambah }) {
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("Indoor");
  const [harga, setHarga] = useState("");
  const [tersedia, setTersedia] = useState("1");
  // State untuk input path/nama file gambar
  const [gambar, setGambar] = useState("images/monstera.jpg");

  async function kirim(e) {
    // Mencegah browser memuat ulang halaman saat form disubmit
    e.preventDefault();

    // Menyiapkan data item baru termasuk nilai gambar dari input
    const itemBaru = {
      nama,
      kategori,
      harga: Number(harga),
      tersedia: Number(tersedia),
      gambar,
    };

    const berhasil = await onTambah(itemBaru);

    // Mengosongkan form jika server berhasil menyimpan data
    if (berhasil) {
      setNama("");
      setKategori("Indoor");
      setHarga("");
      setTersedia("1");
      setGambar("images/monstera.jpg");
    }
  }

  return (
    <form onSubmit={kirim} className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 mb-8">
      <h3 className="text-lg font-bold text-emerald-950 mb-4">Tambah Tanaman Baru</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-semibold text-emerald-800 mb-1">Nama Tanaman</label>
          <input
            type="text"
            required
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Contoh: Kaktus Hias"
            className="w-full px-3 py-2 border border-emerald-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-emerald-800 mb-1">Kategori</label>
          <select
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            className="w-full px-3 py-2 border border-emerald-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
          >
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-emerald-800 mb-1">Harga (Rp)</label>
          <input
            type="number"
            required
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            placeholder="Contoh: 45000"
            className="w-full px-3 py-2 border border-emerald-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-emerald-800 mb-1">Status Ketersediaan</label>
          <select
            value={tersedia}
            onChange={(e) => setTersedia(e.target.value)}
            className="w-full px-3 py-2 border border-emerald-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
          >
            <option value="1">Tersedia</option>
            <option value="0">Habis</option>
          </select>
        </div>

        {/* Kotak Input Tambahan untuk Path/Nama File Gambar */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-emerald-800 mb-1">Path/Nama File Gambar (di folder public)</label>
          <input
            type="text"
            required
            value={gambar}
            onChange={(e) => setGambar(e.target.value)}
            placeholder="Contoh: images/sirih-gading.png"
            className="w-full px-3 py-2 border border-emerald-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-800 text-white py-2.5 rounded-xl font-medium text-sm hover:bg-emerald-900 transition-colors cursor-pointer"
      >
        Simpan Tanaman
      </button>
    </form>
  );
}

export default FormTambah;