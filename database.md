# Rancangan Database: PlantHouse
## Tabel planthouse
| Kolom | Tipe | Keterangan |
|---|---|---|
| id | INTEGER | Primary key, diisi database (AUTOINCREMENT) |
| nama | TEXT | Wajib |
| kategori | TEXT | Wajib, dipakai tombol kategori |
| harga | INTEGER | Wajib |
| tersedia | INTEGER | 1 = tersedia, 0 = habis |

Kenapa id yang menjadi primary key: id dipilih sebagai primary key karena nilainya unik untuk setiap baris data sehingga tidak ada data tanaman yang tertukar meskipun memiliki nama atau kategori yang sama.

## Membuat tabel
```sql
CREATE TABLE planthouse (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nama TEXT NOT NULL,
  kategori TEXT NOT NULL,
  harga INTEGER NOT NULL,
  tersedia INTEGER NOT NULL
);

INSERT INTO planthouse (nama, kategori, harga, tersedia) VALUES
('Monstera Deliciosa', 'Indoor', 75000, 1),
('Sirih Gading', 'Indoor', 15000, 1),
('Tabebuya', 'Outdoor', 65000, 0);