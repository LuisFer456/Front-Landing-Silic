import { motion } from 'framer-motion'
import type { Product } from '../../types/product'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="group relative overflow-hidden border border-white/10 bg-zinc-950/80"
      aria-label={`${product.name} ${product.colorway}`}
    >
      <div className="overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="aspect-[4/5] w-full object-cover saturate-[0.88] transition-transform duration-500 ease-out group-hover:scale-[1.03] group-focus-within:scale-[1.03]"
        />
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between">
          <span className="border border-white/15 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-zinc-300">
            {product.tag}
          </span>
          <span className="text-xs uppercase tracking-[0.18em] text-zinc-400">{product.colorway}</span>
        </div>

        <div className="space-y-1">
          <h3 className="font-serif text-xl text-zinc-100">{product.name}</h3>
          <p className="text-sm text-zinc-300">${product.price}</p>
        </div>

        <a
          href="#join-drop"
          className="inline-block text-xs uppercase tracking-[0.18em] text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={`Comprar ${product.name}`}
        >
          <span className="relative">
            Comprar este par
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-zinc-200 transition-all duration-300 group-hover:w-full group-focus-within:w-full" />
          </span>
        </a>
      </div>
    </motion.article>
  )
}
