
import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { useIsMobile } from '@/hooks/use-mobile';
import { PanelLeft, Info, Settings, User, Moon, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Modals = () => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(!isMobile);

  React.useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen w-full flex overflow-hidden bg-backdrop">
      {/* Sidebar component */}
      <div className={`
        ${isMobile ? 'fixed z-50 transition-transform duration-300 ease-in-out' : ''}
        ${(isMobile && !isSidebarOpen) ? '-translate-x-full' : 'translate-x-0'}
      `}>
        {isSidebarOpen && <Sidebar onToggle={toggleSidebar} />}
      </div>
      
      {/* Canvas */}
      <div className="flex-1 md:p-content-md flex items-center justify-center">
        <div className={`
          w-full h-full 
          max-w-canvas 
          bg-canvas 
          md:rounded-lg 
          md:border md:border-canvas-border 
          md:shadow-surface-sm 
          flex flex-col 
          overflow-hidden
        `}>
          {!isSidebarOpen && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 left-4 z-10"
              onClick={toggleSidebar}
            >
              <PanelLeft className="h-5 w-5" />
            </Button>
          )}
          
          <Header 
            title="Modaler" 
            showBackButton={true}
          />
          
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {/* Dropdown Menu */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Dropdown Menu</h2>
              <div className="grid grid-cols-1 gap-6 max-w-xl">
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="flex items-center space-x-2 p-2 rounded-md border border-input bg-background max-w-[200px]">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground text-sm">
                          JD
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">John Doe</p>
                          <p className="text-xs text-muted-foreground truncate">john@example.com</p>
                        </div>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profil</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Moon className="mr-2 h-4 w-4" />
                        <span>Nattmodus</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Logg ut</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <p className="text-sm text-muted-foreground mt-4">
                    Dropdown-menyen vises ved klikk og har normal, hover og aktiv tilstand for hvert element.
                  </p>
                </div>
              </div>
            </section>

            {/* Tooltip */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Tooltip</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                <div className="space-y-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">
                          <Info className="mr-2 h-4 w-4" />
                          Hover over meg
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Dette er et tooltip</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <p className="text-sm text-muted-foreground mt-2">
                    Tooltip vises ved hover og forsvinner når brukeren flytter musen.
                  </p>
                </div>

                <div className="space-y-2">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="link" className="p-0">
                        Hover Card
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">Hover Card</h4>
                          <p className="text-sm">
                            Hover card gir mer informasjon når brukeren holder musen over et element.
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <p className="text-sm text-muted-foreground mt-2">
                    Hover Card er en mer avansert tooltip med mer innhold.
                  </p>
                </div>
              </div>
            </section>

            {/* Dialog */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Dialog</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                <div className="space-y-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Åpne Dialog</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Dialog Tittel</DialogTitle>
                        <DialogDescription>
                          Dette er en beskrivelse av hva dialogen gjør. Du kan legge til mer innhold her.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <p className="text-sm text-muted-foreground">
                          Hovedinnholdet i dialogen kan være et skjema, en bekreftelse eller annen informasjon.
                        </p>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Bekreft</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <p className="text-sm text-muted-foreground mt-2">
                    Dialog er en modal som vises midt på skjermen og krever en handling fra brukeren.
                  </p>
                </div>

                <div className="space-y-2">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive">Slett</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Er du sikker?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Denne handlingen kan ikke angres. Dette vil permanent slette dataene dine.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Avbryt</AlertDialogCancel>
                        <AlertDialogAction>Fortsett</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  <p className="text-sm text-muted-foreground mt-2">
                    Alert Dialog brukes for å bekrefte handlinger som kan ha alvorlige konsekvenser.
                  </p>
                </div>
              </div>
            </section>

            {/* Popover and Sheet */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Popover og Sheet</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                <div className="space-y-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">Vis Popover</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <h4 className="font-medium leading-none">Popover</h4>
                          <p className="text-sm text-muted-foreground">
                            Popover er en liten boks som vises ved siden av et element.
                          </p>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                  <p className="text-sm text-muted-foreground mt-2">
                    Popover er en flytende boks som vises relatert til en trigger-knapp.
                  </p>
                </div>

                <div className="space-y-2">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline">Åpne Sheet</Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Sheet Tittel</SheetTitle>
                        <SheetDescription>
                          Sheet er et panel som glir inn fra siden av skjermen.
                        </SheetDescription>
                      </SheetHeader>
                      <div className="py-4">
                        <p className="text-sm text-muted-foreground">
                          Sheet er nyttig for å vise relatert innhold eller skjemaer uten å forlate gjeldende kontekst.
                        </p>
                      </div>
                    </SheetContent>
                  </Sheet>
                  <p className="text-sm text-muted-foreground mt-2">
                    Sheet er et panel som glir inn fra høyre, venstre, topp eller bunn av skjermen.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
