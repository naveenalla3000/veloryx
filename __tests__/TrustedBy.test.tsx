import { render, screen } from '@testing-library/react'
import TrustedBy from '@/components/TrustedBy'

describe('TrustedBy', () => {
  it('renders the section heading', () => {
    render(<TrustedBy />)
    expect(screen.getByText('Trusted by Global Enterprises')).toBeInTheDocument()
  })

  it('renders AWS wordmark', () => {
    render(<TrustedBy />)
    expect(screen.getByText('AWS')).toBeInTheDocument()
  })

  it('renders Microsoft Azure wordmark', () => {
    render(<TrustedBy />)
    expect(screen.getByText('Microsoft Azure')).toBeInTheDocument()
  })

  it('renders Oracle wordmark', () => {
    render(<TrustedBy />)
    expect(screen.getByText('Oracle')).toBeInTheDocument()
  })

  it('renders Cisco wordmark', () => {
    render(<TrustedBy />)
    expect(screen.getByText('Cisco')).toBeInTheDocument()
  })

  it('renders IBM wordmark', () => {
    render(<TrustedBy />)
    expect(screen.getByText('IBM')).toBeInTheDocument()
  })

  it('renders SAP wordmark', () => {
    render(<TrustedBy />)
    expect(screen.getByText('SAP')).toBeInTheDocument()
  })
})
