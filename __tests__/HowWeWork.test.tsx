import { render, screen } from '@testing-library/react'
import HowWeWork from '@/components/HowWeWork'

describe('HowWeWork', () => {
  it('renders section heading "How We Operate"', () => {
    render(<HowWeWork />)
    expect(screen.getByText('How We Operate')).toBeInTheDocument()
  })

  it('renders step number 01', () => {
    render(<HowWeWork />)
    expect(screen.getByText('01')).toBeInTheDocument()
  })

  it('renders step number 02', () => {
    render(<HowWeWork />)
    expect(screen.getByText('02')).toBeInTheDocument()
  })

  it('renders step number 03', () => {
    render(<HowWeWork />)
    expect(screen.getByText('03')).toBeInTheDocument()
  })

  it('renders step number 04', () => {
    render(<HowWeWork />)
    expect(screen.getByText('04')).toBeInTheDocument()
  })

  it('renders step title Discovery & Audit', () => {
    render(<HowWeWork />)
    expect(screen.getByText('Discovery & Audit')).toBeInTheDocument()
  })

  it('renders step title Architecture Design', () => {
    render(<HowWeWork />)
    expect(screen.getByText('Architecture Design')).toBeInTheDocument()
  })

  it('renders step title Deployment', () => {
    render(<HowWeWork />)
    expect(screen.getByText('Deployment')).toBeInTheDocument()
  })

  it('renders step title Continuous Support', () => {
    render(<HowWeWork />)
    expect(screen.getByText('Continuous Support')).toBeInTheDocument()
  })

  it('renders step 1 description', () => {
    render(<HowWeWork />)
    expect(screen.getByText('We map your current infrastructure, identify risk vectors, and define measurable success criteria.')).toBeInTheDocument()
  })

  it('renders step 2 description', () => {
    render(<HowWeWork />)
    expect(screen.getByText('Our engineers draft resilient, multi-cloud blueprints aligned to your compliance and performance requirements.')).toBeInTheDocument()
  })

  it('renders step 3 description', () => {
    render(<HowWeWork />)
    expect(screen.getByText('Phased rollout with zero-downtime migrations, automated testing, and real-time observability.')).toBeInTheDocument()
  })

  it('renders step 4 description', () => {
    render(<HowWeWork />)
    expect(screen.getByText('24/7 monitoring, proactive incident response, and quarterly architecture reviews.')).toBeInTheDocument()
  })
})
