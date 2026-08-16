import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, FolderGit2, Star, Users, Activity, GitFork, ExternalLink, Code2 } from 'lucide-react';
import SectionNavigator from '../SectionNavigator';

export default function StatsSection({ portfolio, sections, activeSection, setActiveSection }) {
  const { stats } = portfolio;
  const [loveCount, setLoveCount] = useState(stats.profileMetrics.initialLoves);
  const [hasLoved, setHasLoved] = useState(false);

  const [githubMetrics, setGithubMetrics] = useState({
    publicRepos: stats.githubStats.publicRepos || 15,
    followers: stats.githubStats.followers || 8,
    totalStars: stats.githubStats.totalStars || 0,
    totalForks: stats.githubStats.totalForks || 0,
    topLanguages: [],
    isLoading: true,
  });

  useEffect(() => {
    let isMounted = true;
    async function fetchGitHubData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch('https://api.github.com/users/anasahmedx5'),
          fetch('https://api.github.com/users/anasahmedx5/repos?per_page=100')
        ]);

        if (userRes.ok && reposRes.ok) {
          const userData = await userRes.json();
          const reposData = await reposRes.json();

          if (Array.isArray(reposData)) {
            const stars = reposData.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
            const forks = reposData.reduce((acc, r) => acc + (r.forks_count || 0), 0);

            // Compute language breakdown
            const langCounts = {};
            reposData.forEach(r => {
              if (r.language) {
                langCounts[r.language] = (langCounts[r.language] || 0) + 1;
              }
            });

            const totalLangRepos = Object.values(langCounts).reduce((a, b) => a + b, 0) || 1;
            const topLangs = Object.entries(langCounts)
              .map(([lang, count]) => ({
                name: lang,
                percentage: Math.round((count / totalLangRepos) * 100),
              }))
              .sort((a, b) => b.percentage - a.percentage);

            if (isMounted) {
              setGithubMetrics({
                publicRepos: userData.public_repos ?? 15,
                followers: userData.followers ?? 8,
                totalStars: stars,
                totalForks: forks,
                topLanguages: topLangs,
                isLoading: false,
              });
            }
          }
        }
      } catch (err) {
        console.error('Failed to fetch live GitHub stats:', err);
        if (isMounted) {
          setGithubMetrics(prev => ({ ...prev, isLoading: false }));
        }
      }
    }

    fetchGitHubData();
    return () => { isMounted = false; };
  }, []);

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
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] text-foreground">
              Stats & Activity
            </h1>
            <a
              href="https://github.com/anasahmedx5"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors font-mono"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Live GitHub API</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <h2 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] mt-2 text-muted-foreground">
            Real-time developer metrics fetched directly from GitHub!
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

      {/* Live GitHub Overview Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-2">
        <div className="rounded-xl border border-border/60 bg-card p-4 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Public Repos</span>
            <FolderGit2 className="h-4 w-4 text-sky-400" />
          </div>
          <span className="text-2xl font-bold text-foreground mt-3 font-mono">
            {githubMetrics.publicRepos}
          </span>
        </div>

        <div className="rounded-xl border border-border/60 bg-card p-4 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Followers</span>
            <Users className="h-4 w-4 text-emerald-400" />
          </div>
          <span className="text-2xl font-bold text-foreground mt-3 font-mono">
            {githubMetrics.followers}
          </span>
        </div>

        <div className="rounded-xl border border-border/60 bg-card p-4 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Stars</span>
            <Star className="h-4 w-4 text-amber-400" />
          </div>
          <span className="text-2xl font-bold text-foreground mt-3 font-mono">
            {githubMetrics.totalStars}
          </span>
        </div>

        <div className="rounded-xl border border-border/60 bg-card p-4 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Forks</span>
            <GitFork className="h-4 w-4 text-purple-400" />
          </div>
          <span className="text-2xl font-bold text-foreground mt-3 font-mono">
            {githubMetrics.totalForks}
          </span>
        </div>
      </div>

      {/* Development Activity & Language Breakdown */}
      <div className="rounded-xl border border-border/60 bg-card p-6 space-y-4">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <Activity className="h-4 w-4 text-primary" />
          GitHub Repository Language Breakdown
        </h3>

        {githubMetrics.topLanguages.length > 0 ? (
          <div className="space-y-3">
            {githubMetrics.topLanguages.map((lang, i) => {
              const colors = ['bg-amber-500', 'bg-emerald-500', 'bg-sky-500', 'bg-purple-500', 'bg-rose-500'];
              const color = colors[i % colors.length];
              return (
                <div key={lang.name}>
                  <div className="flex justify-between text-xs mb-1 text-muted-foreground">
                    <span className="font-medium text-foreground">{lang.name}</span>
                    <span className="font-mono">{lang.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className={`h-full ${color} rounded-full transition-all duration-500`} style={{ width: `${lang.percentage}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1 text-muted-foreground">
                <span>Python & TensorFlow (AI/ML)</span>
                <span className="font-mono">55%</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '55%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1 text-muted-foreground">
                <span>Jupyter Notebook (Machine Learning)</span>
                <span className="font-mono">25%</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '25%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1 text-muted-foreground">
                <span>JavaScript & React Web Tools</span>
                <span className="font-mono">12%</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-sky-500 rounded-full" style={{ width: '12%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1 text-muted-foreground">
                <span>C & System Computing</span>
                <span className="font-mono">8%</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '8%' }} />
              </div>
            </div>
          </div>
        )}
      </div>

      <SectionNavigator
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </motion.div>
  );
}
