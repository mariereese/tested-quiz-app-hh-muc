import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Form from './Form'

describe('Form', () => {
  it('shows two textareas and a button', () => {
    const handleSubmitCard = jest.fn()

    const { getByLabelText, getByRole } = render(
      <Form onSubmitCard={handleSubmitCard} />
    )
    const questionInput = getByLabelText(/question/i)
    const answerInput = getByLabelText(/answer/i)
    const button = getByRole('button', { name: /create/i })

    expect(questionInput).toBeInTheDocument()
    expect(answerInput).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    user.type(questionInput, 'Foo?')
    user.type(answerInput, 'Bar')
    user.click(button)

    expect(handleSubmitCard).toHaveBeenCalledWith({
      question: 'Foo?',
      answer: 'Bar',
    })
  })
})
