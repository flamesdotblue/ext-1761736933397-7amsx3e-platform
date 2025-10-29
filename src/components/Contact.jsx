import React from 'react';
import { Mail, Phone } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_50%_at_100%_100%,rgba(34,211,238,0.10)_0%,rgba(0,0,0,0)_70%)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Let’s build something memorable</h2>
            <p className="mt-4 text-white/70 max-w-prose">
              I collaborate with startups, studios, and brands to create distinctive visual systems. Share a few details about your project and I’ll get back within 1–2 days.
            </p>
            <div className="mt-8 space-y-3">
              <a href="mailto:hello@alexrivera.design" className="inline-flex items-center gap-3 text-white/90 hover:text-white">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 border border-white/10">
                  <Mail className="h-4 w-4" />
                </span>
                hello@alexrivera.design
              </a>
              <a href="tel:+1234567890" className="block text-white/70 hover:text-white flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 border border-white/10">
                  <Phone className="h-4 w-4" />
                </span>
                +1 (234) 567-890
              </a>
            </div>
            <div className="mt-10">
              <p className="text-xs text-white/50">© {new Date().getFullYear()} Alex Rivera. All rights reserved.</p>
            </div>
          </div>

          <form className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1" htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required className="w-full rounded-md bg-black/50 border border-white/15 px-3 py-2 text-sm outline-none focus:ring-2 ring-white/20" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required className="w-full rounded-md bg-black/50 border border-white/15 px-3 py-2 text-sm outline-none focus:ring-2 ring-white/20" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/70 mb-1" htmlFor="subject">Project type</label>
                <select id="subject" name="subject" className="w-full rounded-md bg-black/50 border border-white/15 px-3 py-2 text-sm outline-none focus:ring-2 ring-white/20">
                  <option>Brand Identity</option>
                  <option>Packaging</option>
                  <option>Editorial / Print</option>
                  <option>Campaign / Art Direction</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/70 mb-1" htmlFor="message">Project details</label>
                <textarea id="message" name="message" rows={5} className="w-full rounded-md bg-black/50 border border-white/15 px-3 py-2 text-sm outline-none focus:ring-2 ring-white/20" placeholder="Timeline, budget range, goals…"></textarea>
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 w-full sm:w-auto">
              Send Inquiry
            </button>
            <p className="mt-3 text-xs text-white/50">This form is static for demo purposes. Replace with your preferred form provider.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
