import { useState } from 'react'
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
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b border-white/10 transition-all duration-300',
        scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-3 sm:h-20">
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

        <Button
          as="a"
          href={`${import.meta.env.BASE_URL}#featured-drop`}
          variant="secondary"
          size="md"
          aria-label="Comprar ahora"
          className="hidden md:inline-flex"
        >
          Comprar ahora
        </Button>

        <button
          type="button"
          aria-label={menuOpen ? 'Cerrar menu principal' : 'Abrir menu principal'}
          aria-expanded={menuOpen}
          aria-controls="mobile-main-nav"
          onClick={() => setMenuOpen((value) => !value)}
          className="focus-ring inline-flex min-h-11 items-center border border-white/15 px-4 text-[11px] uppercase tracking-[0.2em] text-zinc-200 md:hidden"
        >
          {menuOpen ? 'Cerrar' : 'Menu'}
        </button>
      </Container>

      <div
        id="mobile-main-nav"
        className={cn(
          'border-t border-white/10 bg-black/95 transition-[max-height,opacity] duration-300 md:hidden',
          menuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 overflow-hidden opacity-0',
        )}
      >
        <Container className="space-y-3 py-4">
          <nav aria-label="Menu principal movil" className="grid gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="focus-ring border border-white/10 px-4 py-3 text-xs uppercase tracking-[0.18em] text-zinc-300 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button
            as="a"
            href={`${import.meta.env.BASE_URL}#featured-drop`}
            variant="secondary"
            size="md"
            aria-label="Comprar ahora"
            className="w-full"
          >
            Comprar ahora
          </Button>
        </Container>
      </div>
    </header>
  )
}
