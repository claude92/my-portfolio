import Section from '../components/Section'

export default function ProjectsSection() {
  return (
    <Section id="projects" className="bg-slate-950 text-slate-200">
      <div className="space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">
            Projects
          </p>
          <h2 className="text-3xl font-semibold text-white">Selected work</h2>
          <p className="text-base text-slate-400">
            A few placeholders to show how real case studies might sit in the layout.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Insight Dashboard',
              description:
                'Analytics suite with customizable widgets, theming, and realtime updates for product teams.',
            },
            {
              title: 'Component System',
              description:
                'Scalable React component library with tokens, documentation, and accessibility baked in.',
            },
            {
              title: 'Launch Landing Page',
              description:
                'High-converting marketing experience powered by modern tooling and smooth interactions.',
            },
          ].map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-slate-900"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="text-xs uppercase tracking-[0.3em] text-emerald-300">
                    Case
                  </span>
                </div>
                <p className="text-base text-slate-300">{project.description}</p>
              </div>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition group-hover:text-emerald-200"
              >
                View Code
                <span aria-hidden className="transition group-hover:translate-x-1">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}

