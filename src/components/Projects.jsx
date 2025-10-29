import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Flux — Brand Identity',
    desc: 'A vibrant identity for a creative tech conference with modular shapes and kinetic type.',
    tags: ['Branding', 'Typography', '3D'],
    href: '#',
    gradient: 'from-fuchsia-500 via-purple-500 to-cyan-400',
  },
  {
    title: 'Echo Studio — Packaging',
    desc: 'Eco-forward packaging system with bold grid aesthetics and high-contrast palettes.',
    tags: ['Packaging', 'Sustainability'],
    href: '#',
    gradient: 'from-emerald-400 via-teal-400 to-cyan-300',
  },
  {
    title: 'Pulse App — Campaign',
    desc: 'Motion-driven launch visuals translating health metrics into playful geometry.',
    tags: ['Campaign', 'Motion', 'Art Direction'],
    href: '#',
    gradient: 'from-rose-500 via-orange-400 to-yellow-300',
  },
  {
    title: 'Mono Goods — Editorial',
    desc: 'Minimal editorial layouts that celebrate white space and typographic rhythm.',
    tags: ['Editorial', 'Print'],
    href: '#',
    gradient: 'from-slate-300 via-zinc-200 to-white',
  },
  {
    title: 'Orbit — Poster Series',
    desc: 'Generative poster series exploring orbits, noise, and chromatic aberrations.',
    tags: ['Poster', 'Generative'],
    href: '#',
    gradient: 'from-indigo-400 via-sky-400 to-cyan-400',
  },
  {
    title: 'Kindred — Identity Refresh',
    desc: 'Warm, human brand system with playful icons and tactile textures.',
    tags: ['Rebrand', 'Illustration'],
    href: '#',
    gradient: 'from-amber-300 via-pink-300 to-rose-400',
  },
];

function Projects() {
  return (
    <section id="work" className="relative py-20 md:py-28 bg-gradient-to-b from-black to-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_60%_at_50%_0%,rgba(168,85,247,0.10)_0%,rgba(0,0,0,0)_70%)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Selected Work</h2>
            <p className="mt-2 text-white/70 max-w-2xl">A mix of identity, packaging, editorial and campaign work designed for impact and play.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/10">
            Start a project
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.href}
              className="group relative rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition-colors"
            >
              <div className={`h-44 sm:h-48 md:h-56 bg-gradient-to-br ${p.gradient}`}></div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-medium leading-tight">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 mt-1 text-white/50 group-hover:text-white/80 transition-colors" />
                </div>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="text-[11px] tracking-wide uppercase rounded-full border border-white/10 bg-black/40 px-2 py-1 text-white/60">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/60 to-transparent"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
