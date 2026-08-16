import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, ArrowRight } from 'lucide-react';
import SectionNavigator from '../SectionNavigator';

export default function IntroductionSection({ portfolio, sections, activeSection, setActiveSection }) {
  const { personal } = portfolio;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-6"
    >
      <section className="space-y-4">
        <div className="flex flex-col items-start gap-1 py-0">
          <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] text-foreground">
            {personal.name}
          </h1>

          <h2 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] mt-2 text-muted-foreground">
            {personal.subtitle}
          </h2>

          <p className="w-full text-left text-base font-light text-foreground sm:text-lg mt-4 leading-relaxed max-w-3xl">
            {personal.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap w-full items-center justify-start gap-3 my-6 pt-2">
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Anas_Ahmed_Resume.pdf"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 gap-2 px-4 rounded-md"
            >
              Get Resume
              <ExternalLink className="size-3.5" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all border border-border hover:bg-accent hover:text-accent-foreground h-9 gap-2 px-4 rounded-md text-foreground"
            >
              <Mail className="size-4" />
              Send Mail
            </a>
          </div>
        </div>
      </section>

      {/* Highlights summary grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {portfolio.about.highlights.map((h, i) => (
          <div
            key={i}
            className="rounded-xl border border-border/60 bg-card p-5 shadow-xs hover:border-border transition-colors"
          >
            <h3 className="font-semibold text-foreground text-sm mb-1">{h.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{h.description}</p>
          </div>
        ))}
      </div>

      <SectionNavigator
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </motion.div>
  );
}
