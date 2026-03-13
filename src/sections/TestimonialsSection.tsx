import { motion } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'

type Testimonial = {
  quote: string
  source: string
  role: string
  icon: 'spark' | 'wave' | 'seal'
}

const testimonials: Testimonial[] = [
  {
    quote: '“Recibi mis SILIC en dos dias y la calidad supera cualquier par que haya comprado este año.”',
    source: 'Cliente verificado',
    role: 'Compra online',
    icon: 'spark',
  },
  {
    quote: '“Se ven exclusivos, combinan con todo y realmente se sienten premium cuando caminas.”',
    source: 'Cliente recurrente',
    role: 'Segunda compra',
    icon: 'wave',
  },
  {
    quote: '“Los compre por diseño y me quede por la comodidad. Hoy son mi par principal.”',
    source: 'Cliente SILIC',
    role: 'Uso diario premium',
    icon: 'seal',
  },
]

function TestimonialIcon({ icon }: Pick<Testimonial, 'icon'>) {
  if (icon === 'spark') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          d="M12 2 13.9 8.1 20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  if (icon === 'wave') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          d="M3 15c2.1 0 2.1-3 4.2-3s2.1 3 4.2 3 2.1-3 4.2-3 2.1 3 4.2 3"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
        <path
          d="M3 9c2.1 0 2.1-3 4.2-3s2.1 3 4.2 3 2.1-3 4.2-3 2.1 3 4.2 3"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M12 3 18 5.2v6.1c0 4-2.5 7.7-6 9.7-3.5-2-6-5.7-6-9.7V5.2L12 3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="m9.5 12 1.7 1.7 3.3-3.7" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export function TestimonialsSection() {
  return (
    <section id="archive" className="border-b border-white/10 py-16 md:py-24">
      <Container className="space-y-10">
        <SectionHeading
          label="Testimonios"
          title="Lo que dicen nuestros clientes"
          description="Comentarios reales de clientes que eligieron SILIC por diseño, calidad y experiencia premium de compra."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.quote}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
              className="flex h-full flex-col justify-between border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-100">
                    <TestimonialIcon icon={testimonial.icon} />
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                    {testimonial.role}
                  </span>
                </div>

                <blockquote className="font-serif text-2xl leading-tight text-zinc-100">
                  {testimonial.quote}
                </blockquote>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.22em] text-zinc-400">
                <div aria-hidden className="h-px w-8 bg-white/25" />
                <span>{testimonial.source}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
