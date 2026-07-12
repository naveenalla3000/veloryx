import { render, screen } from '@testing-library/react'
import CTABanner from '@/components/CTABanner'

describe('CTABanner', () => {
  it('renders heading "Ready to Architect Your Future?"', () => {
    render(<CTABanner />)
    expect(screen.getByText('Ready to Architect Your Future?')).toBeInTheDocument()
  })

  it('renders "Schedule a Consultation" button', () => {
    render(<CTABanner />)
    expect(screen.getByText(/Schedule a Consultation/i)).toBeInTheDocument()
  })

  it('renders "View Our Work" button', () => {
    render(<CTABanner />)
    expect(screen.getByText('View Our Work')).toBeInTheDocument()
  })
})
