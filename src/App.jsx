import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Kartu from "./components/Kartu.jsx";
import TombolFilter from "./components/TombolFilter.jsx";

function App() {
  // State untuk menyimpan daftar item dari server JSON
  const [daftarItem, setDaftarItem] = useState([]);
  
  // State status halaman: "memuat", "berhasil", atau "gagal"
  const [status, setStatus] = useState("memuat");
  
  // State untuk kategori aktif dan input kotak pencarian
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [kataKunci, setKataKunci] = useState("");

  useEffect(() => {
    async function ambilData() {
      try {
        // Fetch data dari file JSON di folder public
        const respons = await fetch("/planthouse.json");
        
        // Periksa apakah respons dari server berhasil (ok)
        if (!respons.ok) {
          throw new Error("Gagal mengambil data dari server");
        }
        
        const data = await respons.json();
        setDaftarItem(data);
        
        // Komentar alasan: status diubah jadi berhasil setelah data sukses disimpan ke state
        setStatus("berhasil");
      } catch (error) {
        console.error(error);
        // Komentar alasan: status diubah jadi gagal jika ada masalah pada jaringan atau file JSON
        setStatus("gagal");
      }
    }
    ambilData();
    
    // Komentar alasan: [] ditaruh di akhir useEffect supaya data diambil sekali saja saat halaman pertama tampil
  }, []);

  // Menyaring data berdasarkan kategori dan kata kunci pencarian secara bersamaan
  const daftarTampil = daftarItem.filter((item) => {
    const cocokKategori = kategoriAktif === "Semua" || item.kategori === kategoriAktif;
    
    // Komentar alasan: toLowerCase digunakan di dua sisi supaya pencarian tidak membedakan huruf besar dan kecil (case-insensitive)
    const cocokKataKunci = item.nama.toLowerCase().includes(kataKunci.toLowerCase());
    
    return cocokKategori && cocokKataKunci;
  });

  // Menentukan tampilan konten berdasarkan tiga keadaan (memuat, gagal, kosong, atau grid kartu)
  let isi;
  if (status === "memuat") {
    isi = <p className="text-center py-10 text-emerald-800">Sedang memuat data tanaman...</p>;
  } else if (status === "gagal") {
    isi = <p className="text-center py-10 text-red-600 font-semibold">Gagal memuat data dari server. Silakan periksa kembali.</p>;
  } else if (daftarTampil.length === 0) {
    isi = <p className="text-center py-10 text-gray-500">Tidak ada tanaman yang cocok dengan pencarian.</p>;
  } else {
    isi = (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {daftarTampil.map((item) => (
          <Kartu key={item.id} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F7F4] text-emerald-950 font-sans flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-6xl mx-auto px-6 py-10">
          {/* Bagian Judul Rata Tengah (text-center & mx-auto) */}
          <section className="text-center mb-10">
            <h1 className="text-3xl font-extrabold text-emerald-950 mb-2">Katalog Tanaman Hias</h1>
            <p className="text-emerald-800 max-w-xl mx-auto text-sm sm:text-base">
              Lengkapi keindahan sudut rumah dan halamanmu dengan koleksi tanaman pilihan.
            </p>
          </section>

          <section>
            {/* Kotak Pencarian */}
            <div className="mb-6">
              <input
                type="text"
                value={kataKunci}
                onChange={(e) => setKataKunci(e.target.value)}
                placeholder="Cari tanaman..."
                className="w-full px-4 py-3 bg-white border border-emerald-200 rounded-xl shadow-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
              />
            </div>

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
            {status === "berhasil" && (
              <p className="mb-6 text-sm text-emerald-700 font-medium">
                Menampilkan {daftarTampil.length} dari {daftarItem.length} tanaman
              </p>
            )}

            {/* Konten berdasarkan tiga keadaan atau grid kartu */}
            {isi}
          </section>
        </main>
      </div>

      {/* Bagian Footer Hak Cipta */}
      <footer className="mt-16 py-6 text-center text-sm text-emerald-700 border-t border-emerald-200 bg-white/50">
        <p>&copy; 2026 PlantHouse. Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
}

export default App;