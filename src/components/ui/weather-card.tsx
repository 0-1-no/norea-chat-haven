
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  CloudLightning, 
  CloudFog, 
  CloudDrizzle,
  Droplets,
  Wind,
  Thermometer,
  Umbrella
} from 'lucide-react';

export type WeatherType = 
  | 'sunny' 
  | 'cloudy' 
  | 'partly-cloudy' 
  | 'rainy' 
  | 'snowy' 
  | 'stormy'
  | 'foggy'
  | 'drizzle';

export type ForecastItem = {
  day?: string;
  date?: string;
  time?: string;
  temp?: number;
  highTemp?: number;
  lowTemp?: number;
  weatherType: WeatherType;
  precipitation?: number;
  uvIndex?: number;
  humidity?: number;
  windSpeed?: number;
};

export type WeatherCardProps = {
  location: string;
  currentTemp?: number;
  weatherType: WeatherType;
  description: string;
  highTemp?: number;
  lowTemp?: number;
  precipitation?: number;
  humidity?: number;
  uvIndex?: number;
  windSpeed?: number;
  forecast?: ForecastItem[];
  displayMode?: 'current' | 'week' | 'weekend' | 'hourly-uv';
  className?: string;
};

const WeatherIcons: Record<WeatherType, React.ReactNode> = {
  'sunny': <Sun className="w-8 h-8 text-amber-400" />,
  'cloudy': <Cloud className="w-8 h-8 text-gray-400" />,
  'partly-cloudy': <Cloud className="w-8 h-8 text-blue-300" />,
  'rainy': <CloudRain className="w-8 h-8 text-blue-400" />,
  'snowy': <CloudSnow className="w-8 h-8 text-blue-100" />,
  'stormy': <CloudLightning className="w-8 h-8 text-purple-400" />,
  'foggy': <CloudFog className="w-8 h-8 text-gray-300" />,
  'drizzle': <CloudDrizzle className="w-8 h-8 text-blue-300" />
};

export const WeatherCard: React.FC<WeatherCardProps> = ({
  location,
  currentTemp,
  weatherType,
  description,
  highTemp,
  lowTemp,
  precipitation,
  humidity,
  uvIndex,
  windSpeed,
  forecast = [],
  displayMode = 'current',
  className
}) => {
  // Helper to get gradient based on weather type
  const getBackgroundGradient = (type: WeatherType) => {
    switch (type) {
      case 'sunny':
        return 'bg-gradient-to-br from-blue-400 to-blue-200';
      case 'cloudy':
        return 'bg-gradient-to-br from-gray-300 to-gray-100';
      case 'partly-cloudy':
        return 'bg-gradient-to-br from-blue-300 to-gray-200';
      case 'rainy':
        return 'bg-gradient-to-br from-blue-600 to-blue-400';
      case 'snowy':
        return 'bg-gradient-to-br from-blue-100 to-gray-50';
      case 'stormy':
        return 'bg-gradient-to-br from-gray-700 to-gray-500';
      case 'foggy':
        return 'bg-gradient-to-br from-gray-400 to-gray-200';
      case 'drizzle':
        return 'bg-gradient-to-br from-blue-300 to-gray-300';
      default:
        return 'bg-gradient-to-br from-blue-400 to-blue-200';
    }
  };

  // Get color for UV index
  const getUvColor = (uv: number) => {
    if (uv <= 2) return 'text-green-500';
    if (uv <= 5) return 'text-yellow-500';
    if (uv <= 7) return 'text-orange-500';
    return 'text-red-500';
  };

  // Determine title based on display mode
  const getTitle = () => {
    switch (displayMode) {
      case 'week':
        return 'Værvarsel for 7 dager';
      case 'weekend':
        return 'Værvarsel for helgen';
      case 'hourly-uv':
        return 'UV-indeks de neste timene';
      default:
        return 'Nåværende vær';
    }
  };

  return (
    <div 
      className={cn(
        'rounded-xl overflow-hidden backdrop-blur-lg backdrop-saturate-150 border border-white/20',
        getBackgroundGradient(weatherType),
        className
      )}
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)'
      }}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-medium text-white">{getTitle()}</h3>
            <p className="text-white/80 text-sm">{location}</p>
          </div>
          <div className="flex items-center">
            {WeatherIcons[weatherType]}
          </div>
        </div>

        {displayMode === 'current' && (
          <>
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="text-4xl font-bold text-white">{currentTemp}°</div>
                <div className="text-white/80">{description}</div>
              </div>
              <div className="text-right">
                <div className="text-white/90">H: {highTemp}° L: {lowTemp}°</div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 mb-4">
              <div className="flex flex-col items-center bg-white/10 rounded-lg p-2">
                <Umbrella className="w-5 h-5 text-blue-200 mb-1" />
                <span className="text-xs text-white/80">Nedbør</span>
                <span className="text-sm font-medium text-white">{precipitation}%</span>
              </div>
              <div className="flex flex-col items-center bg-white/10 rounded-lg p-2">
                <Droplets className="w-5 h-5 text-blue-200 mb-1" />
                <span className="text-xs text-white/80">Fuktighet</span>
                <span className="text-sm font-medium text-white">{humidity}%</span>
              </div>
              <div className="flex flex-col items-center bg-white/10 rounded-lg p-2">
                <Sun className="w-5 h-5 text-amber-300 mb-1" />
                <span className="text-xs text-white/80">UV-indeks</span>
                <span className={`text-sm font-medium ${getUvColor(uvIndex || 0)}`}>{uvIndex}</span>
              </div>
              <div className="flex flex-col items-center bg-white/10 rounded-lg p-2">
                <Wind className="w-5 h-5 text-gray-200 mb-1" />
                <span className="text-xs text-white/80">Vind</span>
                <span className="text-sm font-medium text-white">{windSpeed} m/s</span>
              </div>
            </div>
          </>
        )}

        {displayMode === 'week' && (
          <div className="space-y-3 mt-2">
            {forecast.map((day, index) => (
              <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-white/10">
                <div className="w-20">
                  <div className="text-white font-medium">{day.day}</div>
                  <div className="text-white/70 text-xs">{day.date}</div>
                </div>
                <div className="flex items-center">
                  {WeatherIcons[day.weatherType]}
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-white/70">{day.precipitation}%</div>
                  <div className="text-white font-medium w-16 text-right">
                    <span className="text-white">{day.highTemp}°</span>
                    <span className="text-white/60 ml-2">{day.lowTemp}°</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {displayMode === 'weekend' && (
          <div className="space-y-4 mt-2">
            {forecast.filter(day => day.day === 'Lørdag' || day.day === 'Søndag').map((day, index) => (
              <div key={index} className="p-3 rounded-lg bg-white/10">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <div className="text-white font-medium text-lg">{day.day}</div>
                    <div className="text-white/70">{day.date}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    {WeatherIcons[day.weatherType]}
                    <div className="text-right">
                      <div className="text-white font-medium">{day.highTemp}°</div>
                      <div className="text-white/60">{day.lowTemp}°</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  <div className="flex items-center gap-1 text-white/80">
                    <Umbrella className="w-4 h-4" />
                    <span>{day.precipitation}%</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/80">
                    <Sun className="w-4 h-4" />
                    <span>UV: {day.uvIndex}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/80">
                    <Wind className="w-4 h-4" />
                    <span>{day.windSpeed} m/s</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {displayMode === 'hourly-uv' && (
          <div className="mt-2">
            <div className="flex justify-between items-center mb-3">
              <span className="text-white font-medium">UV-indeks</span>
              <div className="flex gap-1">
                <span className="px-2 py-0.5 bg-green-500/20 text-green-200 text-xs rounded">Lav</span>
                <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-200 text-xs rounded">Moderat</span>
                <span className="px-2 py-0.5 bg-red-500/20 text-red-200 text-xs rounded">Høy</span>
              </div>
            </div>
            <div className="space-y-2">
              {forecast.map((hour, index) => (
                <div key={index} className="flex items-center p-2 rounded-lg bg-white/10">
                  <div className="w-12 text-white">{hour.time}</div>
                  <div className="flex-1 mx-3">
                    <div 
                      className="h-2 rounded-full bg-white/20"
                      style={{
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      <div 
                        className={cn(
                          "h-full rounded-full",
                          hour.uvIndex && hour.uvIndex <= 2 ? 'bg-green-500' :
                          hour.uvIndex && hour.uvIndex <= 5 ? 'bg-yellow-500' :
                          hour.uvIndex && hour.uvIndex <= 7 ? 'bg-orange-500' :
                          'bg-red-500'
                        )}
                        style={{
                          width: `${(hour.uvIndex || 0) * 8}%`,
                          maxWidth: '100%'
                        }}
                      />
                    </div>
                  </div>
                  <div className={cn(
                    'w-8 text-center font-medium',
                    getUvColor(hour.uvIndex || 0)
                  )}>
                    {hour.uvIndex}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
