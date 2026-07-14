import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home page', () => {
  it('renders navbar logo', () => {
    render(<Home />)
    expect(screen.getAllByAltText('Veloryx Technologies').length).toBeGreaterThanOrEqual(1)
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
    expect(screen.getByText(/Registered in RAKEZ/i)).toBeInTheDocument()
  })

  it('renders TrustedBy heading', () => {
    render(<Home />)
    expect(screen.getByText('Trusted by Global Enterprises')).toBeInTheDocument()
  })

  it('renders HowWeWork heading', () => {
    render(<Home />)
    expect(screen.getByText('How We Operate')).toBeInTheDocument()
  })

  it('renders CTABanner heading', () => {
    render(<Home />)
    expect(screen.getByText('Ready to Architect Your Future?')).toBeInTheDocument()
  })
})
