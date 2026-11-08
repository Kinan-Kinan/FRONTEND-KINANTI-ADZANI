// Komentar alasan: Navbar menggunakan tema hijau tua khas PlantHouse dengan menu Koleksi dan Kontak sesuai desain awal
function Navbar() {
  return (
    <header className="bg-emerald-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-lg text-white">
          <span>🌱 PlantHouse</span>
        </div>
        <div className="flex gap-6 text-sm font-medium text-emerald-100">
          <span className="hover:text-white cursor-pointer">Koleksi</span>
          <span className="hover:text-white cursor-pointer">Kontak</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;