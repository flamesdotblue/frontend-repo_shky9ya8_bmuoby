import { useMemo, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'FinEdge — Loan Origination Portal',
    client: 'Local Finance Co.',
    category: 'Finance',
    featured: true,
    desc: 'Automated application intake, KYC verification, and underwriting dashboard.',
    features: ['KYC automation', 'E-sign workflow', 'Role-based access'],
    tech: ['React', 'Node', 'Postgres', 'Tailwind'],
    result: 'Cut processing time by 58%'
  },
  {
    id: 2,
    title: 'RetailPulse — Inventory & POS',
    client: 'Solapur Retail Group',
    category: 'Retail',
    desc: 'Real-time inventory tracking, POS, and supplier ordering from one dashboard.',
    features: ['Barcode scanning', 'Auto-reorder', 'GST invoicing'],
    tech: ['Next.js', 'Supabase', 'Razorpay'],
    result: 'Reduced stockouts by 32%'
  },
  {
    id: 3,
    title: 'HealthTrack — Clinic CRM',
    client: 'City Care Clinic',
    category: 'Healthcare',
    desc: 'Patient CRM with WhatsApp reminders, EMR, and analytics.',
    features: ['EMR', 'Reminders', 'Analytics'],
    tech: ['React', 'Node', 'MongoDB'],
    result: 'No-show rate down 24%'
  },
  {
    id: 4,
    title: 'BuildPro — Contractor Ops',
    client: 'Shivaji Constructions',
    category: 'Construction',
    desc: 'Site progress tracking, materials, and approvals on mobile.',
    features: ['Photo logs', 'Approvals', 'Vendor mgmt'],
    tech: ['React', 'Firebase'],
    result: '2 hrs saved daily'
  },
  {
    id: 5,
    title: 'AgroLink — Farmer Marketplace',
    client: 'District Agro Collective',
    category: 'AgriTech',
    desc: 'B2B marketplace with payments and logistics integrations.',
    features: ['Escrow', 'Ratings', 'Logistics'],
    tech: ['Next.js', 'Supabase', 'Razorpay'],
    result: 'GMV +3.2x in 6 months'
  },
  {
    id: 6,
    title: 'EduFlow — LMS for Coaching',
    client: 'Prime Coaching',
    category: 'Education',
    desc: 'Classes, tests, attendance, and payments in one platform.',
    features: ['Tests', 'Attendance', 'Payments'],
    tech: ['React', 'Node', 'Postgres'],
    result: 'Retention +18%'
  },
];

const categories = ['All', 'Finance', 'Retail', 'Healthcare', 'Construction', 'AgriTech', 'Education'];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [modal, setModal] = useState(null);

  const filtered = useMemo(() => (active === 'All' ? projects : projects.filter(p => p.category === active)), [active]);

  return (
    <section id="portfolio" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-black sm:text-4xl">Our Work</h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                active === c ? 'border border-amber-400 text-black shadow-[inset_0_-2px_0_rgba(245,197,24,0.6)]' : 'border border-gray-200 text-gray-600 hover:border-amber-300'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filtered.map((p) => (
            <div key={p.id} className="group relative overflow-hidden rounded-2xl bg-neutral-900 p-6 text-white">
              {p.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-amber-400 px-2 py-1 text-xs font-semibold text-black">FEATURED</span>
              )}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-300">{p.client} • {p.category}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-200">{p.desc}</p>

              <ul className="mt-4 grid grid-cols-3 gap-2 text-sm text-gray-300">
                {p.features.map((f) => (
                  <li key={f} className="rounded-md bg-white/5 px-2 py-1">• {f}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-2 py-1">{t}</span>
                ))}
                <span className="ml-auto rounded-full bg-emerald-500/20 px-2 py-1 text-emerald-300">{p.result}</span>
              </div>

              <button
                onClick={() => setModal(p)}
                className="mt-5 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                View Case Study
              </button>

              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(245,197,24,0.15), transparent 40%)'}} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" onClick={() => setModal(null)}>
          <div className="max-w-2xl rounded-2xl bg-white p-6 text-black" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold">{modal.title}</h3>
                <p className="text-sm text-gray-600">{modal.client} • {modal.category}</p>
              </div>
              <button className="rounded-full border border-gray-300 px-3 py-1 text-sm" onClick={() => setModal(null)}>Close</button>
            </div>
            <p className="mt-4 text-gray-800">{modal.desc}</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-medium">Key Features</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
                  {modal.features.map((f) => (<li key={f}>{f}</li>))}
                </ul>
              </div>
              <div>
                <p className="font-medium">Tech Stack</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {modal.tech.map((t) => (<span key={t} className="rounded-full bg-gray-100 px-2 py-1">{t}</span>))}
                </div>
                <p className="mt-3 text-emerald-600">Impact: {modal.result}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
