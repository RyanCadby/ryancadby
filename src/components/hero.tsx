import Link from "next/link";
import { ThreeBackground } from "./three-background";
import { BlurReveal } from "./blur-reveal";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Three.js point cloud background */}
      <ThreeBackground />

      {/* Blur layer with cursor-following reveal */}
      <BlurReveal />

      {/* UI content layer */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8 pointer-events-none md:px-16 lg:px-20">
        <div className="text-center">
          <h1 className="animate-fade-in-blur-delay-1 font-display text-5xl font-normal uppercase leading-[0.85] tracking-tight text-text sm:text-6xl md:text-7xl lg:text-[7rem]">
            Creative
            <br />
            Developer
          </h1>
          <p className="animate-fade-in-blur-delay-2 mt-8 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Crafting digital experiences with precision
          </p>
          <div className="animate-fade-in-blur-delay-3 mt-12 flex justify-center gap-6 pointer-events-auto">
            <Link
              href="/archive"
              className="font-mono text-xs font-bold uppercase tracking-widest bg-accent px-10 py-5 text-white transition-all duration-400 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(230,126,34,0.4)]"
            >
              View Archive
            </Link>
            <Link
              href="/contact"
              className="font-mono text-xs uppercase tracking-widest border border-text/30 px-10 py-5 text-text transition-all duration-400 hover:border-text hover:bg-accent/8 hover:-translate-y-0.5"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Bottom-left coordinates accent */}
        <div className="absolute bottom-16 left-8 border-l border-golden pl-4 font-mono text-[0.7rem] leading-relaxed tracking-wider text-text-muted md:left-20">
          <span className="mb-2 block text-[0.6rem] tracking-[2px] text-accent/80">
            ||| || | |||
          </span>
          PORTFOLIO / 2025
        </div>

      </div>
    </section>
  );
}
