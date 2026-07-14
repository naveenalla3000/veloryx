import { render, screen } from '@testing-library/react'
import Testimonials from '@/components/Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Trusted by Engineering Leaders')).toBeInTheDocument()
  })

  it('renders Client Voices label', () => {
    render(<Testimonials />)
    expect(screen.getByText('Client Voices')).toBeInTheDocument()
  })

  it('renders first testimonial author', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
  })

  it('renders second testimonial author', () => {
    render(<Testimonials />)
    expect(screen.getByText('Marcus Rivera')).toBeInTheDocument()
  })

  it('renders third testimonial author', () => {
    render(<Testimonials />)
    expect(screen.getByText('Priya Anand')).toBeInTheDocument()
  })

  it('renders first testimonial quote', () => {
    render(<Testimonials />)
    expect(
      screen.getByText(/Veloryx transformed our multi-cloud strategy/)
    ).toBeInTheDocument()
  })

  it('renders Cloud Migration tag', () => {
    render(<Testimonials />)
    expect(screen.getByText('Cloud Migration')).toBeInTheDocument()
  })

  it('renders Deployment tag', () => {
    render(<Testimonials />)
    expect(screen.getByText('Deployment')).toBeInTheDocument()
  })

  it('renders Infrastructure tag', () => {
    render(<Testimonials />)
    expect(screen.getByText('Infrastructure')).toBeInTheDocument()
  })
})
