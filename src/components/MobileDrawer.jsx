import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function MobileDrawer({ 
  isOpen, 
  onClose, 
  sections, 
  activeSection, 
  setActiveSection, 
  portfolio 
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden"
          />

          {/* Drawer Sheet */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed inset-y-0 left-0 z-50 w-3/4 max-w-xs border-r border-border bg-background p-6 shadow-xl md:hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <span className="font-semibold text-lg tracking-tight">
                  {portfolio.personal.handle}
                </span>
                <button
                  onClick={onClose}
                  className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="py-4 flex flex-col gap-1">
                <span className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Sections
                </span>
                {sections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => {
                        setActiveSection(sec.id);
                        onClose();
                      }}
                      className={`flex h-10 w-full items-center rounded-lg px-3 text-sm transition-colors text-left ${
                        isActive
                          ? 'bg-accent font-medium text-accent-foreground'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      {sec.title}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <span className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Connect
              </span>
              <div className="flex items-center gap-3 px-2">
                <a
                  href={portfolio.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-md bg-muted text-muted-foreground hover:text-foreground"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={portfolio.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-md bg-muted text-muted-foreground hover:text-foreground"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <a
                  href={portfolio.socialLinks.email}
                  className="p-2 rounded-md bg-muted text-muted-foreground hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
