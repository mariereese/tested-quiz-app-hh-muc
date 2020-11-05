import { useState } from 'react'
import Form from './Form'

const { default: QuizCard } = require('./QuizCard')

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
      answer:
        'Voluptate id quis repudiandae, numquam molestias quae, aperiam quam sunt fuga at et sit vero unde quo dolores libero repellat, ut totam.',
    },
  ])

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
