import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2, ShieldCheck } from 'lucide-react';
import SectionNavigator from '../SectionNavigator';

export default function EducationSection({ portfolio, sections, activeSection, setActiveSection }) {
  const { education, certificates } = portfolio;

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
            Education & Certifications
          </h1>
          <h2 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] mt-2 text-muted-foreground">
            Academic foundations in Artificial Intelligence & Deep Learning.
          </h2>
        </div>
      </section>

      {/* Academic Education */}
      <div className="space-y-6 my-2">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: idx * 0.1 }}
            className="rounded-xl border border-border/60 bg-card p-6 shadow-xs space-y-4 hover:border-border transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-lg text-foreground">
                    {edu.degree}
                  </h3>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {edu.institution} • {edu.location}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-muted/50 px-3 py-1 rounded-full w-fit">
                <Calendar className="h-3.5 w-3.5" />
                <span>{edu.period}</span>
              </div>
            </div>

            <p className="text-sm text-foreground/80 font-light leading-relaxed">
              {edu.details}
            </p>

            {edu.honors && (
              <div className="flex items-center gap-2 text-xs text-amber-500 font-medium bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg w-fit">
                <Award className="h-4 w-4" />
                <span>{edu.honors}</span>
              </div>
            )}

            {/* Coursework */}
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5" />
                Key Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono bg-secondary/80 px-2.5 py-1 rounded text-secondary-foreground"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Courses & Certifications */}
      {certificates && certificates.length > 0 && (
        <div className="mt-4 space-y-4">
          <h3 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Courses & Specialized Certifications
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {certificates.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                className="rounded-xl border border-border/50 bg-card p-5 space-y-2 hover:border-border transition-all"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-bold text-base text-foreground">
                    {cert.title}
                  </h4>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {cert.provider}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {cert.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <SectionNavigator
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </motion.div>
  );
}

