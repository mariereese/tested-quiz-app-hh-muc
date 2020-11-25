import { useEffect, useState } from 'react'
import Form from './Form'

const { default: QuizCard } = require('./QuizCard')

function App({ fetchMethod = fetch }) {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetchMethod('http://localhost:4000/questions')
      .then((res) => res.json())
      .then((questions) => setCards(questions))
  }, [])

  return (
    <div className="App">
      <Form onSubmitCard={addCard} />
      {cards.map(({ id, question, answer }) => (
        <QuizCard key={id} question={question} answer={answer} />
      ))}
    </div>
  )

  function addCard(card) {
    setCards([...cards, card])
  }
}

export default App
