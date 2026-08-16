import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Folder, User, Wrench, Briefcase, GraduationCap, Mail, BarChart2, ExternalLink, ArrowRight } from 'lucide-react';

export default function CommandPalette({ isOpen, onClose, sections, setActiveSection, portfolio }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredSections = sections.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase())
  );

  const getSectionIcon = (id) => {
    switch (id) {
      case 'introduction': return <User className="h-4 w-4" />;
      case 'about': return <User className="h-4 w-4" />;
      case 'projects': return <Folder className="h-4 w-4" />;
      case 'skills-tools': return <Wrench className="h-4 w-4" />;
      case 'experience': return <Briefcase className="h-4 w-4" />;
      case 'education': return <GraduationCap className="h-4 w-4" />;
      case 'contact': return <Mail className="h-4 w-4" />;
      case 'stats': return <BarChart2 className="h-4 w-4" />;
      default: return <ArrowRight className="h-4 w-4" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm"
        />

        {/* Command Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.15 }}
          className="relative w-full max-w-lg overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-2xl z-10"
        >
          {/* Input Header */}
          <div className="flex items-center border-b border-border px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sections or links..."
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              autoFocus
            />
            <button
              onClick={onClose}
              className="rounded p-1 text-muted-foreground hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-[300px] overflow-y-auto p-2">
            <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
              Navigation Sections
            </div>
            {filteredSections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => {
                  setActiveSection(sec.id);
                  onClose();
                }}
                className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground text-left transition-colors"
              >
                {getSectionIcon(sec.id)}
                <span>{sec.title}</span>
                <span className="ml-auto text-xs text-muted-foreground font-mono">
                  Jump to section
                </span>
              </button>
            ))}

            <div className="mt-2 px-2 py-1.5 text-xs font-semibold text-muted-foreground border-t border-border/50">
              External Links
            </div>

            <a
              href={portfolio.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground text-left transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>GitHub Profile</span>
              <span className="ml-auto text-xs text-muted-foreground">External</span>
            </a>

            <a
              href={portfolio.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground text-left transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>LinkedIn Profile</span>
              <span className="ml-auto text-xs text-muted-foreground">External</span>
            </a>
          </div>

          {/* Dialog Footer */}
          <div className="flex items-center justify-between border-t border-border px-3 py-2 text-xs text-muted-foreground bg-muted/30">
            <span>
              Press <kbd className="rounded border px-1 font-mono">ESC</kbd> to close
            </span>
            <span>{portfolio.personal.handle}</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
