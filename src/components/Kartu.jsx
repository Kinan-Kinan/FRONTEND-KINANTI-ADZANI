// Komentar alasan: Komponen Kartu menyusun struktur visual tanaman, gambar, status ketersediaan, dan warna tema hijau tua sesuai desain asli
function Kartu({ item }) {
  // Menentukan label dan warna badge berdasarkan status ketersediaan (true/false)
  const statusTeks = item.tersedia ? "Tersedia" : "Habis";
  const statusWarna = item.tersedia 
    ? "bg-emerald-100 text-emerald-800" 
    : "bg-red-100 text-red-800";

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-emerald-100 flex flex-col justify-between">
      {/* Bagian Gambar Tanaman */}
      <div className="h-48 overflow-hidden bg-emerald-50 flex items-center justify-center relative">
        <img 
          src={`/${item.gambar}`} 
          alt={item.nama} 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Cadangan gambar jika terjadi kesalahan pada path
            e.target.src = "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80";
          }}
        />
        {/* Badge Status Ketersediaan */}
        <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full shadow-sm ${statusWarna}`}>
          {statusTeks}
        </span>
      </div>

      {/* Konten Teks */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800 mb-3">
            {item.kategori}
          </span>
          <h3 className="font-bold text-lg text-emerald-950 mb-4">{item.nama}</h3>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-emerald-50">
          <span className="text-sm text-emerald-700 font-medium">Harga:</span>
          <span className="text-base font-bold text-emerald-950">
            Rp {item.harga.toLocaleString("id-ID")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Kartu;