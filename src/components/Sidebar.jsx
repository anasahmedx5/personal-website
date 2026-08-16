import React from 'react';

export default function Sidebar({ sections, activeSection, setActiveSection }) {
  return (
    <aside className="border-grid fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
      <div className="h-full py-6 pr-4 overflow-auto no-scrollbar lg:py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h4 className="rounded-md px-2 py-1 text-sm font-medium text-muted-foreground">
              Sections
            </h4>
            <div className="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`group relative flex h-8 w-full items-center rounded-lg px-2 text-left transition-colors ${
                      isActive
                        ? 'bg-accent font-medium text-accent-foreground'
                        : 'font-normal text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                    }`}
                  >
                    {section.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
