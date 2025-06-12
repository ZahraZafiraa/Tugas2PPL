// Enum untuk kondisi cuaca
export enum WeatherCondition {
    Sunny = "Sunny",
    Rainy = "Rainy", 
    Cloudy = "Cloudy",
    Stormy = "Stormy"
}

// Interface untuk objek weatherReport
export interface WeatherReport {
    id: number;
    nama_kota: string;
    kondisi_cuaca: WeatherCondition;
}

// Interface untuk menampilkan informasi cuaca
export interface WeatherDisplay {
    displayWeather(): void;
    changeWeather(newCondition: WeatherCondition): void;
}