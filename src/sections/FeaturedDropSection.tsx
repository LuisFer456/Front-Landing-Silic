import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ProductCard } from '../features/products/ProductCard'
import { products } from '../features/products/mockProducts'

export function FeaturedDropSection() {
  return (
    <section id="featured-drop" className="border-b border-white/10 py-16 md:py-24">
      <Container className="space-y-10">
        <SectionHeading
          label="Lanzamiento destacado"
          title="Pares de alto impacto, disponibles ahora"
          description="Modelos premium seleccionados para clientes que buscan exclusividad, acabados impecables y disponibilidad limitada."
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  )
}
