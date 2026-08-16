import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MobileDrawer from './components/MobileDrawer';
import CommandPalette from './components/CommandPalette';
import Footer from './components/Footer';

// Section Views
import IntroductionSection from './components/sections/IntroductionSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import EducationSection from './components/sections/EducationSection';
import ContactSection from './components/sections/ContactSection';
import StatsSection from './components/sections/StatsSection';

import { portfolioData } from './data/portfolio';

export default function App() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [darkMode, setDarkMode] = useState(true);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Sync dark mode class on HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Scroll to top when section changes
  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentSection = () => {
    const props = {
      portfolio: portfolioData,
      sections: portfolioData.sections,
      activeSection,
      setActiveSection: handleSectionChange,
    };

    switch (activeSection) {
      case 'introduction':
        return <IntroductionSection {...props} />;
      case 'about':
        return <AboutSection {...props} />;
      case 'projects':
        return <ProjectsSection {...props} />;
      case 'skills-tools':
        return <SkillsSection {...props} />;
      case 'experience':
        return <ExperienceSection {...props} />;
      case 'education':
        return <EducationSection {...props} />;
      case 'contact':
        return <ContactSection {...props} />;
      case 'stats':
        return <StatsSection {...props} />;
      default:
        return <IntroductionSection {...props} />;
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-background text-foreground transition-colors duration-200">
      <div className="flex flex-col flex-1 border-grid">
        
        {/* Sticky Header */}
        <Header
          portfolio={portfolioData}
          activeSection={activeSection}
          setActiveSection={handleSectionChange}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
          onOpenMobileDrawer={() => setMobileDrawerOpen(true)}
          isPlayingAudio={isPlayingAudio}
          setIsPlayingAudio={setIsPlayingAudio}
        />

        {/* Main Content Layout */}
        <main className="flex flex-col flex-1">
          <div className="container-wrapper">
            <div className="container flex-1 items-start px-4 md:px-6 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
              
              {/* Desktop Left Sidebar */}
              <Sidebar
                sections={portfolioData.sections}
                activeSection={activeSection}
                setActiveSection={handleSectionChange}
              />

              {/* Main Content Section */}
              <div className="flex flex-col flex-1 py-6 md:py-8 min-w-0">
                {renderCurrentSection()}
              </div>

            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer portfolio={portfolioData} />

      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        sections={portfolioData.sections}
        activeSection={activeSection}
        setActiveSection={handleSectionChange}
        portfolio={portfolioData}
      />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        sections={portfolioData.sections}
        setActiveSection={handleSectionChange}
        portfolio={portfolioData}
      />
    </div>
  );
}
