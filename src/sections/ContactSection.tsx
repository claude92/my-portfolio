import Section from '../components/Section'

export default function ContactSection() {
  return (
    <Section
      id="contact"
      className="bg-gradient-to-t from-slate-950 via-slate-950 to-slate-900 text-slate-200"
    >
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-slate-950/80 p-10 text-center sm:text-left">
        <p className="text-sm uppercase tracking-[0.4em] text-emerald-300">Contact</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Let&apos;s build together</h2>
        <p className="mt-4 text-base text-slate-300">
          Open to freelance opportunities and product collaborations. Drop a line and
          I&apos;ll reply within a day or two.
        </p>

        <form className="mt-8 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="text-left text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              <span className="mb-2 block text-xs text-slate-500">Name</span>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-base text-white outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              />
            </label>
            <label className="text-left text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              <span className="mb-2 block text-xs text-slate-500">Email</span>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-base text-white outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              />
            </label>
          </div>
          <label className="text-left text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            <span className="mb-2 block text-xs text-slate-500">Message</span>
            <textarea
              placeholder="Tell me a bit about your project..."
              rows={5}
              className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-base text-white outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
            />
          </label>
          <button
            type="button"
            className="w-full rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-emerald-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </Section>
  )
}

