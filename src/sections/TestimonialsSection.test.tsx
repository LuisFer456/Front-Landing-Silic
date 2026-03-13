import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TestimonialsSection } from './TestimonialsSection'

describe('TestimonialsSection', () => {
  it('muestra el titulo comercial de testimonios', () => {
    render(<TestimonialsSection />)

    expect(screen.getByText('Lo que dicen nuestros clientes')).toBeInTheDocument()
    expect(
      screen.getByText('Comentarios reales de clientes que eligieron SILIC por diseño, calidad y experiencia premium de compra.'),
    ).toBeInTheDocument()
  })
})
