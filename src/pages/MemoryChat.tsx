
import React, { useRef, useEffect } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { MessageInput } from "@/components/MessageInput";
import { Message } from '@/components/message/Message';
import { ChatInputContainer } from '@/components/ChatInputContainer';

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
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Pre-defined conversation that shows memory capabilities
  const predefinedMessages: ChatMessage[] = [
    {
      id: '1',
      role: 'ai',
      content: 'Hei! Jeg er din AI-assistent med minne. Jeg kan huske ting fra tidligere i samtalen vår.'
    },
    {
      id: '2',
      role: 'user',
      content: 'Hei! Jeg heter Jonas.'
    },
    {
      id: '3',
      role: 'ai',
      content: 'Hyggelig å møte deg, Jonas! Jeg har lagret navnet ditt i minnet mitt, så jeg kan referere til det senere i samtalen.',
      memories: [
        {
          type: 'store',
          content: 'Brukerens navn er Jonas'
        }
      ]
    },
    {
      id: '4',
      role: 'user',
      content: 'Jeg jobber som web-utvikler og liker å drive med fjellklatring på fritiden.'
    },
    {
      id: '5',
      role: 'ai',
      content: 'Det er interessant å høre at du jobber som web-utvikler og driver med fjellklatring på fritiden! Jeg har lagret denne informasjonen.',
      memories: [
        {
          type: 'store',
          content: 'Brukeren jobber som web-utvikler'
        },
        {
          type: 'store',
          content: 'Brukerens hobby er fjellklatring'
        }
      ]
    },
    {
      id: '6',
      role: 'user',
      content: 'Min favorittfarge er blå.'
    },
    {
      id: '7',
      role: 'ai',
      content: 'Blå er en flott farge! Jeg har lagret dette i minnet mitt.',
      memories: [
        {
          type: 'store',
          content: 'Brukerens favorittfarge er blå'
        }
      ]
    },
    {
      id: '8',
      role: 'user',
      content: 'Hvor kommer jeg fra?'
    },
    {
      id: '9',
      role: 'ai',
      content: 'Du har ikke fortalt meg hvor du kommer fra ennå. Vil du dele det med meg?'
    },
    {
      id: '10',
      role: 'user',
      content: 'Jeg kommer fra Bergen.'
    },
    {
      id: '11',
      role: 'ai',
      content: 'Takk for at du deler det. Jeg har notert at du kommer fra Bergen, som er en vakker by på vestkysten av Norge.',
      memories: [
        {
          type: 'store',
          content: 'Brukeren kommer fra Bergen'
        }
      ]
    },
    {
      id: '12',
      role: 'user',
      content: 'Husker du hva jeg heter?'
    },
    {
      id: '13',
      role: 'ai',
      content: 'Selvfølgelig! Du heter Jonas.',
      memories: [
        {
          type: 'retrieve',
          content: 'Brukerens navn er Jonas'
        }
      ]
    },
    {
      id: '14',
      role: 'user',
      content: 'Hva jobber jeg med og hva liker jeg å gjøre på fritiden?'
    },
    {
      id: '15',
      role: 'ai',
      content: 'Du jobber som web-utvikler, og på fritiden liker du å drive med fjellklatring.',
      memories: [
        {
          type: 'retrieve',
          content: 'Brukeren jobber som web-utvikler'
        },
        {
          type: 'retrieve',
          content: 'Brukerens hobby er fjellklatring'
        }
      ]
    },
    {
      id: '16',
      role: 'user',
      content: 'Kan du oppsummere alt du vet om meg?'
    },
    {
      id: '17',
      role: 'ai',
      content: '## Informasjon om Jonas\n\nBasert på vår samtale, her er det jeg vet om deg:\n\n- Du heter **Jonas**\n- Du kommer fra **Bergen**\n- Du jobber som **web-utvikler**\n- Du liker å drive med **fjellklatring** på fritiden\n- Din favorittfarge er **blå**\n\nEr det noe mer du vil at jeg skal huske om deg?',
      memories: [
        {
          type: 'retrieve',
          content: 'Brukerens navn er Jonas'
        },
        {
          type: 'retrieve',
          content: 'Brukeren kommer fra Bergen'
        },
        {
          type: 'retrieve',
          content: 'Brukeren jobber som web-utvikler'
        },
        {
          type: 'retrieve',
          content: 'Brukerens hobby er fjellklatring'
        },
        {
          type: 'retrieve',
          content: 'Brukerens favorittfarge er blå'
        }
      ]
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
    <PageContainer title="Minne-demonstrasjon" showBackButton={true}>
      {/* Main content area */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Scrollable messages area */}
        <div className="flex-1 overflow-y-auto pb-4" ref={chatContainerRef}>
          <div className="max-w-3xl mx-auto">
            {predefinedMessages.map((message) => (
              <div key={message.id} className="mb-1 after:content-[''] after:clear-both after:table">
                <Message
                  role={message.role}
                  content={message.content}
                  memories={message.memories}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Sticky chat input at bottom */}
      <ChatInputContainer className="sticky bottom-0 z-20">
        <MessageInput 
          onSendMessage={handleSendMessage}
          className="w-full"
          placeholder="Send en melding..."
        />
      </ChatInputContainer>
    </PageContainer>
  );
};

export default MemoryChat;
