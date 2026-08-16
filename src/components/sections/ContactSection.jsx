import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../BrandIcons';
import SectionNavigator from '../SectionNavigator';

export default function ContactSection({ portfolio, sections, activeSection, setActiveSection }) {
  const { personal, socialLinks } = portfolio;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

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
            Contact
          </h1>
          <h2 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] mt-2 text-muted-foreground">
            Let's connect and build something together!
          </h2>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
        {/* Contact Info Card */}
        <div className="rounded-xl border border-border/60 bg-card p-6 shadow-xs flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">
              Get in Touch
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Whether you have a project idea, open role, collaboration query, or just want to talk about software engineering, my inbox is always open.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-xs text-foreground/90 hover:text-primary transition-colors p-2.5 rounded-lg border border-border/40 bg-muted/20"
              >
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>{personal.email}</span>
              </a>

              <div className="flex items-center gap-3 text-xs text-muted-foreground p-2.5 rounded-lg border border-border/40 bg-muted/20">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border/40">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-3">
              Social Profiles
            </span>
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-medium bg-secondary text-secondary-foreground px-3 py-2 rounded-md hover:bg-secondary/80 transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-medium bg-secondary text-secondary-foreground px-3 py-2 rounded-md hover:bg-secondary/80 transition-colors"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-xl border border-border/60 bg-card p-6 shadow-xs">
          <h3 className="text-lg font-bold text-foreground mb-4">
            Send a Message
          </h3>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 space-y-3 text-center">
              <CheckCircle2 className="h-10 w-10 text-emerald-500 animate-bounce" />
              <h4 className="text-base font-semibold text-foreground">Message Sent!</h4>
              <p className="text-xs text-muted-foreground">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Anas Ahmed"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-ring focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-ring focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Anas, I'd like to talk about..."
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-ring focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-medium transition-all bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 rounded-md"
              >
                <Send className="h-3.5 w-3.5" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <SectionNavigator
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </motion.div>
  );
}
