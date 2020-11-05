import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Form({ onSubmitCard }) {
  const [formData, setFormData] = useState({ question: '', answer: '' })

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <label>
        Question:
        <textarea
          value={formData.question}
          onChange={handleChange}
          name="question"
        />
      </label>
      <label>
        Answer:
        <textarea
          value={formData.answer}
          onChange={handleChange}
          name="answer"
        />
      </label>
      <button>Create</button>
    </FormWrapper>
  )

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitCard(formData)
  }
}

const FormWrapper = styled.form`
  display: grid;
  gap: 20px;

  textarea {
    margin-left: 10px;
  }
`
