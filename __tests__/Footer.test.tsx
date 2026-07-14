import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

describe('Footer', () => {
  it('renders logo', () => {
    render(<Footer />)
    expect(screen.getByAltText('Veloryx Technologies')).toBeInTheDocument()
  })

  it('renders brand description', () => {
    render(<Footer />)
    expect(screen.getByText(/premier enterprise IT consultancy/i)).toBeInTheDocument()
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/Registered in RAKEZ/i)).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Free Consultation')).toBeInTheDocument()
  })

  it('renders contact details', () => {
    render(<Footer />)
    expect(screen.getByText(/Ras Al Khaimah Economic Zone/i)).toBeInTheDocument()
    expect(screen.getByText('+971 7 243 5000')).toBeInTheDocument()
    expect(screen.getByText('contact@veloryx.com')).toBeInTheDocument()
  })

  it('renders legal links', () => {
    render(<Footer />)
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Terms of Service')).toBeInTheDocument()
    expect(screen.getByText('Security')).toBeInTheDocument()
  })
})
