import Section from '../components/Section'

export default function HomeSection() {
  return (
    <Section
      id='home'
      className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100'
    >
      <div className='flex min-h-[70vh] flex-col items-center justify-center gap-8 text-center sm:gap-10'>
        <div className='space-y-4 sm:space-y-5'>
          <p className='text-sm font-semibold uppercase tracking-[0.4em] text-emerald-300'>
            Welcome
          </p>
          <h1 className='text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl'>
            Claudiu <span className='text-emerald-300'>Mocanu</span>
          </h1>
          <p className='text-lg text-slate-300 sm:text-xl'>Frontend Developer</p>
          <p className='max-w-2xl text-base text-slate-400 sm:text-lg'>
            Crafting clean, performant interfaces with React and Tailwind. I build cohesive
            design systems, elevate UX, and obsess over the details that make products feel
            effortless.
          </p>
        </div>

        <div className='flex flex-wrap justify-center gap-4'>
          <a
            href='/cv.pdf'
            className='rounded-full bg-emerald-400 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-emerald-300'
          >
            Download CV
          </a>
          <a
            href='#contact'
            className='rounded-full border border-white/20 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white/60'
          >
            Contact Me
          </a>
        </div>
      </div>
    </Section>
  )
}

