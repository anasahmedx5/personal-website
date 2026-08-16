import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Code, Cpu, ShieldCheck, Terminal } from 'lucide-react';
import SectionNavigator from '../SectionNavigator';

export default function AboutSection({ portfolio, sections, activeSection, setActiveSection }) {
  const { about, personal } = portfolio;

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
            About Me
          </h1>
          <h2 className="text-xl font-semibold leading-tight tracking-tighter sm:text-2xl text-muted-foreground mt-1">
            Driven by curiosity, focused on execution.
          </h2>
        </div>
      </section>

      {/* Bio Paragraphs */}
      <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
        {about.bio.map((paragraph, index) => (
          <p key={index} className="text-foreground/90 font-light">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Key Focus Areas */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4">
          Core Pillars & Principles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex gap-3 p-4 rounded-xl border border-border/50 bg-card">
            <Cpu className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-foreground">Deep Learning & CNNs</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Fine-tuning convolutional architectures like MobileNetV2, applying data augmentation, and regularizing networks.
              </p>
            </div>
          </div>

          <div className="flex gap-3 p-4 rounded-xl border border-border/50 bg-card">
            <Code className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-foreground">Speech & Multimodal AI</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Combining Whisper Small, OpenCV, GOP, and Groq LLM API for real-time speech and computer vision systems.
              </p>
            </div>
          </div>

          <div className="flex gap-3 p-4 rounded-xl border border-border/50 bg-card">
            <Terminal className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-foreground">Ensemble Stacking Pipelines</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Designing multi-layer gradient boosting pipelines (LightGBM, XGBoost, CatBoost) with custom feature engineering.
              </p>
            </div>
          </div>

          <div className="flex gap-3 p-4 rounded-xl border border-border/50 bg-card">
            <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-foreground">Interactive AI Deployment</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Packaging machine learning models into interactive Streamlit and Flask applications for real-time inference.
              </p>
            </div>
          </div>
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
