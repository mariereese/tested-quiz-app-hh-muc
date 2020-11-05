import QuizCard from './QuizCard'
import { render } from '@testing-library/react'

describe('QuizCard', () => {
  it('renders correctly', () => {
    const { debug, container } = render(
      <QuizCard question="Foo?" answer="Bar!" />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
