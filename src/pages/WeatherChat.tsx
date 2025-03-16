import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { WeatherCard } from '@/components/weather/WeatherCard';
import { Message } from '@/components/message/Message';
import { Separator } from '@/components/ui/separator';
import { Cloud, CloudRain } from 'lucide-react';

const WeatherChat = () => {
  // Sample weather data for different scenarios
  const weeklyForecastData = {
    currentWeather: {
      type: 'partly-cloudy' as const,
      temperature: 18,
      location: 'Oslo, Norge',
      high: 20,
      low: 12,
      humidity: 45,
      windSpeed: 3,
      uvIndex: 5
    },
    forecast: [
      { type: 'partly-cloudy' as const, temperature: 18, high: 20, low: 12, date: 'I dag', precipitation: 0, uvIndex: 5 },
      { type: 'cloudy' as const, temperature: 16, high: 18, low: 11, date: 'Tir', precipitation: 20, uvIndex: 3 },
      { type: 'rainy' as const, temperature: 14, high: 16, low: 10, date: 'Ons', precipitation: 80, uvIndex: 2 },
      { type: 'rainy' as const, temperature: 15, high: 17, low: 10, date: 'Tor', precipitation: 60, uvIndex: 3 },
      { type: 'partly-cloudy' as const, temperature: 17, high: 20, low: 12, date: 'Fre', precipitation: 10, uvIndex: 4 },
      { type: 'sunny' as const, temperature: 21, high: 24, low: 14, date: 'Lør', precipitation: 0, uvIndex: 7 },
      { type: 'sunny' as const, temperature: 22, high: 25, low: 15, date: 'Søn', precipitation: 0, uvIndex: 8 }
    ]
  };

  const weekendForecastData = {
    currentWeather: {
      type: 'partly-cloudy' as const,
      temperature: 18,
      location: 'Oslo, Norge',
      high: 20,
      low: 12,
      humidity: 45,
      windSpeed: 3,
      uvIndex: 5
    },
    forecast: [
      { type: 'partly-cloudy' as const, temperature: 17, high: 20, low: 12, date: 'Fre', precipitation: 10, uvIndex: 4 },
      { type: 'sunny' as const, temperature: 21, high: 24, low: 14, date: 'Lør', precipitation: 0, uvIndex: 7 },
      { type: 'sunny' as const, temperature: 22, high: 25, low: 15, date: 'Søn', precipitation: 0, uvIndex: 8 }
    ]
  };

  const uvForecastData = {
    currentWeather: {
      type: 'sunny' as const,
      temperature: 22,
      location: 'Oslo, Norge',
      humidity: 40,
      windSpeed: 2,
      uvIndex: 8
    },
    forecast: [
      { type: 'sunny' as const, temperature: 22, hour: 'Nå', date: '', uvIndex: 8 },
      { type: 'sunny' as const, temperature: 23, hour: '14:00', date: '', uvIndex: 9 },
      { type: 'sunny' as const, temperature: 22, hour: '16:00', date: '', uvIndex: 7 },
      { type: 'partly-cloudy' as const, temperature: 20, hour: '18:00', date: '', uvIndex: 5 }
    ]
  };

  return (
    <PageContainer title="Vær-demonstrasjon" description="Demo av værkomponent i chat-grensesnitt">
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <Message 
          role="user"
          content="Hei! Kan du fortelle meg hvordan været blir de neste 7 dagene i Oslo?"
        />
        
        <div className="group rounded-lg mb-8 relative bg-background text-foreground float-left clear-both max-w-[85%]">
          <div className="px-6 py-5">
            <div className="prose prose-headings:mt-6 prose-headings:mb-3 prose-p:my-4 prose-p:leading-relaxed">
              <p>Her er værmelding for de neste 7 dagene i Oslo:</p>
              <WeatherCard 
                currentWeather={weeklyForecastData.currentWeather}
                forecast={weeklyForecastData.forecast}
                forecastType="daily"
                forecastPeriod="7days"
              />
              <p>Det ser ut til at vi får regn midt i uken, men helgen ser lovende ut med sol og høyere temperaturer. Ta med paraply på onsdag og torsdag!</p>
            </div>
          </div>
        </div>

        <Separator />

        <Message 
          role="user"
          content="Hvordan blir været i helgen? Planlegger grilling på lørdag."
        />
        
        <div className="group rounded-lg mb-8 relative bg-background text-foreground float-left clear-both max-w-[85%]">
          <div className="px-6 py-5">
            <div className="prose prose-headings:mt-6 prose-headings:mb-3 prose-p:my-4 prose-p:leading-relaxed">
              <p>Helgen ser faktisk perfekt ut for grilling! Her er værmelding for helgen i Oslo:</p>
              <WeatherCard 
                currentWeather={weekendForecastData.currentWeather}
                forecast={weekendForecastData.forecast}
                forecastType="daily"
                forecastPeriod="weekend"
              />
              <p>Lørdag blir en flott dag med 24 grader på det varmeste og sol hele dagen. Ideelt for grilling! Søndag ser enda varmere ut, så kanskje det blir mulighet for mer uteaktiviteter?</p>
            </div>
          </div>
        </div>

        <Separator />

        <Message 
          role="user"
          content="Jeg skal være ute hele dagen i morgen. Hvordan er UV-indeksen for de neste timene? Trenger jeg solkrem?"
        />
        
        <div className="group rounded-lg mb-8 relative bg-background text-foreground float-left clear-both max-w-[85%]">
          <div className="px-6 py-5">
            <div className="prose prose-headings:mt-6 prose-headings:mb-3 prose-p:my-4 prose-p:leading-relaxed">
              <p>UV-indeksen er ganske høy i dag og de neste timene. Her er oversikten:</p>
              <WeatherCard 
                currentWeather={uvForecastData.currentWeather}
                forecast={uvForecastData.forecast}
                forecastType="hourly"
                forecastPeriod="6hours"
                showUV={true}
              />
              <p>Med en UV-indeks på 8-9 de neste timene, anbefaler jeg absolutt å bruke solkrem med høy faktor (minst SPF 30), bruke hatt og solbriller, og søke skygge midt på dagen når UV-strålingen er sterkest. UV-indeksen er klassifisert som "Veldig høy" mellom kl. 12-16, så ta forhåndsregler!</p>
            </div>
          </div>
        </div>

        <Separator />

        <Message 
          role="user"
          content="Takk! En siste ting - hvor mye regn kommer på onsdag? Bør jeg ta med paraply på jobb?"
        />
        
        <div className="group rounded-lg mb-8 relative bg-background text-foreground float-left clear-both max-w-[85%]">
          <div className="px-6 py-5">
            <div className="prose prose-headings:mt-6 prose-headings:mb-3 prose-p:my-4 prose-p:leading-relaxed">
              <p>Onsdag blir en våt dag med 80% sjanse for nedbør. Her er detaljene:</p>
              <div className="backdrop-blur-xl bg-white/10 rounded-3xl overflow-hidden border border-white/20 shadow-lg p-5 max-w-md mx-auto">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-white">Onsdag</h3>
                    <p className="text-white/80">Oslo, Norge</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CloudRain size={28} className="text-blue-400" />
                    <span className="text-2xl font-light text-white">14°</span>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div className="bg-white/10 rounded-lg p-2">
                    <p className="text-xs text-white/70">Nedbør</p>
                    <p className="text-white font-medium">12mm</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2">
                    <p className="text-xs text-white/70">Sannsynlighet</p>
                    <p className="text-white font-medium">80%</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2">
                    <p className="text-xs text-white/70">Vind</p>
                    <p className="text-white font-medium">4 m/s</p>
                  </div>
                </div>

                <div className="mt-4 bg-white/10 rounded-lg p-3">
                  <h4 className="text-white/90 text-sm mb-2">Nedbørsprognose</h4>
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-4 bg-blue-400/30 rounded-t-sm"></div>
                      <p className="text-xs text-white/70 mt-1">06:00</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-20 w-4 bg-blue-400/50 rounded-t-sm"></div>
                      <p className="text-xs text-white/70 mt-1">09:00</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-32 w-4 bg-blue-400/80 rounded-t-sm"></div>
                      <p className="text-xs text-white/70 mt-1">12:00</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-28 w-4 bg-blue-400/70 rounded-t-sm"></div>
                      <p className="text-xs text-white/70 mt-1">15:00</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-16 w-4 bg-blue-400/40 rounded-t-sm"></div>
                      <p className="text-xs text-white/70 mt-1">18:00</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-8 w-4 bg-blue-400/20 rounded-t-sm"></div>
                      <p className="text-xs text-white/70 mt-1">21:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <p>Ja, jeg vil absolutt anbefale å ta med paraply! Det ser ut til at det blir mest regn rundt lunsjtid og tidlig ettermiddag, med opp til 12mm total nedbør gjennom dagen. En god paraply eller regnjakke er nødvendig.</p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default WeatherChat;
