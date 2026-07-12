import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Veloryx')).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Footer />)
    expect(screen.getByText(/Engineered in the UAE/i)).toBeInTheDocument()
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/Veloryx Technologies FZ-LLC/i)).toBeInTheDocument()
  })

  it('renders legal links', () => {
    render(<Footer />)
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Terms of Service')).toBeInTheDocument()
    expect(screen.getByText('Security')).toBeInTheDocument()
  })

  it('renders connect links', () => {
    render(<Footer />)
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Global Offices')).toBeInTheDocument()
    expect(screen.getByText('Careers')).toBeInTheDocument()
  })
})
