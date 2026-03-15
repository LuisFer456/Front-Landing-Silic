import { motion } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'

const benefits = [
  {
    title: 'Materiales curados',
    label: 'Detalle de producto',
    metric: '01',
    copy: 'Cuero premium, malla tecnica y suela de alto rendimiento para ofrecer calidad visible y durabilidad en cada uso.',
    imageUrl:
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Primer plano de sneakers premium con detalle de cuero, costuras y textura de la suela.',
  },
  {
    title: 'Entrega de vitrina',
    label: 'Despacho',
    metric: '24H',
    copy: 'Empaque premium, despacho rapido y seguimiento en tiempo real para que tu compra llegue como una experiencia de lujo.',
    imageUrl:
      'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Cajas de sneakers y pares empacados como un envio de calzado premium.',
  },
  {
    title: 'Pares verificados',
    label: 'Autenticidad',
    metric: 'ID',
    copy: 'Autenticidad garantizada con identificacion serializada y control de calidad antes de cada envio.',
    imageUrl:
      'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Sneakers exhibidos en estanteria con presentacion retail premium y etiquetado de producto.',
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="border-b border-white/10 py-14 sm:py-16 md:py-24">
      <Container className="space-y-10">
        <SectionHeading
          label="Beneficios"
          title="Todo lo que esperas de una compra premium"
          description="Beneficios pensados para vender con confianza: mejor material, entrega impecable y autenticidad garantizada."
        />

        <div className="grid gap-5 lg:grid-cols-12">
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              className="group relative overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] lg:col-span-4"
            >
              <div className="relative aspect-[5/4] overflow-hidden border-b border-white/10 bg-zinc-950">
                <img
                  src={benefit.imageUrl}
                  alt={benefit.imageAlt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:saturate-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 p-4 sm:p-5">
                  <div className="space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-300/80">
                      {benefit.label}
                    </p>
                    <h3 className="font-serif text-[1.6rem] leading-tight text-white sm:text-2xl md:text-[2rem]">{benefit.title}</h3>
                  </div>
                  <span className="text-sm uppercase tracking-[0.3em] text-zinc-200/70">
                    {benefit.metric}
                  </span>
                </div>
              </div>

              <div className="space-y-5 p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4 text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                  <span>Experiencia SILIC</span>
                  <span>Valor premium</span>
                </div>

                <p className="max-w-[34ch] text-sm leading-6 text-zinc-300">{benefit.copy}</p>

                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-400">
                  <div aria-hidden className="h-px w-10 bg-white/25" />
                  <span>Listo para comprar</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
