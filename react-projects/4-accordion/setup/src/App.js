import React, { useState } from 'react';
import { AiFillProject } from 'react-icons/ai';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data)
  return <main>
    <div className="container">
      <h3>Q&A about login</h3>
      <section className="info">
        {questions.map(question => <SingleQuestion key={question.id} {...question} />)}
      </section>
    </div>
  </main>
}

export default App;