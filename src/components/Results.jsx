import { useEffect, useRef, useState } from 'react';

function useCountUp(target, duration = 1600) {
  const [value, setValue] = useState(0);
  const start = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    const begin = performance.now();

    const tick = (now) => {
      if (!start.current) start.current = now;
      const elapsed = now - begin;
      const progress = Math.min(1, elapsed / duration);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(target * ease));
      if (progress < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf.current);
  }, [duration, target]);

  return value;
}

function Metric({ label, to, suffix = '' }) {
  const v = useCountUp(to);
  return (
    <div className="rounded-2xl bg-neutral-900 p-6 ring-1 ring-white/10">
      <div className="text-4xl font-extrabold text-white">
        {v}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-amber-300">{label}</div>
    </div>
  );
}

export default function Results() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Results That Speak for Themselves</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          <Metric label="Custom Solutions" to={10} suffix="+" />
          <Metric label="Businesses Served" to={6} suffix="+" />
          <Metric label="Hours Saved Monthly" to={100} suffix="+" />
          <Metric label="Packages" to={3} />
          <Metric label="Rapid Delivery (days)" to={14} />
          <Metric label="Satisfaction" to={95} suffix="%" />
        </div>
        <div className="mt-10">
          <a href="#portfolio" className="inline-flex items-center rounded-xl bg-amber-400 px-5 py-3 font-semibold text-black shadow-[0_0_20px_rgba(245,197,24,0.45)] transition hover:brightness-105">
            See Our Work in Action
          </a>
        </div>
      </div>
    </section>
  );
}
