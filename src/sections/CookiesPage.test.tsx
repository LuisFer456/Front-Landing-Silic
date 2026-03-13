import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { CookiesPage } from './CookiesPage'

describe('CookiesPage', () => {
  it('deja explicito que no se recolectan cookies', () => {
    render(
      <MemoryRouter>
        <CookiesPage />
      </MemoryRouter>,
    )

    expect(screen.getByText('Politica de cookies')).toBeInTheDocument()
    expect(screen.getAllByText(/no recolecta cookies/i).length).toBeGreaterThan(0)
  })
})
