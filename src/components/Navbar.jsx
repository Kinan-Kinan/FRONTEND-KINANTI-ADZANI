// Komentar alasan: Komponen Navbar menampilkan logo dan menu navigasi dengan tema warna hijau tua PlantHouse
function Navbar() {
  return (
    <header className="bg-emerald-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-lg text-white">
          <span>🌱 PlantHouse</span>
        </div>
        <div className="flex gap-6 text-sm font-medium text-emerald-100">
          <span className="hover:underline cursor-pointer">Beranda</span>
          <span className="hover:underline cursor-pointer">Koleksi Tanaman</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;