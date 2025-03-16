
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageContainer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { FileText, Upload, BookOpen, MessageCircle, Info, ArrowRight } from 'lucide-react';

const RoomView = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();
  const [instructionsOpen, setInstructionsOpen] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  // Mock data for the room
  const room = {
    id: roomId || '1',
    name: 'AI Research Project',
    description: 'Personal research space for exploring LLM capabilities and limitations',
    instructions: `# Room AI Instructions

This room is configured to assist with AI research. The assistant will:

1. Provide detailed technical explanations of AI concepts
2. Help analyze research papers and extract key insights
3. Suggest relevant academic resources and citations
4. Assist with code implementation of AI algorithms
5. Present balanced perspectives on AI capabilities and limitations

The assistant will NOT:
- Write complete academic papers or assignments
- Make definitive claims about unproven AI capabilities
- Provide access to proprietary models or data
- Conduct literature reviews without sufficient context

For best results, provide specific questions and context about your research focus.`,
    previousChats: [
      { id: '1', title: 'LLM attention mechanisms', date: '2 dager siden' },
      { id: '2', title: 'Transformer architecture comparison', date: '4 dager siden' },
      { id: '3', title: 'Fine-tuning approaches', date: '1 uke siden' },
      { id: '4', title: 'Prompt engineering best practices', date: '1 uke siden' },
      { id: '5', title: 'RLHF implementation details', date: '2 uker siden' }
    ],
    files: [
      { id: '1', name: 'research-notes.pdf', type: 'pdf', size: '2.4 MB' },
      { id: '2', name: 'model-comparison.txt', type: 'txt', size: '45 KB' },
      { id: '3', name: 'literature-review.md', type: 'md', size: '128 KB' }
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
      // Handle the files
      console.log(e.dataTransfer.files);
      // Here you would normally upload the files to your backend
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Handle the files
      console.log(e.target.files);
      // Here you would normally upload the files to your backend
    }
  };

  // Start a new chat
  const handleStartNewChat = () => {
    // In a real app, this would navigate to a chat page with the room context
    console.log('Starting new chat in room:', roomId);
  };

  return (
    <PageContainer title={room.name} showBackButton={true}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content area - takes 2/3 of the screen on large displays */}
        <div className="lg:col-span-2 space-y-6">
          {/* Room description */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">{room.name}</h1>
              <p className="text-muted-foreground">{room.description}</p>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2"
                onClick={() => setInstructionsOpen(true)}
              >
                <Info className="w-4 h-4" />
                <span className="whitespace-nowrap">Instruksjoner</span>
              </Button>
              <Button 
                size="sm" 
                className="flex items-center gap-2"
                onClick={handleStartNewChat}
              >
                <MessageCircle className="w-4 h-4" />
                <span className="whitespace-nowrap">Ny samtale</span>
              </Button>
            </div>
          </div>

          {/* Previous chats section */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-muted-foreground" />
                Tidligere samtaler
              </CardTitle>
              <CardDescription>
                Fortsett en tidligere samtale eller start en ny
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {room.previousChats.map(chat => (
                  <div 
                    key={chat.id}
                    className="flex items-center justify-between p-3 rounded-md hover:bg-muted cursor-pointer group transition-colors"
                    onClick={() => navigate(`/chat-demo`)}
                  >
                    <div className="flex-1">
                      <h3 className="font-medium">{chat.title}</h3>
                      <p className="text-sm text-muted-foreground">{chat.date}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar with files and instructions - takes 1/3 of the screen */}
        <div className="space-y-6">
          {/* Files card with upload */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="w-5 h-5 text-muted-foreground" />
                Romfiler
              </CardTitle>
              <CardDescription>
                Last opp PDF, TXT eller MD filer
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* File list */}
              <ul className="mb-4 space-y-2">
                {room.files.map(file => (
                  <li key={file.id} className="flex items-center justify-between text-sm p-2 rounded bg-muted/50">
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span>{file.name}</span>
                    </div>
                    <span className="text-muted-foreground">{file.size}</span>
                  </li>
                ))}
              </ul>

              {/* Upload area */}
              <div 
                className={`border-2 border-dashed rounded-md p-6 text-center ${
                  dragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/20'
                }`}
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-2">
                  Dra og slipp filer her, eller
                </p>
                <label htmlFor="fileUpload">
                  <Button size="sm" variant="outline">
                    Velg filer
                  </Button>
                  <input 
                    id="fileUpload"
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
          
          {/* Room activity overview */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-muted-foreground" />
                Romoversikt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium">Samtaler</p>
                  <p className="text-2xl font-bold">{room.previousChats.length}</p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm font-medium">Filer</p>
                  <p className="text-2xl font-bold">{room.files.length}</p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm font-medium">Sist aktiv</p>
                  <p className="text-sm">2 dager siden</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Room instructions modal */}
      <Dialog open={instructionsOpen} onOpenChange={setInstructionsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <BookOpen className="w-5 h-5" />
              Rominstruksjoner
            </DialogTitle>
            <DialogDescription>
              Disse instruksjonene styrer hvordan AI-assistenten skal oppføre seg i dette rommet
            </DialogDescription>
          </DialogHeader>
          
          <div className="prose prose-sm mt-4">
            <pre className="whitespace-pre-wrap text-sm bg-muted p-4 rounded-md overflow-x-auto">
              {room.instructions}
            </pre>
          </div>
        </DialogContent>
      </Dialog>
    </PageContainer>
  );
};

export default RoomView;
