
import React from 'react';
import { 
  Cloud, 
  CloudDrizzle, 
  CloudLightning, 
  CloudRain, 
  CloudSnow, 
  Sun, 
  Umbrella, 
  Wind, 
  ThermometerSun 
} from 'lucide-react';

type WeatherType = 'sunny' | 'cloudy' | 'rainy' | 'stormy' | 'snowy' | 'partly-cloudy' | 'drizzle';
type ForecastType = 'daily' | 'weekend' | 'hourly';
type ForecastPeriod = 'today' | '7days' | 'weekend' | '6hours';

interface WeatherInfo {
  type: WeatherType;
  temperature: number;
  location: string;
  high?: number;
  low?: number;
  humidity?: number;
  windSpeed?: number;
  precipitation?: number;
  uvIndex?: number;
  date?: string;
}

interface WeatherForecastItem {
  type: WeatherType;
  temperature: number;
  high?: number;
  low?: number;
  date: string;
  hour?: string;
  precipitation?: number;
  uvIndex?: number;
}

interface WeatherCardProps {
  currentWeather: WeatherInfo;
  forecast: WeatherForecastItem[];
  forecastType: ForecastType;
  forecastPeriod: ForecastPeriod;
  showUV?: boolean;
}

const getWeatherIcon = (type: WeatherType, size: number = 24) => {
  switch (type) {
    case 'sunny':
      return <Sun size={size} className="text-amber-400" />;
    case 'cloudy':
      return <Cloud size={size} className="text-gray-400" />;
    case 'rainy':
      return <CloudRain size={size} className="text-blue-400" />;
    case 'stormy':
      return <CloudLightning size={size} className="text-purple-400" />;
    case 'snowy':
      return <CloudSnow size={size} className="text-sky-200" />;
    case 'partly-cloudy':
      return (
        <div className="relative">
          <Sun size={size} className="text-amber-400" />
          <Cloud size={size * 0.8} className="text-gray-400 absolute -bottom-1 -right-1" />
        </div>
      );
    case 'drizzle':
      return <CloudDrizzle size={size} className="text-blue-300" />;
    default:
      return <Sun size={size} className="text-amber-400" />;
  }
};

const getUVLabel = (uvIndex: number) => {
  if (uvIndex <= 2) return { label: 'Lav', color: 'text-green-500' };
  if (uvIndex <= 5) return { label: 'Moderat', color: 'text-yellow-500' };
  if (uvIndex <= 7) return { label: 'Høy', color: 'text-orange-500' };
  if (uvIndex <= 10) return { label: 'Veldig høy', color: 'text-red-500' };
  return { label: 'Ekstrem', color: 'text-purple-500' };
};

export const WeatherCard: React.FC<WeatherCardProps> = ({
  currentWeather,
  forecast,
  forecastType,
  forecastPeriod,
  showUV = false
}) => {
  const getCardTitle = () => {
    switch (forecastPeriod) {
      case 'today':
        return 'Dagens vær';
      case '7days':
        return 'Værmelding for 7 dager';
      case 'weekend':
        return 'Værmelding for helgen';
      case '6hours':
        return `UV-indeks for de neste ${forecast.length} timene`;
      default:
        return 'Værmelding';
    }
  };

  return (
    <div className="backdrop-blur-xl bg-white/10 rounded-3xl overflow-hidden border border-white/20 shadow-lg max-w-2xl w-full mx-auto">
      {/* Header with current weather */}
      <div className="bg-gradient-to-r from-blue-400/20 to-blue-600/20 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">{getCardTitle()}</h2>
            <p className="text-white/80">{currentWeather.location}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-white/70">Nå</p>
            <div className="flex items-center gap-2">
              {getWeatherIcon(currentWeather.type, 32)}
              <span className="text-3xl font-light text-white">{currentWeather.temperature}°</span>
            </div>
          </div>
        </div>

        {/* Current details */}
        <div className="grid grid-cols-3 gap-4 mt-6 text-white/90">
          {currentWeather.humidity && (
            <div className="flex flex-col items-center">
              <Umbrella size={18} />
              <span className="text-xs mt-1">Fuktighet</span>
              <span className="font-medium">{currentWeather.humidity}%</span>
            </div>
          )}
          {currentWeather.windSpeed && (
            <div className="flex flex-col items-center">
              <Wind size={18} />
              <span className="text-xs mt-1">Vind</span>
              <span className="font-medium">{currentWeather.windSpeed} m/s</span>
            </div>
          )}
          {currentWeather.uvIndex && (
            <div className="flex flex-col items-center">
              <ThermometerSun size={18} />
              <span className="text-xs mt-1">UV-indeks</span>
              <span className={`font-medium ${getUVLabel(currentWeather.uvIndex).color}`}>
                {currentWeather.uvIndex} ({getUVLabel(currentWeather.uvIndex).label})
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Forecast */}
      <div className="p-4 bg-white/5">
        <div className={`grid ${forecastType === 'hourly' ? 'grid-cols-4' : 'grid-cols-5'} gap-2`}>
          {forecast.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              {forecastType === 'hourly' ? (
                <p className="text-xs text-white/70">{item.hour}</p>
              ) : (
                <p className="text-xs text-white/70">{item.date}</p>
              )}

              <div className="my-2">
                {getWeatherIcon(item.type, forecastType === 'hourly' ? 24 : 20)}
              </div>

              {showUV ? (
                <span className={`text-sm font-medium ${getUVLabel(item.uvIndex || 0).color}`}>
                  {item.uvIndex}
                </span>
              ) : (
                <div className="text-center">
                  {item.high && item.low ? (
                    <div className="text-xs">
                      <span className="text-white">{item.high}°</span>
                      <span className="text-white/50 mx-1">|</span>
                      <span className="text-white/70">{item.low}°</span>
                    </div>
                  ) : (
                    <span className="text-sm font-medium text-white">{item.temperature}°</span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
