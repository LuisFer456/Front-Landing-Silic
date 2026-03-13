import { SkipLink } from '../components/shared/SkipLink'
import { Container } from '../components/ui/Container'
import { FooterSection } from './FooterSection'
import { NavbarSection } from './NavbarSection'

type LegalIcon = 'terms' | 'privacy' | 'cookies'

interface LegalSection {
  title: string
  body: string[]
}

interface LegalDocumentPageProps {
  eyebrow: string
  title: string
  description: string
  icon: LegalIcon
  sections: LegalSection[]
}

function LegalIconGraphic({ icon }: { icon: LegalIcon }) {
  if (icon === 'terms') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-8 w-8">
        <path d="M14 8h15l5 5v23a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M29 8v7h7" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M17 22h14M17 28h14M17 34h10" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    )
  }

  if (icon === 'privacy') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-8 w-8">
        <path d="M24 7 35 11v11c0 8-4.5 14.1-11 18-6.5-3.9-11-10-11-18V11L24 7Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M19.5 24.5V21a4.5 4.5 0 1 1 9 0v3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <rect x="17" y="24.5" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-8 w-8">
      <circle cx="24" cy="24" r="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeDasharray="3.5 3.5" />
      <path d="M18 24h12M24 18v12" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M31.5 31.5 36 36" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  )
}

export function LegalDocumentPage({ eyebrow, title, description, icon, sections }: LegalDocumentPageProps) {
  return (
    <div className="min-h-screen bg-bg text-zinc-100">
      <SkipLink />
      <NavbarSection />
      <main id="main-content" className="pb-16">
        <section className="border-b border-white/10 py-16 md:py-24">
          <Container className="space-y-10">
            <div className="grid gap-8 border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-7 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">{eyebrow}</p>
                <h1 className="max-w-3xl font-serif text-4xl leading-none text-zinc-100 md:text-6xl">{title}</h1>
                <p className="max-w-2xl text-sm leading-6 text-zinc-300 md:text-base">{description}</p>
              </div>

              <div className="flex justify-start lg:justify-end">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-100 shadow-soft">
                  <LegalIconGraphic icon={icon} />
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {sections.map((section) => (
                <article key={section.title} className="border border-white/10 bg-white/[0.02] p-6 md:p-8">
                  <h2 className="font-serif text-2xl text-zinc-100 md:text-3xl">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-sm leading-6 text-zinc-300">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}