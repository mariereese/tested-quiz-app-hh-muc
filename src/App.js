const { default: QuizCard } = require('./QuizCard')

function App() {
  return (
    <div className="App">
      <QuizCard
        question="Lorem ipsum dolor sit amet, consectetur adipisicing elit?"
        answer="Voluptate id quis repudiandae, numquam molestias quae, aperiam quam sunt fuga at et sit vero unde quo dolores libero repellat, ut totam."
      />
      <QuizCard
        question="Voluptate id quis repudiandae, numquam molestias quae, aperiam quam sunt fuga?"
        answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit at et sit vero unde quo dolores libero repellat, ut totam."
      />
    </div>
  )
}

export default App
