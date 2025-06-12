import { WeatherCondition, WeatherReport, WeatherDisplay } from './types';

// Class untuk aplikasi cuaca
class WeatherApp implements WeatherDisplay {
    private weatherReport: WeatherReport;

    constructor(id: number, nama_kota: string, kondisi_cuaca: WeatherCondition) {
        this.weatherReport = {
            id,
            nama_kota,
            kondisi_cuaca
        };
    }

    // Method untuk menampilkan kondisi cuaca
    displayWeather(): void {
        console.log("=== LAPORAN CUACA ===");
        console.log(`ID: ${this.weatherReport.id}`);
        console.log(`Nama Kota: ${this.weatherReport.nama_kota}`);
        console.log(`Kondisi Cuaca: ${this.weatherReport.kondisi_cuaca}`);
        console.log("====================\n");
    }

    // Method untuk mengubah kondisi cuaca
    changeWeather(newCondition: WeatherCondition): void {
        const oldCondition = this.weatherReport.kondisi_cuaca;
        this.weatherReport.kondisi_cuaca = newCondition;
        
        console.log(`🌤️  Kondisi cuaca berubah dari ${oldCondition} → ${newCondition}`);
        console.log("Perubahan kondisi cuaca berhasil disimpan!\n");
    }

    // Method untuk mendapatkan informasi cuaca saat ini
    getCurrentWeather(): WeatherReport {
        return { ...this.weatherReport };
    }

    // Method untuk menampilkan semua kondisi cuaca yang tersedia
    displayAvailableConditions(): void {
        console.log("🌦️  Kondisi Cuaca yang Tersedia:");
        Object.values(WeatherCondition).forEach((condition, index) => {
            console.log(`${index + 1}. ${condition}`);
        });
        console.log();
    }
}

// Function untuk mensimulasikan perubahan cuaca
function simulateWeatherChanges(weatherApp: WeatherApp): void {
    console.log(" SIMULASI PERUBAHAN CUACA\n");
    
    // Tampilkan kondisi awal
    weatherApp.displayWeather();
    
    // Simulasi perubahan cuaca: Sunny → Cloudy → Rainy → Stormy
    const weatherSequence: WeatherCondition[] = [
        WeatherCondition.Cloudy,
        WeatherCondition.Rainy,
        WeatherCondition.Stormy
    ];

    weatherSequence.forEach((condition, index) => {
        setTimeout(() => {
            weatherApp.changeWeather(condition);
            weatherApp.displayWeather();
            
            // Jika ini adalah perubahan terakhir, tampilkan summary
            if (index === weatherSequence.length - 1) {
                console.log(" Simulasi perubahan cuaca selesai!");
                console.log(" Rangkuman: Sunny → Cloudy → Rainy → Stormy\n");
            }
        }, (index + 1) * 1000); // Delay 1 detik untuk setiap perubahan
    });
}

// Function utama untuk menjalankan aplikasi
function main(): void {
    console.log("🌤️  APLIKASI KONDISI CUACA\n");
    
    // Buat objek weatherReport dengan kondisi awal Sunny
    const weatherApp = new WeatherApp(1, "Banda Aceh", WeatherCondition.Sunny);
    
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
            case WeatherCondition.Sunny:
                console.log("☀️ Matahari bersinar terang! Waktunya vitamin D gratis dan selfie cantik!");
                break;
            case WeatherCondition.Cloudy:
                console.log("☁️  Langit berselimut awan putih. Perfect weather untuk ngopi sambil baca buku!");
                break;
            case WeatherCondition.Rainy:
                console.log("🌧️  Hujan turun. Saatnya dengerin suara hujan sambil rebahan cozy!");
                break;
            case WeatherCondition.Stormy:
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

export { WeatherApp };