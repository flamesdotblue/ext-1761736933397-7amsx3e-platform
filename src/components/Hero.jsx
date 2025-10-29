import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-40">
        <div className="max-w-2xl">
          <p className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400"></span>
            Available for freelance projects
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Crafting bold visual identities and playful brand experiences
          </h1>
          <p className="mt-5 text-white/80 max-w-xl">
            I’m Alex, a graphic designer blending tech and tactility to build modern, interactive visuals across identity, packaging, and digital campaigns.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="pointer-events-auto inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="pointer-events-auto inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              Let’s Collaborate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
