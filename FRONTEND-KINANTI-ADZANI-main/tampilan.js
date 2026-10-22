// KOMENTAR 1: Mengambil elemen wadah kartu menggunakan querySelector agar JavaScript dapat memanipulasi DOM pada elemen ber-id #daftar-kartu
const wadahKartu = document.querySelector("#daftar-kartu");

// Fungsi untuk membuat satu elemen HTML kartu dari satu object data
function buatKartu(item) {
    let label = "";
    // Kondisi untuk item yang bernilai false (Habis)
    if (item.tersedia === false) {
        label = '<span class="text-xs font-semibold text-red-700 bg-red-100 px-2 py-0.5 rounded-full">Habis</span>';
    } else {
        label = `<span class="text-xs text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">${item.kategori}</span>`;
    }

    // KOMENTAR 2: Menggunakan template literal (backtick) agar variabel data seperti ${item.nama} dapat disisipkan ke dalam struktur HTML secara dinamis dan mudah dibaca
    return `
        <article class="bg-white rounded-xl shadow-sm border border-emerald-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition">
            <div>
                <div class="h-48 bg-emerald-50 overflow-hidden">
                    <img src="${item.gambar}" alt="${item.nama}" class="w-full h-full object-cover">
                </div>
                <div class="p-5">
                    ${label}
                    <h3 class="text-xl font-bold mt-3 text-emerald-950">${item.nama}</h3>
                </div>
            </div>
            <div class="px-5 pb-5 pt-3 border-t border-emerald-50 flex justify-between items-center text-sm">
                <span class="text-emerald-700">Harga:</span>
                <span class="font-bold text-emerald-900">Rp ${item.harga.toLocaleString("id-ID")}</span>
            </div>
        </article>
    `;
}

// Fungsi utama untuk merender daftar item ke halaman
function tampilkan(daftar) {
    // Kasus Tepi: Menampilkan pesan jika daftar kosong/tidak ada item
    if (daftar.length === 0) {
        wadahKartu.innerHTML = '<p class="text-gray-500 text-center py-8 col-span-full">Maaf, tanaman dalam kategori ini belum tersedia.</p>';
        return;
    }

    // KOMENTAR 3: Menggunakan .map() untuk mengubah setiap objek di dalam array data menjadi array teks HTML kartu, lalu digabung dengan .join("") agar menjadi satu string utuh tanpa pemisah koma pada innerHTML
    const semuaKartu = daftar.map((item) => buatKartu(item));
    wadahKartu.innerHTML = semuaKartu.join("");
}

// Menampilkan seluruh data secara default saat halaman pertama kali dimuat
tampilkan(daftarItem);

// Event Listener untuk Tombol Filter Kategori
document.querySelector("#tombol-semua").addEventListener("click", () => {
    tampilkan(daftarItem);
});

document.querySelector("#tombol-indoor").addEventListener("click", () => {
    // KOMENTAR 4: Menggunakan metode .filter() untuk menyaring data berdasarkan kategori "Indoor" ke array baru, sehingga array data asli (daftarItem) tetap utuh dan aman saat tombol "Semua" diklik kembali
    const indoor = daftarItem.filter((item) => item.kategori === "Indoor");
    tampilkan(indoor);
});

document.querySelector("#tombol-outdoor").addEventListener("click", () => {
    const outdoor = daftarItem.filter((item) => item.kategori === "Outdoor");
    tampilkan(outdoor);
});