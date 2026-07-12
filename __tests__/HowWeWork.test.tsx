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
})
