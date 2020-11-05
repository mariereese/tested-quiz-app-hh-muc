import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function QuizCard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <Wrapper>
      <p>{question}</p>
      <button onClick={() => setShowAnswer(!showAnswer)}>Toggle answer</button>
      {showAnswer && <p>{answer}</p>}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 10px 10px 40px;
  padding: 20px;
  box-shadow: 0 10px 16px #0004;
`
