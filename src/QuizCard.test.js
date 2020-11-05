import QuizCard from './QuizCard'
import { render } from '@testing-library/react'
import user from '@testing-library/user-event'

describe('QuizCard', () => {
  it('renders correctly', () => {
    const { container } = render(<QuizCard question="Foo?" answer="Bar!" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('shows the question and answer texts', () => {
    const { getByText, queryByText, getByRole } = render(
      <QuizCard question="Foo?" answer="Bar!" />
    )
    expect(getByText(/foo/i)).toBeInTheDocument()
    expect(queryByText(/bar/i)).not.toBeInTheDocument()

    const button = getByRole('button', { name: 'Toggle answer' })
    user.click(button)

    expect(queryByText(/bar/i)).toBeInTheDocument()
  })
})
