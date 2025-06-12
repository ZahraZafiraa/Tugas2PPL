# 🌤️ Weather App TypeScript

> **Tugas 2 - Pemanfaatan Enum dalam TypeScript**

## 📋 Deskripsi

Aplikasi cuaca sederhana yang dibangun dengan **TypeScript** untuk mendemonstrasikan penggunaan **Enum** dalam pemrograman. Aplikasi ini mensimulasikan perubahan kondisi cuaca secara real-time dan menampilkan informasi cuaca dengan type safety yang ketat.

## ✨ Fitur

- 🔄 **Enum WeatherCondition** dengan 4 kondisi cuaca (Sunny, Cloudy, Rainy, Stormy)
- 📊 **Interface WeatherReport** untuk struktur data yang konsisten
- 🎯 **Type Safety** dengan TypeScript untuk mencegah error runtime
- ⏱️ **Simulasi Real-time** perubahan cuaca dengan delay
- 🎨 **Console Output** dengan emoji dan formatting yang menarik
- 🔀 **Switch Case** untuk conditional logic berdasarkan enum
- 📱 **Responsive Design** untuk berbagai ukuran terminal

## 🚀 Demo

```
🌤️  APLIKASI CUACA DENGAN TYPESCRIPT ENUM

🌦️  Kondisi Cuaca yang Tersedia:
1. Sunny
2. Rainy
3. Cloudy
4. Stormy

 KONDISI CUACA AWAL:
=== LAPORAN CUACA ===
ID: 1
Nama Kota: Banda Aceh
Kondisi Cuaca: Sunny
====================

SIMULASI PERUBAHAN CUACA

🌤️  Kondisi cuaca berubah dari Sunny → Cloudy
Perubahan kondisi cuaca berhasil disimpan!

=== LAPORAN CUACA ===
ID: 1
Nama Kota: Banda Aceh
Kondisi Cuaca: Cloudy
====================
```

## 🛠️ Instalasi

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 atau lebih baru)
- [npm](https://www.npmjs.com/) atau [yarn](https://yarnpkg.com/)

### Langkah Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/[username]/weather-app-typescript.git
   cd weather-app-typescript
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Compile TypeScript**
   ```bash
   npm run build
   ```

4. **Jalankan aplikasi**
   ```bash
   npm start
   ```

### Development Mode

Untuk menjalankan dalam mode development:

```bash
npm run dev
```

## 📁 Struktur Project

```
weather-app-typescript/
├── 📄 package.json          # Konfigurasi Node.js
├── 📄 tsconfig.json         # Konfigurasi TypeScript
├── 📄 types.ts             # Definisi Enum dan Interface
├── 📄 weatherApp.ts        # Aplikasi utama
├── 📄 README.md            # Dokumentasi
├── 📂 dist/               # File hasil compile
│   ├── types.js
│   └── weatherApp.js
└── 📂 node_modules/       # Dependencies
```

## 🔧 Scripts

| Script | Deskripsi |
|--------|-----------|
| `npm run build` | Compile TypeScript ke JavaScript |
| `npm start` | Jalankan aplikasi dari file JS |
| `npm run dev` | Jalankan dalam mode development |

## 💻 Penggunaan

### Basic Usage

```typescript
import { WeatherApp } from './weatherApp';
import { WeatherCondition } from './types';

// Buat instance aplikasi cuaca
const weather = new WeatherApp(1, "Banda Aceh", WeatherCondition.Sunny);

// Tampilkan cuaca saat ini
weather.displayWeather();

// Ubah kondisi cuaca
weather.changeWeather(WeatherCondition.Rainy);
```

### Enum WeatherCondition

```typescript
enum WeatherCondition {
    Sunny = "Sunny",
    Rainy = "Rainy", 
    Cloudy = "Cloudy",
    Stormy = "Stormy"
}
```

### Interface WeatherReport

```typescript
interface WeatherReport {
    id: number;
    nama_kota: string;
    kondisi_cuaca: WeatherCondition;
}
```

## 🎯 Konsep TypeScript yang Digunakan

- **Enum**: Untuk mendefinisikan konstanta yang terbatas
- **Interface**: Untuk struktur data yang konsisten
- **Type Safety**: Mencegah error dengan type checking
- **Class**: Untuk encapsulation dan organization
- **Method**: Untuk functionality yang dapat digunakan kembali
- **Import/Export**: Untuk modular programming

## 🔍 Contoh Output

### Kondisi Cuaca
```
☀️  Matahari bersinar terang! Waktunya vitamin D gratis dan selfie cantik!
☁️  Langit berselimut awan putih. Perfect weather untuk ngopi sambil baca buku!
🌧️  Hujan turun. Saatnya dengerin suara hujan sambil rebahan cozy!
⛈️  Thunder mode activated! Netflix and chill time dengan secangkir teh hangat!
```

### Simulasi Perubahan
```
🌤️  Kondisi cuaca berubah dari Sunny → Cloudy
🌤️  Kondisi cuaca berubah dari Cloudy → Rainy
🌤️  Kondisi cuaca berubah dari Rainy → Stormy
```

## 🧪 Testing

Untuk menguji aplikasi:

```bash
# Jalankan aplikasi dan periksa output
npm start

# Atau gunakan development mode
npm run dev
```

## 👨‍💻 Author

**Zahra Zafira - 2208107010040**
- GitHub: [@ZahraZafiraa](https://github.com/ZahraZafiraa)
- Email: zahra.z@mhs.usk.ac.id
- Universitas: Universitas Syiah Kuala (USK)
