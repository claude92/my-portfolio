import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
}

/**
 * Shared shell for every portfolio section to keep spacing consistent.
 */
export default function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-24 ${className ?? ''}`}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">{children}</div>
    </section>
  )
}

