import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, GitCommit, Star, GitPullRequest, Activity, Sparkles } from 'lucide-react';
import SectionNavigator from '../SectionNavigator';

export default function StatsSection({ portfolio, sections, activeSection, setActiveSection }) {
  const { stats } = portfolio;
  const [loveCount, setLoveCount] = useState(stats.profileMetrics.initialLoves);
  const [hasLoved, setHasLoved] = useState(false);

  const handleLove = () => {
    if (!hasLoved) {
      setLoveCount(prev => prev + 1);
      setHasLoved(true);
    } else {
      setLoveCount(prev => prev - 1);
      setHasLoved(false);
    }
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
            Stats & Activity
          </h1>
          <h2 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] mt-2 text-muted-foreground">
            Real-time developer metrics and engagement!
          </h2>
        </div>
      </section>

      {/* Interactive Engagement Banner */}
      <div className="rounded-xl border border-border/60 bg-gradient-to-r from-card via-card to-muted/20 p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-red-500/10 border border-red-500/20 text-red-500">
            <Heart className={`h-6 w-6 ${hasLoved ? 'fill-red-500 animate-pulse' : ''}`} />
          </div>
          <div>
            <h3 className="font-bold text-base text-foreground">
              Show Some Love
            </h3>
            <p className="text-xs text-muted-foreground">
              Click to leave a reaction on Anas's developer portfolio!
            </p>
          </div>
        </div>

        <button
          onClick={handleLove}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
            hasLoved
              ? 'bg-red-500 text-white border-red-500 shadow-md shadow-red-500/20 scale-105'
              : 'bg-card text-foreground border-border hover:border-red-500/50 hover:bg-muted'
          }`}
        >
          <Heart className={`h-4 w-4 ${hasLoved ? 'fill-white' : ''}`} />
          <span>{loveCount} Loves</span>
        </button>
      </div>

      {/* Overview Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-2">
        <div className="rounded-xl border border-border/60 bg-card p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Profile Views</span>
            <Eye className="h-4 w-4 text-sky-400" />
          </div>
          <span className="text-2xl font-bold text-foreground mt-3 font-mono">
            {stats.profileMetrics.initialViews + 47}
          </span>
        </div>

        <div className="rounded-xl border border-border/60 bg-card p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Commits</span>
            <GitCommit className="h-4 w-4 text-emerald-400" />
          </div>
          <span className="text-2xl font-bold text-foreground mt-3 font-mono">
            {stats.githubStats.totalCommits}
          </span>
        </div>

        <div className="rounded-xl border border-border/60 bg-card p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Pull Requests</span>
            <GitPullRequest className="h-4 w-4 text-purple-400" />
          </div>
          <span className="text-2xl font-bold text-foreground mt-3 font-mono">
            {stats.githubStats.totalPRs}
          </span>
        </div>

        <div className="rounded-xl border border-border/60 bg-card p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Stars</span>
            <Star className="h-4 w-4 text-amber-400" />
          </div>
          <span className="text-2xl font-bold text-foreground mt-3 font-mono">
            {stats.githubStats.totalStars}
          </span>
        </div>
      </div>

      {/* Development Activity Distribution */}
      <div className="rounded-xl border border-border/60 bg-card p-6 space-y-4">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <Activity className="h-4 w-4 text-primary" />
          Codebase Activity Breakdown
        </h3>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs mb-1 text-muted-foreground">
              <span>Python, TensorFlow & PyTorch (AI/ML)</span>
              <span className="font-mono">55%</span>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 rounded-full" style={{ width: '55%' }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1 text-muted-foreground">
              <span>Machine Learning & Stacking Pipelines (Scikit-Learn, LightGBM)</span>
              <span className="font-mono">25%</span>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '25%' }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1 text-muted-foreground">
              <span>Streamlit, Flask & Web Tools</span>
              <span className="font-mono">12%</span>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-sky-500 rounded-full" style={{ width: '12%' }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1 text-muted-foreground">
              <span>SQL & Industrial Data Infrastructure</span>
              <span className="font-mono">8%</span>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: '8%' }} />
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
