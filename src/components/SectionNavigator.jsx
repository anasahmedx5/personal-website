import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SectionNavigator({ sections, activeSection, setActiveSection }) {
  const currentIndex = sections.findIndex((s) => s.id === activeSection);
  const prevSection = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  return (
    <div className="flex flex-row items-center justify-between w-full mt-12 pt-6 border-t border-border/40">
      {prevSection ? (
        <button
          onClick={() => setActiveSection(prevSection.id)}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground border border-border/40 px-4 py-2 text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>{prevSection.title}</span>
        </button>
      ) : (
        <div />
      )}

      {nextSection ? (
        <button
          onClick={() => setActiveSection(nextSection.id)}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground border border-border/40 px-4 py-2 text-muted-foreground hover:text-foreground ml-auto"
        >
          <span>{nextSection.title}</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      ) : (
        <div />
      )}
    </div>
  );
}
