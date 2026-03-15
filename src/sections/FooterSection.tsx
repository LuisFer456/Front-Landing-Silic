import { Container } from '../components/ui/Container'
import { Link } from 'react-router-dom'

const legalLinks = [
  { href: '/terminos', label: 'Terminos' },
  { href: '/privacidad', label: 'Privacidad' },
  { href: '/cookies', label: 'Cookies' },
]

export function FooterSection() {
  return (
    <footer className="py-8">
      <Container className="flex flex-col items-center gap-5 text-center text-[11px] uppercase tracking-[0.14em] text-zinc-500 sm:text-xs sm:tracking-[0.16em] md:flex-row md:flex-wrap md:justify-center md:text-center">
        <p>© SILIC</p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {legalLinks.map((item) => (
            <Link key={item.href} to={item.href} className="transition-colors hover:text-zinc-100 focus-ring" aria-label={item.label}>
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  )
}
