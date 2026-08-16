import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Search, 
  Sun, 
  Moon, 
  Menu,
  Command
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import AudioPlayer from './AudioPlayer';

export default function Header({ 
  portfolio, 
  activeSection, 
  setActiveSection, 
  darkMode, 
  setDarkMode, 
  onOpenCommandPalette,
  onOpenMobileDrawer,
  isPlayingAudio,
  setIsPlayingAudio
}) {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTimeString(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-13 items-center px-4 md:px-6">
          
          {/* Brand Logo & Desktop Main Nav */}
          <div className="mr-4 hidden md:flex items-center">
            <button 
              onClick={() => setActiveSection('introduction')}
              className="mr-6 flex items-center gap-2.5 font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-5 w-5"
              >
                <path d="M13 5H19V11" />
                <path d="M19 5L5 19" />
              </svg>
              <span className="hidden font-semibold tracking-tight lg:inline-block">
                {portfolio.personal.handle}
              </span>
            </button>

            <nav className="flex items-center gap-6 text-sm">
              <button
                onClick={() => setActiveSection('introduction')}
                className={`transition-colors font-medium ${
                  activeSection === 'introduction'
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Home
              </button>

              <a
                href={portfolio.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                LinkedIn
                <ExternalLink className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href={portfolio.personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                Resume
                <ExternalLink className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </nav>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={onOpenMobileDrawer}
            className="inline-flex items-center justify-center size-9 h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted md:hidden text-foreground"
            aria-label="Open Navigation Menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Right Header Action Items */}
          <div className="ml-auto flex items-center gap-2 md:gap-3">
            
            {/* Search / Command Palette Button */}
            <div className="hidden md:block">
              <button
                onClick={onOpenCommandPalette}
                className="inline-flex items-center gap-2 whitespace-nowrap transition-all border hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64"
              >
                <Search className="h-3.5 w-3.5 mr-1" />
                <span className="hidden lg:inline-flex">Search sections...</span>
                <span className="inline-flex lg:hidden">Search...</span>
                <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </button>
            </div>

            {/* Live Clock & Status Badge */}
            <div className="hidden items-center gap-2 rounded-full border border-border/40 bg-muted/30 px-3 py-1.5 backdrop-blur-sm lg:flex">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </div>
              <span className="text-xs font-medium tabular-nums tracking-tight text-foreground font-mono">
                {timeString || '10:42:44'}
              </span>
            </div>

            {/* Header Controls (Audio, Theme, GitHub) */}
            <div className="flex items-center gap-1">
              <AudioPlayer 
                isPlaying={isPlayingAudio} 
                onToggle={() => setIsPlayingAudio(!isPlayingAudio)} 
              />

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="inline-flex items-center justify-center size-9 h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted text-muted-foreground hover:text-foreground"
                title="Toggle Light/Dark Theme"
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <Sun className="h-[18px] w-[18px]" />
                ) : (
                  <Moon className="h-[18px] w-[18px]" />
                )}
              </button>

              <a
                href={portfolio.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center size-9 h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted text-muted-foreground hover:text-foreground"
                title="GitHub Repository"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-[18px] w-[18px]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}
