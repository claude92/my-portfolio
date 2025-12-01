import Section from '../components/Section'

export default function SkillsSection() {
  return (
    <Section id="skills" className="bg-slate-950 text-slate-200">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-300">
            Skills
          </p>
          <h2 className="text-3xl font-semibold text-white">Focused toolkit</h2>
          <p className="text-base text-slate-400">
            A mix of frameworks and core web technologies I use daily to craft polished
            interfaces.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'].map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-slate-100 shadow-lg shadow-emerald-500/5"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

