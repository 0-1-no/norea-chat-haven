
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageContainer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { FileText, Upload, BookOpen, MessageCircle, Info, ArrowRight, Sparkles, Image } from 'lucide-react';

const CustomRoomView = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();
  const [instructionsOpen, setInstructionsOpen] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  // Custom theme data for the room
  const customTheme = {
    primaryColor: '#8B5CF6', // Vibrant purple
    accentColor: '#D946EF', // Magenta pink
    gradientBg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    cardBg: 'rgba(255, 255, 255, 0.85)',
    cardBorder: 'rgba(255, 255, 255, 0.3)',
    cardShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
    font: 'system-ui, -apple-system, sans-serif',
  };

  // Mock data for the room
  const room = {
    id: roomId || '1',
    name: 'Creative Design Studio',
    description: 'Collaborative space for brainstorming and visual design concepts',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop',
    instructions: `# Creative Room Instructions

This space is designed to foster creativity and visual design exploration. The assistant will:

1. Provide detailed descriptions and concepts for visual design
2. Help with color theory and palette suggestions
3. Brainstorm creative solutions for design challenges
4. Suggest visual references and inspiration
5. Assist with typography and layout advice

The assistant prioritizes creative exploration over technical constraints and will encourage experimentation with new approaches.`,
    previousChats: [
      { id: '1', title: 'Brand identity exploration', date: '1 dag siden' },
      { id: '2', title: 'Color palette for summer campaign', date: '3 dager siden' },
      { id: '3', title: 'Typography combinations for website', date: '5 dager siden' }
    ],
    files: [
      { id: '1', name: 'mood-board.pdf', type: 'pdf', size: '8.2 MB' },
      { id: '2', name: 'color-palettes.txt', type: 'txt', size: '32 KB' },
      { id: '3', name: 'design-notes.md', type: 'md', size: '156 KB' }
    ]
  };

  // Handle file drop
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      console.log(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files);
    }
  };

  // Start a new chat
  const handleStartNewChat = () => {
    console.log('Starting new chat in customized room:', roomId);
  };

  return (
    <PageContainer title={room.name} showBackButton={true}>
      {/* Hero section with background image */}
      <div 
        className="rounded-xl mb-8 relative overflow-hidden" 
        style={{ 
          backgroundImage: `url(${room.coverImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          height: '200px'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-fuchsia-600/50"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">{room.name}</h1>
          <p className="text-white/90 max-w-xl">{room.description}</p>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <Button 
            className="bg-white/20 hover:bg-white/30 text-white border-0"
            size="sm"
            onClick={() => setInstructionsOpen(true)}
          >
            <Info className="w-4 h-4 mr-2" />
            Instruksjoner
          </Button>
          <Button 
            className="bg-white/20 hover:bg-white/30 text-white border-0"
            size="sm"
            onClick={() => {}}
          >
            <Image className="w-4 h-4 mr-2" />
            Endre bakgrunn
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 mb-4">
            <Button 
              className="bg-gradient-to-r from-violet-600 to-indigo-600 border-0 hover:from-violet-700 hover:to-indigo-700"
              onClick={handleStartNewChat}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Ny samtale
            </Button>
            <Button 
              variant="outline" 
              className="border-violet-300 text-violet-700"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Tilpass rom
            </Button>
          </div>

          {/* Previous chats section */}
          <Card className="backdrop-blur-sm bg-white/90 border border-violet-100 shadow-lg overflow-hidden">
            <CardHeader className="border-b border-violet-100/50 bg-gradient-to-r from-violet-50 to-fuchsia-50">
              <CardTitle className="text-lg flex items-center gap-2 text-violet-800">
                <MessageCircle className="w-5 h-5 text-violet-600" />
                Tidligere samtaler
              </CardTitle>
              <CardDescription className="text-violet-600/70">
                Tidligere kreative brainstorming-sesjoner
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-violet-100/70">
                {room.previousChats.map(chat => (
                  <div 
                    key={chat.id}
                    className="p-4 hover:bg-gradient-to-r hover:from-violet-50/50 hover:to-fuchsia-50/50 cursor-pointer transition-all duration-300 group"
                    onClick={() => navigate(`/chat-demo`)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-violet-900">{chat.title}</h3>
                        <p className="text-sm text-violet-600/70">{chat.date}</p>
                      </div>
                      <Button
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white border-0 hover:from-violet-600 hover:to-fuchsia-600"
                      >
                        <span>Fortsett</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar with files and instructions */}
        <div className="space-y-6">
          {/* Files card with upload */}
          <Card className="backdrop-blur-sm bg-white/90 border border-violet-100 shadow-lg">
            <CardHeader className="pb-3 border-b border-violet-100/50 bg-gradient-to-r from-violet-50 to-fuchsia-50">
              <CardTitle className="text-lg flex items-center gap-2 text-violet-800">
                <FileText className="w-5 h-5 text-violet-600" />
                Designfiler
              </CardTitle>
              <CardDescription className="text-violet-600/70">
                Inspirasjon og ressurser
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              {/* File list */}
              <ul className="mb-4 space-y-2">
                {room.files.map(file => (
                  <li key={file.id} className="flex items-center justify-between text-sm p-3 rounded-lg bg-violet-50/50 border border-violet-100/50">
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-violet-500" />
                      <span className="text-violet-800">{file.name}</span>
                    </div>
                    <span className="text-violet-500">{file.size}</span>
                  </li>
                ))}
              </ul>

              {/* Upload area */}
              <div 
                className={`border-2 border-dashed rounded-xl p-6 text-center transition-all ${
                  dragActive ? 'border-violet-500 bg-violet-50' : 'border-violet-200'
                }`}
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="w-12 h-12 text-violet-400 mx-auto mb-2" />
                <p className="text-sm text-violet-600 mb-2">
                  Dra og slipp filer her, eller
                </p>
                <label htmlFor="customFileUpload">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-violet-500 to-fuchsia-500 border-0 hover:from-violet-600 hover:to-fuchsia-600"
                  >
                    Velg filer
                  </Button>
                  <input 
                    id="customFileUpload"
                    type="file"
                    multiple
                    accept=".pdf,.txt,.md"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </CardContent>
          </Card>
          
          {/* Room mood board preview */}
          <Card className="backdrop-blur-sm bg-white/90 border border-violet-100 shadow-lg overflow-hidden">
            <CardHeader className="pb-3 border-b border-violet-100/50 bg-gradient-to-r from-violet-50 to-fuchsia-50">
              <CardTitle className="text-lg flex items-center gap-2 text-violet-800">
                <Sparkles className="w-5 h-5 text-violet-600" />
                Mood Board
              </CardTitle>
              <CardDescription className="text-violet-600/70">
                Visuell inspirasjon
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-violet-300 to-fuchsia-300 overflow-hidden"></div>
                <div className="aspect-square rounded-lg bg-gradient-to-br from-amber-300 to-pink-300 overflow-hidden"></div>
                <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-300 to-emerald-300 overflow-hidden"></div>
                <div className="aspect-square rounded-lg bg-gradient-to-br from-rose-300 to-orange-300 overflow-hidden"></div>
              </div>
              <Button className="w-full mt-3 bg-white text-violet-700 border border-violet-200 hover:bg-violet-50">
                Se alle
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Room instructions modal */}
      <Dialog open={instructionsOpen} onOpenChange={setInstructionsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-gradient-to-b from-white to-violet-50 border border-violet-100">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl text-violet-900">
              <BookOpen className="w-5 h-5 text-violet-700" />
              Rominstruksjoner
            </DialogTitle>
            <DialogDescription className="text-violet-700/70">
              Skreddersydde instruksjoner for kreativt arbeid
            </DialogDescription>
          </DialogHeader>
          
          <div className="prose prose-sm mt-4 prose-headings:text-violet-900 prose-p:text-violet-800">
            <pre className="whitespace-pre-wrap text-sm bg-white/80 p-4 rounded-md border border-violet-100 overflow-x-auto text-violet-800">
              {room.instructions}
            </pre>
          </div>
        </DialogContent>
      </Dialog>
    </PageContainer>
  );
};

export default CustomRoomView;
