
import React from 'react';
import { User, Settings, Wand, Brain, Sun, Moon, LogOut } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useIsMobile } from '@/hooks/use-mobile';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export const SidebarTestFooter: React.FC = () => {
  const { setTheme, theme } = useTheme();
  const isMobile = useIsMobile();
  
  // On mobile, we'll use a Popover instead of DropdownMenu for better positioning
  if (isMobile) {
    return (
      <div className="bg-sidebar border-t border-sidebar-border p-3 text-sidebar-foreground">
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex items-center gap-3 cursor-pointer hover:bg-sidebar-accent p-2 rounded-lg transition-colors">
              <div className="w-8 h-8 rounded-full bg-primary-muted flex items-center justify-center text-sm font-medium text-primary">
                JD
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">John Doe</p>
                <p className="text-xs text-muted-foreground truncate">john@example.com</p>
              </div>
              <button className="text-muted-foreground hover:text-sidebar-foreground" aria-label="Brukermeny">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 12h.01M8 12h.01M16 12h.01"
                  />
                </svg>
              </button>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-56 z-[200] bg-popover p-1" side="top" align="center" sideOffset={-180}>
            <div className="py-1">
              <div className="px-2 py-1.5 cursor-pointer flex items-center gap-2 hover:bg-accent hover:text-accent-foreground rounded-md" onClick={() => window.location.href = '/profile'}>
                <User className="h-4 w-4" />
                <span>Profil</span>
              </div>
              <div className="px-2 py-1.5 cursor-pointer flex items-center gap-2 hover:bg-accent hover:text-accent-foreground rounded-md" onClick={() => window.location.href = '/settings'}>
                <Settings className="h-4 w-4" />
                <span>Innstillinger</span>
              </div>
              <div className="px-2 py-1.5 cursor-pointer flex items-center gap-2 hover:bg-accent hover:text-accent-foreground rounded-md" onClick={() => window.location.href = '/personalization'}>
                <Wand className="h-4 w-4" />
                <span>Personalisering</span>
              </div>
              <div className="px-2 py-1.5 cursor-pointer flex items-center gap-2 hover:bg-accent hover:text-accent-foreground rounded-md" onClick={() => window.location.href = '/memory'}>
                <Brain className="h-4 w-4" />
                <span>Hukommelse</span>
              </div>
              <div 
                className="px-2 py-1.5 cursor-pointer flex items-center gap-2 hover:bg-accent hover:text-accent-foreground rounded-md"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4" />
                    <span>Dagmodus ☀️</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4" />
                    <span>Nattmodus ☾</span>
                  </>
                )}
              </div>
              <div className="px-2 py-1.5 cursor-pointer flex items-center gap-2 hover:bg-accent hover:text-accent-foreground rounded-md">
                <LogOut className="h-4 w-4" />
                <span>Logg ut</span>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  }
  
  // Desktop version with DropdownMenu
  return (
    <div className="bg-sidebar border-t border-sidebar-border p-3 text-sidebar-foreground">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-3 cursor-pointer hover:bg-sidebar-accent p-2 rounded-lg transition-colors">
            <div className="w-8 h-8 rounded-full bg-primary-muted flex items-center justify-center text-sm font-medium text-primary">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">John Doe</p>
              <p className="text-xs text-muted-foreground truncate">john@example.com</p>
            </div>
            <button className="text-muted-foreground hover:text-sidebar-foreground" aria-label="Brukermeny">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 12h.01M8 12h.01M16 12h.01"
                />
              </svg>
            </button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56 z-[200]" sideOffset={6}>
          <DropdownMenuItem className="cursor-pointer flex items-center gap-2" asChild>
            <Link to="/profile">
              <User className="h-4 w-4" />
              <span>Profil</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer flex items-center gap-2" asChild>
            <Link to="/settings">
              <Settings className="h-4 w-4" />
              <span>Innstillinger</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer flex items-center gap-2" asChild>
            <Link to="/personalization">
              <Wand className="h-4 w-4" />
              <span>Personalisering</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer flex items-center gap-2" asChild>
            <Link to="/memory">
              <Brain className="h-4 w-4" />
              <span>Hukommelse</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="cursor-pointer flex items-center gap-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <>
                <Sun className="h-4 w-4" />
                <span>Dagmodus ☀️</span>
              </>
            ) : (
              <>
                <Moon className="h-4 w-4" />
                <span>Nattmodus ☾</span>
              </>
            )}
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            <span>Logg ut</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
