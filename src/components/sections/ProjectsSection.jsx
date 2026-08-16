import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Code2, Tag } from 'lucide-react';
import { GithubIcon } from '../BrandIcons';
import SectionNavigator from '../SectionNavigator';

export default function ProjectsSection({ portfolio, sections, activeSection, setActiveSection }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const { projects } = portfolio;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-6"
    >
      <section className="mb-4">
        <div className="flex flex-col items-start gap-1 py-0">
          <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] text-foreground">
            Projects
          </h1>
          <h2 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] mt-2 text-muted-foreground">
            A lot of ideas, and continuous innovation!
          </h2>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: idx * 0.05 }}
            onClick={() => setSelectedProject(project)}
            className="group relative flex flex-col justify-between rounded-xl border border-border/60 bg-card p-6 shadow-xs hover:border-border transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-md"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono tracking-wider text-muted-foreground uppercase bg-muted/60 px-2 py-0.5 rounded">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="text-[10px] font-medium text-amber-500 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="font-semibold text-lg leading-snug text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/40 flex flex-col gap-3">
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] text-muted-foreground bg-secondary/80 px-2 py-0.5 rounded font-mono"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-[10px] text-muted-foreground bg-secondary/40 px-1.5 py-0.5 rounded font-mono">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              <div className="flex items-center text-xs font-medium text-muted-foreground group-hover:text-foreground pt-1">
                <span>View details</span>
                <span className="ml-auto transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-xl overflow-hidden rounded-xl border border-border bg-card p-6 shadow-2xl z-10 space-y-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-muted-foreground uppercase">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-0.5">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {selectedProject.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="text-sm text-foreground/90 leading-relaxed font-light">
                {selectedProject.fullDescription || selectedProject.description}
              </p>

              <div>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono bg-secondary px-2.5 py-1 rounded text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium bg-secondary text-secondary-foreground px-3.5 py-2 rounded-md hover:bg-secondary/80 transition-colors"
                  >
                    <GithubIcon className="h-4 w-4" />
                    GitHub Repo
                  </a>
                )}

                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium bg-primary text-primary-foreground px-3.5 py-2 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <SectionNavigator
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </motion.div>
  );
}
