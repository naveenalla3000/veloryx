import { render, screen } from '@testing-library/react'
import CoreModalities from '@/components/CoreModalities'

describe('CoreModalities', () => {
  it('renders section heading', () => {
    render(<CoreModalities />)
    expect(screen.getByRole('heading', { name: /Core Modalities/i })).toBeInTheDocument()
  })

  it('renders all three card headings', () => {
    render(<CoreModalities />)
    expect(screen.getByText('Strategic Planning')).toBeInTheDocument()
    expect(screen.getByText('Digital Transformation')).toBeInTheDocument()
    expect(screen.getByText(/Cloud Solutions/i)).toBeInTheDocument()
  })

  it('renders progress bar label', () => {
    render(<CoreModalities />)
    expect(screen.getByText('85% Complete')).toBeInTheDocument()
  })

  it('renders card labels', () => {
    render(<CoreModalities />)
    expect(screen.getByText(/01 \/\/ Foundation/i)).toBeInTheDocument()
    expect(screen.getByText(/02 \/\/ Evolution/i)).toBeInTheDocument()
    expect(screen.getByText(/03 \/\/ Infrastructure/i)).toBeInTheDocument()
  })
})
