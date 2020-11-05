export default function addNumbers(...numbers) {
  return numbers.reduce((result, number) => {
    return result + number
  }, 0)
}
