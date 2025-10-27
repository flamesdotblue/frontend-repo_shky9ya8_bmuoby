import { useMemo, useState } from 'react';
import { Mail, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: '',
    business: '',
    whatsapp: '',
    email: '',
    industry: '',
    pkg: 'Starter',
    description: '',
  });

  function validate() {
    const e = {};
    if (!form.name) e.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!/^\+?\d{10,15}$/.test(form.whatsapp)) e.whatsapp = 'Enter valid WhatsApp number';
    if (!form.description) e.description = 'Please describe your project';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  const whatsappURL = useMemo(() => {
    const msg = encodeURIComponent(
      `Hi APVISUALS! I am ${form.name || 'a business owner'} from ${form.business || 'Solapur'}. I am interested in the ${form.pkg} package. Here are some details: ${form.description || ''}`
    );
    return `https://wa.me/919999999999?text=${msg}`;
  }, [form.description, form.name, form.business, form.pkg]);

  async function onSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSuccess(true);
  }

  return (
    <section id="contact" className="bg-black py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
        <div>
          <p className="mb-2 inline-block rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold text-amber-300">Free 30-min consultation</p>
          <h3 className="text-3xl font-bold text-white sm:text-4xl">Get Started — We Reply Within 24 Hours</h3>
          <p className="mt-3 max-w-prose text-gray-300">Tell us about your business and what success looks like. We’ll propose the simplest, fastest way to get there.</p>

          <div className="mt-8 space-y-4 text-sm text-gray-300">
            <div className="flex items-center gap-3"><MessageCircle className="h-5 w-5 text-emerald-400" /> <a className="text-emerald-400 underline" href={whatsappURL} target="_blank" rel="noreferrer">WhatsApp us</a></div>
            <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-amber-300" /> hello@apvisuals.co</div>
            <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-amber-300" /> +91 99999 99999</div>
            <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-amber-300" /> Solapur, Maharashtra</div>
            <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-amber-300" /> Mon–Sat · 10am–7pm · 12h avg response</div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
          {success ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-white">
              <div className="mb-3 text-2xl font-bold text-emerald-400">Thanks! 🎉</div>
              <p>We received your request and will contact you within 24 hours.</p>
              <a href={whatsappURL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black hover:brightness-110">
                Message us on WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 text-sm">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-gray-300">Name</label>
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={`w-full rounded-lg border bg-black/40 px-3 py-2 text-white outline-none placeholder:text-gray-500 ${errors.name ? 'border-red-500' : 'border-white/10'}`} placeholder="Your full name" />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label className="mb-1 block text-gray-300">Business</label>
                  <input value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none placeholder:text-gray-500" placeholder="Company / brand" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-gray-300">WhatsApp</label>
                  <input value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} className={`w-full rounded-lg border bg-black/40 px-3 py-2 text-white outline-none placeholder:text-gray-500 ${errors.whatsapp ? 'border-red-500' : 'border-white/10'}`} placeholder="e.g. +9198xxxxxxx" />
                  {errors.whatsapp && <p className="mt-1 text-xs text-red-400">{errors.whatsapp}</p>}
                </div>
                <div>
                  <label className="mb-1 block text-gray-300">Email</label>
                  <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={`w-full rounded-lg border bg-black/40 px-3 py-2 text-white outline-none placeholder:text-gray-500 ${errors.email ? 'border-red-500' : 'border-white/10'}`} placeholder="you@company.com" />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-gray-300">Industry</label>
                  <input value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none placeholder:text-gray-500" placeholder="e.g. Retail, Finance" />
                </div>
                <div>
                  <label className="mb-1 block text-gray-300">Package</label>
                  <select value={form.pkg} onChange={(e) => setForm({ ...form, pkg: e.target.value })} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none">
                    <option>Starter</option>
                    <option>Professional</option>
                    <option>Enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-gray-300">Project description</label>
                <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={4} className={`w-full rounded-lg border bg-black/40 px-3 py-2 text-white outline-none placeholder:text-gray-500 ${errors.description ? 'border-red-500' : 'border-white/10'}`} placeholder="Tell us what you want to build. What’s the goal?" />
                {errors.description && <p className="mt-1 text-xs text-red-400">{errors.description}</p>}
              </div>

              <button disabled={loading} className="mt-2 inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-3 font-semibold text-black shadow-[0_0_20px_rgba(245,197,24,0.45)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70">
                {loading ? 'Sending…' : 'Get Free Consultation Within 24 Hours →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
