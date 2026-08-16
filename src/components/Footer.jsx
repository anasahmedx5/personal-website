import React from 'react';

export default function Footer({ portfolio }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex flex-col items-center justify-center py-2 space-y-2 px-4 text-center">
          <div className="max-w-3xl text-xs leading-relaxed sm:text-sm text-balance text-muted-foreground">
            <span className="block sm:inline">©{currentYear}</span>
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline">
              Built with <span className="font-medium text-foreground">React</span>,{' '}
              <span className="font-medium text-foreground">Vite</span>,{' '}
              <span className="font-medium text-foreground">Tailwind CSS</span> and{' '}
              <span className="font-medium text-foreground">Framer Motion</span>
            </span>
          </div>

          <div className="text-xs sm:text-sm text-muted-foreground">
            Developed by{' '}
            <a
              href={portfolio.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium transition-colors text-foreground hover:text-primary underline underline-offset-4"
            >
              {portfolio.personal.name}
            </a>
            {' '}· All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
