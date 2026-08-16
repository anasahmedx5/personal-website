import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, CheckCircle2 } from 'lucide-react';
import SectionNavigator from '../SectionNavigator';

export default function SkillsSection({ portfolio, sections, activeSection, setActiveSection }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { skills } = portfolio;

  const categories = ['All', 'Languages', 'AI / Machine Learning', 'Data & Processing', 'Backend', 'DevOps & Tools', 'Concepts'];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

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
            Skills & Tools
          </h1>
          <h2 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] mt-2 text-muted-foreground">
            Machine Learning, Deep Neural Networks, and Data Science.
          </h2>
          <p className="w-full text-left text-base font-light text-foreground sm:text-lg mt-3 leading-relaxed max-w-3xl">
            As an Aspiring Machine Learning Engineer, I specialize in building deep learning models, feature engineering pipelines, heterogeneous ensemble stacking, and interactive ML applications.
          </p>
        </div>
      </section>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 my-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all border ${
              selectedCategory === cat
                ? 'bg-foreground text-background border-foreground shadow-xs'
                : 'bg-muted/40 text-muted-foreground border-border/50 hover:bg-muted hover:text-foreground'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Badges Grid */}
      <div id="badges" className="flex flex-wrap items-center justify-start gap-2.5 my-4">
        {filteredSkills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: idx * 0.02 }}
            className="inline-flex items-center justify-center rounded-lg text-xs font-medium shrink-0 px-3.5 py-2 border border-border/60 bg-card text-foreground shadow-xs hover:border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          >
            <span
              className="mr-2 inline-block size-2 rounded-full"
              style={{ backgroundColor: skill.fill || '#61DAFB' }}
            />
            <span>{skill.name}</span>
            <span className="ml-2 text-[10px] text-muted-foreground font-mono">
              {skill.level}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Categorized Tech Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="rounded-xl border border-border/50 bg-card p-5">
          <h3 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            AI & Model Engineering Focus
          </h3>
          <ul className="text-xs text-muted-foreground space-y-2 leading-relaxed">
            <li>• Deep learning architectures (CNNs, MobileNetV2, Sequence Models GRU/LSTM) in TensorFlow & Keras.</li>
            <li>• Heterogeneous ensemble stacking with LightGBM, XGBoost, CatBoost, and Ridge meta-models.</li>
            <li>• Feature engineering pipelines including color deltas, redshift scaling, and data augmentation.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-border/50 bg-card p-5">
          <h3 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
            <Wrench className="h-4 w-4 text-sky-500" />
            Deployment & Tooling
          </h3>
          <ul className="text-xs text-muted-foreground space-y-2 leading-relaxed">
            <li>• Interactive model deployments via Streamlit and Flask applications with real-time confidence scoring.</li>
            <li>• Speech processing and computer vision integration (Whisper Small, MFA, GOP, OpenCV).</li>
            <li>• Data analysis & visualization workflows using Pandas, NumPy, and Matplotlib in Linux/VS Code.</li>
          </ul>
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
