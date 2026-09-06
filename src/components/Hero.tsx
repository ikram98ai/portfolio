import React, { useCallback, useRef } from 'react';
import data from '../data.json';
import { ArrowDown } from 'lucide-react';

const { personalInfo } = data;

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const frame = useRef(0);

  // Track the cursor as normalized -1..1 CSS vars; layers below consume them
  // with different multipliers to create real parallax depth.
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = sectionRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = el.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty('--mx', mx.toFixed(3));
      el.style.setProperty('--my', my.toFixed(3));
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center pt-20 px-6 bg-white overflow-hidden relative"
    >
      {/* ---- 3D Aurora Background ---- */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        {/* Deep layer — moves the most */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out"
          style={{ transform: 'translate(calc(-50% + var(--mx, 0) * 40px), calc(-50% + var(--my, 0) * 40px))' }}
        >
          <div
            className="w-[800px] h-[800px] orb animate-float-slow"
            style={{ ['--orb-rgb' as string]: '191, 219, 254', ['--orb-alpha' as string]: '0.6' }}
          ></div>
        </div>

        {/* Mid layer */}
        <div
          className="absolute top-1/4 left-1/4 transition-transform duration-500 ease-out"
          style={{ transform: 'translate(calc(var(--mx, 0) * -25px), calc(var(--my, 0) * -25px))' }}
        >
          <div
            className="w-[400px] h-[400px] orb animate-float-slower"
            style={{ ['--orb-rgb' as string]: '233, 213, 255', ['--orb-alpha' as string]: '0.65' }}
          ></div>
        </div>

        {/* Accent layer */}
        <div
          className="absolute bottom-1/4 right-1/5 transition-transform duration-700 ease-out"
          style={{ transform: 'translate(calc(var(--mx, 0) * 15px), calc(var(--my, 0) * 15px))' }}
        >
          <div
            className="w-[350px] h-[350px] orb animate-float-slow"
            style={{ ['--orb-rgb' as string]: '165, 243, 252', ['--orb-alpha' as string]: '0.6' }}
          ></div>
        </div>

        {/* Slow-rotating conic halo behind the headline */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] animate-spin-slow opacity-[0.07]">
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                'conic-gradient(from 0deg, transparent 0deg, #0071e3 60deg, transparent 120deg, #a855f7 240deg, transparent 300deg)',
              maskImage: 'radial-gradient(circle, transparent 55%, black 70%, transparent 71%)',
              WebkitMaskImage: 'radial-gradient(circle, transparent 55%, black 70%, transparent 71%)',
            }}
          ></div>
        </div>
      </div>

      {/* ---- Content with subtle 3D counter-tilt ---- */}
      <div
        className="max-w-4xl mx-auto text-center z-10 transition-transform duration-300 ease-out"
        style={{
          transform:
            'perspective(1200px) rotateX(calc(var(--my, 0) * -2.5deg)) rotateY(calc(var(--mx, 0) * 2.5deg))',
          transformStyle: 'preserve-3d',
        }}
      >
        <p
          className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-linear-to-r from-apple-blue via-purple-600 to-apple-blue text-shimmer mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          {personalInfo.name} · {personalInfo.title}
        </p>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-apple-text mb-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.3s', transform: 'translateZ(50px)' }}
        >
          {personalInfo.headline}
        </h1>

        <p
          className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-400 mb-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.4s', transform: 'translateZ(40px)' }}
        >
          {personalInfo.headlineAccent}
        </p>

        <p
          className="text-lg md:text-2xl text-apple-text-secondary max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.5s', transform: 'translateZ(30px)' }}
        >
          {personalInfo.tagline}
        </p>

        <p
          className="mt-6 text-base text-gray-500 max-w-lg mx-auto opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.6s', transform: 'translateZ(20px)' }}
        >
          {personalInfo.summary}
        </p>

        <div
          className="mt-12 flex flex-col md:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.8s', transform: 'translateZ(40px)' }}
        >
          <a
            href="#projects"
            className="text-apple-blue hover:underline text-lg font-medium flex items-center gap-2 group"
          >
            View Projects{' '}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href={personalInfo.contact.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-apple-text text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-black transition-colors"
          >
            Hire me on Upwork
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-10 animate-bounce text-gray-400 opacity-0 animate-fade-in"
        style={{ animationDelay: '1.2s' }}
      >
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
