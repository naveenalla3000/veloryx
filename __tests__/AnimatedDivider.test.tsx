import { render } from '@testing-library/react'
import AnimatedDivider from '@/components/AnimatedDivider'

describe('AnimatedDivider', () => {
  it('renders a progress-line element', () => {
    const { container } = render(<AnimatedDivider />)
    expect(container.querySelector('.progress-line')).toBeInTheDocument()
  })
})
