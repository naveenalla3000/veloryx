import { render, screen } from '@testing-library/react'
import RootLayout from '@/app/layout'

describe('RootLayout', () => {
  it('renders children', () => {
    render(<RootLayout><div data-testid="child">hello</div></RootLayout>)
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })
})
