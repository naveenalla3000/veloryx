import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home page', () => {
  it('renders navbar brand', () => {
    render(<Home />)
    expect(screen.getAllByText('Veloryx').length).toBeGreaterThanOrEqual(1)
  })

  it('renders hero headline', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders Core Modalities section', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /Core Modalities/i })).toBeInTheDocument()
  })

  it('renders footer copyright', () => {
    render(<Home />)
    expect(screen.getByText(/Veloryx Technologies FZ-LLC/i)).toBeInTheDocument()
  })
})
