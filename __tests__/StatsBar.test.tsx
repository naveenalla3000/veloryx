import { render, screen } from '@testing-library/react'
import StatsBar from '@/components/StatsBar'

describe('StatsBar', () => {
  it('renders stat value 200+', () => {
    render(<StatsBar />)
    expect(screen.getByText('200+')).toBeInTheDocument()
  })

  it('renders stat value 99.98%', () => {
    render(<StatsBar />)
    expect(screen.getByText('99.98%')).toBeInTheDocument()
  })

  it('renders stat value 34', () => {
    render(<StatsBar />)
    expect(screen.getByText('34')).toBeInTheDocument()
  })

  it('renders stat value 120+', () => {
    render(<StatsBar />)
    expect(screen.getByText('120+')).toBeInTheDocument()
  })

  it('renders label Global Deployments', () => {
    render(<StatsBar />)
    expect(screen.getByText('Global Deployments')).toBeInTheDocument()
  })

  it('renders label Guaranteed Uptime', () => {
    render(<StatsBar />)
    expect(screen.getByText('Guaranteed Uptime')).toBeInTheDocument()
  })

  it('renders label Countries Served', () => {
    render(<StatsBar />)
    expect(screen.getByText('Countries Served')).toBeInTheDocument()
  })

  it('renders label Certified Engineers', () => {
    render(<StatsBar />)
    expect(screen.getByText('Certified Engineers')).toBeInTheDocument()
  })
})
