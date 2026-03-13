import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { Wordmark } from '../components/shared/Wordmark'
import { cn } from '../lib/utils'
import { useScrolled } from '../hooks/useScrolled'

const homeHref = `${import.meta.env.BASE_URL}#hero`

const links = [
  { href: `${import.meta.env.BASE_URL}#featured-drop`, label: 'Lanzamiento' },
  { href: `${import.meta.env.BASE_URL}#editorial`, label: 'Editorial' },
  { href: `${import.meta.env.BASE_URL}#benefits`, label: 'Beneficios' },
  { href: `${import.meta.env.BASE_URL}#archive`, label: 'Clientes' },
]

export function NavbarSection() {
  const scrolled = useScrolled(14)

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b border-white/10 transition-all duration-300',
        scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-3">
        <a href={homeHref} aria-label="Ir al inicio de SILIC" className="focus-ring">
          <Wordmark />
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-zinc-300 transition-colors duration-200 hover:text-white focus-ring"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button as="a" href={`${import.meta.env.BASE_URL}#featured-drop`} variant="secondary" size="md" aria-label="Comprar ahora">
          Comprar ahora
        </Button>
      </Container>
    </header>
  )
}
