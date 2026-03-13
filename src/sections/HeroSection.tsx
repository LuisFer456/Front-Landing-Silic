import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'

export function HeroSection() {
  return (
    <section id="hero" className="border-b border-white/10 py-20 md:py-28">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-7"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Lujo contemporaneo · Edicion limitada · Hecho para destacar</p>
          <h1 className="font-serif text-5xl leading-[0.98] text-zinc-50 sm:text-6xl md:text-7xl">
            SILIC, sneakers premium para quienes compran presencia.
          </h1>
          <p className="max-w-xl text-base text-zinc-300 md:text-lg">
            Diseño de autor, materiales superiores y una silueta que eleva cualquier look desde el primer paso.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button as="a" href="#featured-drop" variant="primary" size="lg" aria-label="Comprar lanzamiento">
              Comprar lanzamiento
            </Button>
            <Button as="a" href="#archive" variant="secondary" size="lg" aria-label="Explorar archivo">
              Ver opiniones
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="overflow-hidden border border-white/10"
        >
          <img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1600&q=80"
            alt="Campaña de sneakers premium de SILIC"
            className="aspect-[4/5] w-full object-cover saturate-[0.82]"
            fetchPriority="high"
          />
        </motion.div>
      </Container>
    </section>
  )
}
