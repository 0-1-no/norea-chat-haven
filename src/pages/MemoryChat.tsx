
import React, { useState, useRef, useEffect } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { MessageInput } from "@/components/MessageInput";
import { Message } from '@/components/message/Message';
import { MemoryIndicator } from '@/components/message/MemoryIndicator';

// Define the structure for messages
interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  content: string;
  memories?: {
    type: 'retrieve' | 'store';
    content: string;
  }[];
}

const MemoryChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'ai',
      content: 'Hei! Jeg er din AI-assistent med minne. Jeg kan huske ting fra tidligere i samtalen vår. Prøv å fortelle meg noe om deg selv, eller spør meg om noe, så viser jeg deg hvordan dette fungerer.'
    }
  ]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Sample user information to "remember"
  const userMemories = {
    name: 'Jonas',
    favoriteColor: 'blå',
    birthday: '15. mai',
    hometown: 'Bergen',
    job: 'web-utvikler',
    hobby: 'fjellklatring'
  };

  // Scroll to bottom when messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (message: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: message
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Generate AI response with simulated memory capabilities
    setTimeout(() => {
      const aiResponse = generateAIResponse(message);
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const generateAIResponse = (userMessage: string): ChatMessage => {
    const lowercaseMessage = userMessage.toLowerCase();
    const memories = [];
    let responseContent = '';
    
    // Check if user is sharing personal information (simulate storing memory)
    if (lowercaseMessage.includes('jeg heter') || lowercaseMessage.includes('navnet mitt er')) {
      memories.push({
        type: 'store',
        content: `Brukerens navn er ${lowercaseMessage.includes('jeg heter') ? 
          lowercaseMessage.split('jeg heter')[1].trim() : 
          lowercaseMessage.split('navnet mitt er')[1].trim()}`
      });
      responseContent = `Hyggelig å møte deg! Jeg har lagret navnet ditt i minnet mitt, så jeg kan referere til det senere i samtalen.`;
    }
    else if (lowercaseMessage.includes('favorittfarge') || lowercaseMessage.includes('yndlingsfarge')) {
      const color = lowercaseMessage.includes('er') ? 
        lowercaseMessage.split('er')[1].trim() : 
        lowercaseMessage.split('farge')[1].trim();
      
      memories.push({
        type: 'store',
        content: `Brukerens favorittfarge er ${color}`
      });
      responseContent = `${color} er en flott farge! Jeg har lagret dette i minnet mitt.`;
    }
    else if (lowercaseMessage.includes('jobber som') || lowercaseMessage.includes('jeg er')) {
      const job = lowercaseMessage.includes('jobber som') ? 
        lowercaseMessage.split('jobber som')[1].trim() : 
        lowercaseMessage.split('jeg er')[1].trim();
      
      memories.push({
        type: 'store',
        content: `Brukeren jobber som ${job}`
      });
      responseContent = `Interessant å høre at du jobber som ${job}! Jeg har lagret dette i minnet mitt.`;
    }
    // Questions that would trigger memory retrieval
    else if (lowercaseMessage.includes('husker du') || lowercaseMessage.includes('hva heter jeg')) {
      if (lowercaseMessage.includes('navn') || lowercaseMessage.includes('heter jeg')) {
        memories.push({
          type: 'retrieve',
          content: `Brukerens navn er ${userMemories.name}`
        });
        responseContent = `Selvfølgelig! Du heter ${userMemories.name}.`;
      } 
      else if (lowercaseMessage.includes('farge')) {
        memories.push({
          type: 'retrieve',
          content: `Brukerens favorittfarge er ${userMemories.favoriteColor}`
        });
        responseContent = `Jeg husker at favorittfargen din er ${userMemories.favoriteColor}.`;
      }
      else if (lowercaseMessage.includes('jobb') || lowercaseMessage.includes('arbeid')) {
        memories.push({
          type: 'retrieve',
          content: `Brukeren jobber som ${userMemories.job}`
        });
        responseContent = `Du fortalte meg at du jobber som ${userMemories.job}.`;
      }
      else {
        // General memory retrieval
        memories.push({
          type: 'retrieve',
          content: `Brukerens navn er ${userMemories.name}, favorittfarge er ${userMemories.favoriteColor}, og jobber som ${userMemories.job}`
        });
        responseContent = `Ja, jeg husker flere ting om deg. Du heter ${userMemories.name}, favorittfargen din er ${userMemories.favoriteColor}, og du jobber som ${userMemories.job}.`;
      }
    }
    // Default response if no memory triggers
    else {
      responseContent = `Det er interessant! Hvis du forteller meg mer om deg selv, som ditt navn, favorittfarge, eller hva du jobber med, kan jeg huske det for senere. Du kan også spørre meg om jeg husker detaljer om deg.`;
    }
    
    return {
      id: (Date.now() + 1).toString(),
      role: 'ai',
      content: responseContent,
      memories: memories.length > 0 ? memories : undefined
    };
  };

  return (
    <PageContainer title="Minne-demonstrasjon" showBackButton={true}>
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto p-6" ref={chatContainerRef}>
          <div className="max-w-3xl mx-auto">
            {messages.map((message) => (
              <div key={message.id} className="mb-6">
                {/* Memories shown before AI message */}
                {message.role === 'ai' && message.memories && message.memories.map((memory, index) => (
                  <MemoryIndicator 
                    key={index}
                    type={memory.type}
                    content={memory.content}
                  />
                ))}
                
                <Message
                  role={message.role}
                  content={message.content}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 border-t border-border">
          <MessageInput 
            onSendMessage={handleSendMessage}
            className="max-w-3xl mx-auto"
            placeholder="Send en melding..."
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default MemoryChat;
