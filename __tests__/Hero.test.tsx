import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero', () => {
  it('renders the system initialization badge', () => {
    render(<Hero />)
    expect(screen.getByText(/System Initialization Complete/i)).toBeInTheDocument()
  })

  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText(/Architecting the Future of/i)).toBeInTheDocument()
    expect(screen.getByText('Enterprise IT')).toBeInTheDocument()
  })

  it('renders both CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText(/Schedule a Consultation/i)).toBeInTheDocument()
    expect(screen.getByText(/Explore Capabilities/i)).toBeInTheDocument()
  })
})
