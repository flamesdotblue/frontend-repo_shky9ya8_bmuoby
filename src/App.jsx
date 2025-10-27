import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Results from './components/Results';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Hero />
      <Portfolio />
      <Results />
      {/* Pricing Summary */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">Transparent Pricing</h2>
          <p className="mt-2 text-gray-600">Pick a plan that fits — premium quality without the agency bloat.</p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-amber-500">Starter</div>
              <div className="mt-2 text-3xl font-bold">₹18K</div>
              <div className="text-sm text-gray-500">+ ₹2.5K/mo</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>✓ Single web app</li>
                <li>✓ Basic automations</li>
                <li>✓ Email/WhatsApp support</li>
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 font-semibold text-amber-700 hover:bg-amber-100">Get Started</a>
            </div>
            <div className="relative rounded-2xl border-2 border-amber-400 bg-neutral-900 p-6 text-white shadow-[0_0_30px_rgba(245,197,24,0.25)]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-black">MOST POPULAR</span>
              <div className="text-sm font-semibold text-amber-300">Professional</div>
              <div className="mt-2 text-3xl font-extrabold">₹35K</div>
              <div className="text-sm text-amber-200/80">+ ₹4.5K/mo</div>
              <ul className="mt-4 space-y-2 text-sm text-amber-50/90">
                <li>✓ Multi-user, roles, analytics</li>
                <li>✓ Payment integrations</li>
                <li>✓ Priority support</li>
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-amber-400 px-4 py-3 font-semibold text-black hover:brightness-110">Start Professional</a>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-amber-500">Enterprise</div>
              <div className="mt-2 text-3xl font-bold">₹65K</div>
              <div className="text-sm text-gray-500">+ ₹8K/mo</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>✓ SSO, audit logs, SLAs</li>
                <li>✓ Advanced automations</li>
                <li>✓ Dedicated success manager</li>
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 font-semibold text-amber-700 hover:bg-amber-100">Talk to Sales</a>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      {/* Footer */}
      <footer className="bg-neutral-900 py-12 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-4">
          <div>
            <div className="text-xl font-extrabold">APVISUALS</div>
            <p className="mt-2 text-sm text-gray-300">Custom software for Solapur’s growing businesses.</p>
          </div>
          <div>
            <div className="font-semibold">Navigate</div>
            <ul className="mt-2 space-y-2 text-sm text-gray-300">
              <li><a href="#portfolio" className="hover:text-white">Our Work</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Services</div>
            <ul className="mt-2 space-y-2 text-sm text-gray-300">
              <li>Web Applications</li>
              <li>Process Automation</li>
              <li>AI Features</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <ul className="mt-2 space-y-2 text-sm text-gray-300">
              <li>hello@apvisuals.co</li>
              <li>Solapur, Maharashtra</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-6xl px-6 text-sm text-gray-400">© {new Date().getFullYear()} APVISUALS. All rights reserved.</div>
      </footer>
    </div>
  );
}
