import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { Input } from '../components/ui/Input'

export function FinalCtaSection() {
  return (
    <section id="join-drop" className="border-b border-white/10 py-14 sm:py-16 md:py-24">
      <Container>
        <div className="relative overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 sm:p-7 md:p-10">
          <div aria-hidden className="absolute inset-y-0 right-0 hidden w-1/3 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.05),transparent)] lg:block" />

          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 sm:text-xs sm:tracking-[0.28em]">Boletin / Proximo lanzamiento</p>
                <h2 className="max-w-3xl font-serif text-[2.05rem] leading-none text-zinc-100 sm:text-4xl md:text-6xl">
                  Acceso privado antes de que se agoten.
                </h2>
                <p className="max-w-2xl text-sm leading-6 text-zinc-300 md:text-base">
                  Entra al boletin y compra primero: lanzamientos limitados, reposiciones exclusivas y beneficios para miembros.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="border border-white/10 bg-black/20 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">Acceso</p>
                  <p className="mt-3 text-sm text-zinc-200">Compra anticipada en lanzamientos de alta demanda.</p>
                </div>
                <div className="border border-white/10 bg-black/20 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">Actualizaciones</p>
                  <p className="mt-3 text-sm text-zinc-200">Avisos inmediatos de reposicion y nuevas ediciones.</p>
                </div>
                <div className="border border-white/10 bg-black/20 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">Ediciones</p>
                  <p className="mt-3 text-sm text-zinc-200">Informacion privilegiada de cada nueva silueta.</p>
                </div>
              </div>
            </div>

            <div className="border border-white/10 bg-black/25 p-5 backdrop-blur-sm sm:p-6 md:p-7">
              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-zinc-500">Lista de miembros</p>
                  <p className="font-serif text-2xl text-zinc-100 md:text-3xl">Reservar acceso premium antes del publico.</p>
                </div>

                <form className="space-y-3" aria-label="Formulario de acceso al próximo drop">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    aria-label="Ingresa tu correo"
                    className="h-12 border-white/15 bg-white/[0.03]"
                  />
                  <Button type="submit" variant="primary" size="lg" className="w-full" aria-label="Unirme al boletin">
                    Quiero acceso prioritario
                  </Button>
                </form>

                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  <div aria-hidden className="h-px flex-1 bg-white/10" />
                  <span>Sin spam</span>
                  <div aria-hidden className="h-px flex-1 bg-white/10" />
                </div>

                <p className="text-xs leading-5 text-zinc-400">
                  Solo comunicaciones de valor: lanzamientos, reposiciones y oportunidades de compra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
