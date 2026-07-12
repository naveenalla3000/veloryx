import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Veloryx')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Solutions')).toBeInTheDocument()
    expect(screen.getByText('Expertise')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Insights')).toBeInTheDocument()
  })

  it('renders consultation CTA button', () => {
    render(<Navbar />)
    expect(screen.getByText('Consultation')).toBeInTheDocument()
  })
})
