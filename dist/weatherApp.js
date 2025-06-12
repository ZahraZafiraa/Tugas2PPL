"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherApp = void 0;
const types_1 = require("./types");

// Class untuk aplikasi cuaca
class WeatherApp {
    constructor(id, nama_kota, kondisi_cuaca) {
        this.weatherReport = {
            id,
            nama_kota,
            kondisi_cuaca
        };
    }

    // Method untuk menampilkan kondisi cuaca
    displayWeather() {
        console.log("=== LAPORAN CUACA ===");
        console.log(`ID: ${this.weatherReport.id}`);
        console.log(`Nama Kota: ${this.weatherReport.nama_kota}`);
        console.log(`Kondisi Cuaca: ${this.weatherReport.kondisi_cuaca}`);
        console.log("====================\n");
    }

    // Method untuk mengubah kondisi cuaca
    changeWeather(newCondition) {
        const oldCondition = this.weatherReport.kondisi_cuaca;
        this.weatherReport.kondisi_cuaca = newCondition;

        console.log(`🌤️  Kondisi cuaca berubah dari ${oldCondition} → ${newCondition}`);
        console.log("Perubahan kondisi cuaca berhasil disimpan!\n");
    }

    // Method untuk mendapatkan informasi cuaca saat ini
    getCurrentWeather() {
        return { ...this.weatherReport };
    }

    // Method untuk menampilkan semua kondisi cuaca yang tersedia
    displayAvailableConditions() {
        console.log("🌦️  Kondisi Cuaca yang Tersedia:");
        Object.values(types_1.WeatherCondition).forEach((condition, index) => {
            console.log(`${index + 1}. ${condition}`);
        });
        console.log();
    }
}
exports.WeatherApp = WeatherApp;

// Function untuk mensimulasikan perubahan cuaca
function simulateWeatherChanges(weatherApp) {
    console.log(" SIMULASI PERUBAHAN CUACA\n");

    // Tampilkan kondisi awal
    weatherApp.displayWeather();

    // Simulasi perubahan cuaca: Sunny → Cloudy → Rainy → Stormy
    const weatherSequence = [
        types_1.WeatherCondition.Cloudy,
        types_1.WeatherCondition.Rainy,
        types_1.WeatherCondition.Stormy
    ];

    weatherSequence.forEach((condition, index) => {
        setTimeout(() => {
            weatherApp.changeWeather(condition);
            weatherApp.displayWeather();

            if (index === weatherSequence.length - 1) {
                console.log(" Simulasi perubahan cuaca selesai!");
                console.log(" Rangkuman: Sunny → Cloudy → Rainy → Stormy\n");
            }
        }, (index + 1) * 1000);
    });
}

// Function utama untuk menjalankan aplikasi
function main() {
    console.log("🌤️  APLIKASI KONDISI CUACA\n");

    // Buat objek weatherReport dengan kondisi awal Sunny
    const weatherApp = new WeatherApp(1, "Banda Aceh", types_1.WeatherCondition.Sunny);

    // Tampilkan kondisi cuaca yang tersedia
    weatherApp.displayAvailableConditions();

    // Tampilkan kondisi cuaca awal
    console.log(" KONDISI CUACA AWAL:");
    weatherApp.displayWeather();

    // Jalankan simulasi perubahan cuaca
    simulateWeatherChanges(weatherApp);

    // Tampilkan contoh penggunaan enum dalam kondisi
    setTimeout(() => {
        console.log(" CONTOH PENGGUNAAN ENUM DALAM KONDISI:");
        const currentWeather = weatherApp.getCurrentWeather();

        switch (currentWeather.kondisi_cuaca) {
            case types_1.WeatherCondition.Sunny:
                console.log("☀️ Matahari bersinar terang! Waktunya vitamin D gratis dan selfie cantik!");
                break;
            case types_1.WeatherCondition.Cloudy:
                console.log("☁️  Langit berselimut awan putih. Perfect weather untuk ngopi sambil baca buku!");
                break;
            case types_1.WeatherCondition.Rainy:
                console.log("🌧️  Hujan turun. Saatnya dengerin suara hujan sambil rebahan cozy!");
                break;
            case types_1.WeatherCondition.Stormy:
                console.log("⛈️ Thunder mode activated! Netflix and chill time dengan secangkir teh hangat!");
                break;
            default:
                console.log("🤔 Hmm... cuaca mystery nih, mungkin alien lagi eksperimen!");
        }
        console.log();
    }, 4000); // Tunggu sampai simulasi selesai
}

// Jalankan aplikasi
if (require.main === module) {
    main();
}
