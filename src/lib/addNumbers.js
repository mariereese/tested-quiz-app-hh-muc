export default function addNumbers(...numbers) {
  return numbers.reduce((result, number) => {
    return result + number
  }, 0)

  // let result = 0
  // numbers.forEach((number) => (result += number))
  // return result
}
