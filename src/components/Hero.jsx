import { useEffect, useMemo, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

const words = [
  'Software Your Business Actually Needs',
  'Custom Web Apps That Move the Needle',
  'Modern Systems Built Lightning Fast',
];

function useTypewriter(list, typingSpeed = 40, pause = 1400) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const frame = useRef(0);

  const current = useMemo(() => list[index % list.length], [index, list]);

  useEffect(() => {
    let timeout;
    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), typingSpeed / 1.5);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % list.length);
    }
    return () => clearTimeout(timeout);
  }, [current, deleting, list.length, pause, text.length, typingSpeed]);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  return text;
}

export default function Hero() {
  const text = useTypewriter(words);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,215,0,0.10),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(255,255,255,0.08),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm tracking-widest text-amber-400/90">APVISUALS — Custom Software Solutions for Solapur</p>
        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
          We Build {text}
          <span className="inline-block animate-pulse">|</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg text-gray-300">
          Custom web applications delivered in weeks, not months. Designed for Solapur’s growing businesses.
        </p>

        <div className="mt-4 flex items-center gap-3 text-sm text-amber-300">
          <span>🏆 Trusted by 10+ businesses</span>
          <span className="opacity-60">•</span>
          <span>⚡ 7-14 days delivery</span>
          <span className="opacity-60">•</span>
          <span>💼 95% satisfaction</span>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-black shadow-[0_0_20px_rgba(245,197,24,0.55)] transition hover:brightness-105"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/60 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Get Free Consultation
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-0 right-0 mx-auto flex items-center justify-center">
          <div className="h-10 w-[2px] animate-pulse rounded-full bg-amber-400" />
        </div>
      </div>
    </section>
  );
}
