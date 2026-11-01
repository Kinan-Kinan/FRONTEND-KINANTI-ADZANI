import { useState } from "react";
import { daftarItem } from "./data.js";
import Navbar from "./components/Navbar.jsx";
import Kartu from "./components/Kartu.jsx";
import TombolFilter from "./components/TombolFilter.jsx";

function App() {
  // Komentar alasan: State kategoriAktif dikelola di App agar tombol filter dan kartu sinkron secara reaktif
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  // Menyaring data item secara dinamis berdasarkan kategori
  const daftarTampil = kategoriAktif === "Semua"
    ? daftarItem
    : daftarItem.filter(item => item.kategori === kategoriAktif);

  return (
    <div className="min-h-screen bg-[#F4F7F4] text-emerald-950 font-sans">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Bagian Judul Rata Tengah (Center) */}
        <section className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-emerald-950 mb-2">Katalog Tanaman Hias</h1>
          <p className="text-emerald-800 max-w-xl mx-auto">
            Temukan berbagai koleksi tanaman indoor dan outdoor terbaik untuk mempercantik ruanganmu.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-950 mb-4">Daftar Pilihan Tanaman</h2>

          {/* Tombol Filter Kategori */}
          <div className="flex gap-2 mb-6">
            <TombolFilter 
              teks="Semua" 
              aktif={kategoriAktif === "Semua"} 
              onPilih={() => setKategoriAktif("Semua")} 
            />
            <TombolFilter 
              teks="Indoor" 
              aktif={kategoriAktif === "Indoor"} 
              onPilih={() => setKategoriAktif("Indoor")} 
            />
            <TombolFilter 
              teks="Outdoor" 
              aktif={kategoriAktif === "Outdoor"} 
              onPilih={() => setKategoriAktif("Outdoor")} 
            />
          </div>

          {/* Indikator jumlah item */}
          <p className="mb-6 text-sm text-emerald-700 font-medium">
            Menampilkan {daftarTampil.length} dari {daftarItem.length} tanaman
          </p>

          {/* Perulangan .map() untuk merender komponen Kartu ke dalam Grid yang responsif */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {daftarTampil.map(item => (
              <Kartu key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 py-6 text-center text-sm text-emerald-700 border-t border-emerald-200">
        <p>&copy; 2026 PlantHouse. Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
}

export default App;