import { render, screen } from '@testing-library/react'
import TrustedBy from '@/components/TrustedBy'

describe('TrustedBy', () => {
  it('renders the section heading', () => {
    render(<TrustedBy />)
    expect(screen.getByText('Trusted by Global Enterprises')).toBeInTheDocument()
  })

  it('renders AWS logo', () => {
    render(<TrustedBy />)
    expect(screen.getAllByAltText('AWS').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Microsoft Azure logo', () => {
    render(<TrustedBy />)
    expect(screen.getAllByAltText('Microsoft Azure').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Oracle logo', () => {
    render(<TrustedBy />)
    expect(screen.getAllByAltText('Oracle').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Cisco logo', () => {
    render(<TrustedBy />)
    expect(screen.getAllByAltText('Cisco').length).toBeGreaterThanOrEqual(1)
  })

  it('renders IBM logo', () => {
    render(<TrustedBy />)
    expect(screen.getAllByAltText('IBM').length).toBeGreaterThanOrEqual(1)
  })

  it('renders SAP logo', () => {
    render(<TrustedBy />)
    expect(screen.getAllByAltText('SAP').length).toBeGreaterThanOrEqual(1)
  })
})
