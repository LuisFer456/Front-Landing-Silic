import { motion } from 'framer-motion'
import { Container } from '../components/ui/Container'

export function EditorialBlockSection() {
  return (
    <section id="editorial" className="border-b border-white/10 py-14 sm:py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="grid overflow-hidden border border-white/10 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <img
            src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1800&q=80"
            alt="Editorial de SILIC"
            loading="lazy"
            decoding="async"
            className="h-full min-h-[260px] w-full object-cover saturate-[0.8] sm:min-h-[320px] md:min-h-[360px]"
          />
          <div className="flex items-center border-t border-white/10 p-6 sm:p-8 md:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Editorial</p>
              <h2 className="font-serif text-[1.9rem] leading-tight text-zinc-100 sm:text-[2.3rem] md:text-5xl">
                Lujo real que se nota al instante.
              </h2>
              <p className="text-sm text-zinc-300">
                Cada par SILIC combina sofisticacion visual y confort de alto nivel para que compres menos veces, pero mejor.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
