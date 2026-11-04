// Komentar alasan: Tombol filter dibuat modular agar dapat menerima properti teks, status aktif, dan fungsi klik secara dinamis
function TombolFilter({ teks, aktif, onPilih }) {
  return (
    <button
      onClick={onPilih}
      className={`px-4 py-2 rounded-lg font-medium text-sm transition cursor-pointer ${
        aktif 
          ? 'bg-emerald-800 text-white shadow' 
          : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
      }`}
    >
      {teks}
    </button>
  );
}

export default TombolFilter;