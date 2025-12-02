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
            A small sample of projects that reflect how I think about frontend craft,
            performance, and developer experience.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Insight Dashboard',
              description:
                'Responsive analytics dashboard with role-based access, theming, and real-time updates.',
              tech: ['React', 'TypeScript', 'Tailwind'],
              liveUrl: '#',
              codeUrl: '#',
            },
            {
              title: 'Component System',
              description:
                'Reusable UI library with documented patterns, tokens, and accessibility baked in.',
              tech: ['Angular', 'Storybook', 'SCSS'],
              liveUrl: '#',
              codeUrl: '#',
            },
            {
              title: 'Launch Landing Page',
              description:
                'High-performance marketing site with smooth scroll, SEO, and conversion-focused layout.',
              tech: ['React', 'Vite', 'CSS'],
              liveUrl: '#',
              codeUrl: '#',
            },
          ].map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400/50 hover:bg-slate-900"
            >
              <div className="relative h-40 overflow-hidden bg-slate-800/80">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-transparent to-emerald-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex h-full items-center justify-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                  Project preview
                </div>
              </div>

              <div className="flex flex-col gap-4 p-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-slate-300">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-2 flex flex-wrap gap-3">
                  <a
                    href={project.liveUrl}
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-emerald-400 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-900 transition hover:bg-emerald-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-100 transition hover:border-emerald-400/60"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}

