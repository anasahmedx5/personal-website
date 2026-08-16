import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react';
import SectionNavigator from '../SectionNavigator';

export default function ExperienceSection({ portfolio, sections, activeSection, setActiveSection }) {
  const { experience } = portfolio;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-6"
    >
      <section className="mb-2">
        <div className="flex flex-col items-start gap-1 py-0">
          <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] text-foreground">
            Experience
          </h1>
          <h2 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] mt-2 text-muted-foreground">
            Building software solutions in professional environments!
          </h2>
        </div>
      </section>

      {/* Timeline Container */}
      <div className="relative border-l border-border/60 pl-6 ml-3 space-y-8 my-4">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] top-1.5 size-3.5 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors" />

            <div className="rounded-xl border border-border/60 bg-card p-6 shadow-xs space-y-3 hover:border-border transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-foreground">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mt-1">
                    <span className="flex items-center gap-1 font-medium text-foreground/90">
                      <Building className="h-3.5 w-3.5" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-muted/50 px-3 py-1 rounded-full w-fit">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-sm text-foreground/80 font-light leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-1.5 pt-2">
                {exp.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
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
