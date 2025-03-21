import React, { useRef, useEffect } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { MessageInput } from "@/components/MessageInput";
import { Message } from '@/components/message/Message';
import { WeatherCard } from '@/components/ui/weather-card';
import { ChatInputContainer } from '@/components/ChatInputContainer';

const WeatherChat = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Mock forecast data and conversation
  const weekForecast: ForecastItem[] = [
    { day: 'I dag', date: '15. juni', weatherType: 'sunny', highTemp: 24, lowTemp: 14, precipitation: 0, uvIndex: 8, windSpeed: 3 },
    { day: 'Torsdag', date: '16. juni', weatherType: 'partly-cloudy', highTemp: 22, lowTemp: 13, precipitation: 10, uvIndex: 6, windSpeed: 4 },
    { day: 'Fredag', date: '17. juni', weatherType: 'cloudy', highTemp: 19, lowTemp: 12, precipitation: 30, uvIndex: 4, windSpeed: 5 },
    { day: 'Lørdag', date: '18. juni', weatherType: 'rainy', highTemp: 17, lowTemp: 12, precipitation: 80, uvIndex: 2, windSpeed: 6 },
    { day: 'Søndag', date: '19. juni', weatherType: 'drizzle', highTemp: 18, lowTemp: 13, precipitation: 40, uvIndex: 3, windSpeed: 4 },
    { day: 'Mandag', date: '20. juni', weatherType: 'partly-cloudy', highTemp: 20, lowTemp: 13, precipitation: 20, uvIndex: 5, windSpeed: 3 },
    { day: 'Tirsdag', date: '21. juni', weatherType: 'sunny', highTemp: 23, lowTemp: 14, precipitation: 0, uvIndex: 7, windSpeed: 2 },
  ];

  const hourlyUvForecast: ForecastItem[] = [
    { time: '12:00', weatherType: 'sunny', uvIndex: 9 },
    { time: '13:00', weatherType: 'sunny', uvIndex: 10 },
    { time: '14:00', weatherType: 'sunny', uvIndex: 9 },
    { time: '15:00', weatherType: 'partly-cloudy', uvIndex: 7 },
    { time: '16:00', weatherType: 'partly-cloudy', uvIndex: 5 },
    { time: '17:00', weatherType: 'cloudy', uvIndex: 3 },
  ];

  // Sample conversation with weather queries
  const conversation = [
    {
      role: 'user' as const,
      content: 'Hei, hvordan er været i Oslo i dag?'
    },
    {
      role: 'ai' as const,
      content: 'Hei! Her er dagens værmelding for Oslo:',
      weatherCard: (
        <WeatherCard 
          location="Oslo, Norge"
          currentTemp={23}
          weatherType="sunny"
          description="Klar himmel og solskinn"
          highTemp={24}
          lowTemp={14}
          precipitation={0}
          humidity={45}
          uvIndex={8}
          windSpeed={3}
          displayMode="current"
        />
      ),
      additionalText: "Det er strålende sommervær i Oslo i dag med temperaturer opp til 24°C. UV-indeksen er høy, så husk solkrem hvis du skal være ute i lengre perioder."
    },
    {
      role: 'user' as const,
      content: 'Hvordan blir været de neste 7 dagene?'
    },
    {
      role: 'ai' as const,
      content: 'Her er værprognosen for Oslo de neste 7 dagene:',
      weatherCard: (
        <WeatherCard 
          location="Oslo, Norge"
          weatherType="partly-cloudy"
          description="Varierende skydekke gjennom uken"
          forecast={weekForecast}
          displayMode="week"
        />
      ),
      additionalText: "Det ser ut til at det fine været vil fortsette i dag og deler av i morgen, men så kommer det en liten værforandring med regn på lørdag. Temperaturen vil holde seg relativt mild med høye verdier mellom 17-24°C."
    },
    {
      role: 'user' as const,
      content: 'Hvordan blir været denne helgen?'
    },
    {
      role: 'ai' as const,
      content: 'Her er værprognosen for Oslo denne helgen:',
      weatherCard: (
        <WeatherCard 
          location="Oslo, Norge"
          weatherType="rainy"
          description="Regn på lørdag, lettere på søndag"
          forecast={weekForecast}
          displayMode="weekend"
        />
      ),
      additionalText: "Det blir dessverre en våt helg, spesielt på lørdag med høy sannsynlighet for regn. Søndag ser litt bedre ut med lettere duskregn. Temperaturen vil ligge rundt 17-18°C, så det blir relativt mildt til tross for nedbøren."
    },
    {
      role: 'user' as const,
      content: 'Hva er UV-indeksen for de neste 6 timene?'
    },
    {
      role: 'ai' as const,
      content: 'Her er UV-indeksen for Oslo de neste 6 timene:',
      weatherCard: (
        <WeatherCard 
          location="Oslo, Norge"
          weatherType="sunny"
          description="Høy UV-indeks midt på dagen"
          forecast={hourlyUvForecast}
          displayMode="hourly-uv"
        />
      ),
      additionalText: "UV-indeksen er høyest mellom kl. 12:00 og 14:00 med verdier opp mot 10, som er svært høyt. Jeg anbefaler å bruke solkrem med høy faktor (30-50 SPF), solbriller og hatt hvis du skal være ute. Prøv å unngå direkte sollys mellom kl. 12:00 og 15:00 hvis mulig."
    }
  ];

  // Scroll to bottom when messages are loaded
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, []);

  const handleSendMessage = (message: string) => {
    console.log("Message sent:", message);
    // In a real application, this would add the message to the conversation
  };

  return (
    <PageContainer title="Vær-demonstrasjon" showBackButton={true}>
      {/* Main content area */}
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto pb-16" ref={chatContainerRef}>
          <div className="max-w-3xl mx-auto">
            {conversation.map((message, index) => (
              <div key={index} className="mb-3 after:content-[''] after:clear-both after:table">
                {message.role === 'user' ? (
                  <Message
                    role="user"
                    content={message.content}
                  />
                ) : (
                  <div className="float-left max-w-[85%]">
                    <p className="text-foreground mb-2">{message.content}</p>
                    <div className="mb-2">
                      {'weatherCard' in message && message.weatherCard}
                    </div>
                    {'additionalText' in message && <p className="text-foreground mt-2">{message.additionalText}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Sticky chat input at bottom */}
        <ChatInputContainer>
          <MessageInput 
            onSendMessage={handleSendMessage}
            className="w-full"
            placeholder="Spør om været..."
          />
        </ChatInputContainer>
      </div>
    </PageContainer>
  );
};

export default WeatherChat;
