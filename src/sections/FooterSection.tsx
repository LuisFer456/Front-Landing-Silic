import { Container } from '../components/ui/Container'
import { Link } from 'react-router-dom'

const legalLinks = [
  { href: '/terminos', label: 'Terminos' },
  { href: '/privacidad', label: 'Privacidad' },
  { href: '/cookies', label: 'Cookies' },
]
const socialLinks = ['Instagram', 'X', 'Pinterest']

export function FooterSection() {
  return (
    <footer className="py-8">
      <Container className="flex flex-col gap-5 text-xs uppercase tracking-[0.16em] text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>© SILIC</p>
        <div className="flex gap-4">
          {legalLinks.map((item) => (
            <Link key={item.href} to={item.href} className="transition-colors hover:text-zinc-100 focus-ring" aria-label={item.label}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          {socialLinks.map((item) => (
            <a key={item} href="#" className="transition-colors hover:text-zinc-100 focus-ring" aria-label={item}>
              {item}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}
