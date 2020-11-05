import addNumbers from './addNumbers'

describe('addNumbers', () => {
  it('adds two numbers', () => {
    const result = addNumbers(2, 3)
    expect(result).toBe(5)
  })

  it('returns the same number if only one param', () => {
    const result = addNumbers(8)
    expect(result).toEqual(8)
  })

  it('returns 0 if no params passed', () => {
    const result = addNumbers()
    expect(result).toEqual(0)
  })

  it('returns the sum of all params', () => {
    const result = addNumbers(10, 8, 2, 5)
    expect(result).toEqual(25)
  })
})
