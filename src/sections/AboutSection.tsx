import Section from '../components/Section'

export default function AboutSection() {
  return (
    <Section id="about" className="bg-slate-950 text-slate-200">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-300">
            About
          </p>
          <h2 className="text-3xl font-semibold text-white">Human-first frontend developer</h2>
          <p className="text-base text-slate-300">
            I&apos;m Claudiu Mocanu, a frontend developer focused on performant, accessible
            interfaces. Over the past few years I&apos;ve helped startups and product teams
            ship design systems, marketing experiences, and dashboards that feel cohesive and
            thoughtful.
          </p>
          <p className="text-base text-slate-400">
            My process blends rapid prototyping with strong fundamentals: scalable component
            architecture, maintainable CSS, and micro-interactions that enhance clarity.
            I&apos;m happiest when collaborating with designers, iterating quickly, and
            polishing the details that make a product stand out.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative h-64 w-64 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center text-sm uppercase tracking-[0.4em] text-slate-400">
              Profile
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

