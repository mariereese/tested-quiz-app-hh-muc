import App from './App'
import { render } from '@testing-library/react'

describe('App', () => {
  it('fetches our questions on start', () => {
    const fetchMock = jest.fn()
    fetchMock.mockImplementation(() => {
      return {
        then: () => ({
          then: (callback) =>
            callback([{ id: 1, question: 'foo?', answer: 'bar' }]),
        }),
      }
    })

    const { getAllByText } = render(<App fetchMethod={fetchMock} />)

    expect(fetchMock).toHaveBeenCalledWith('http://localhost:4000/questions')
  })
})
