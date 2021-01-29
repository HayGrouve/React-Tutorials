import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [isError, setIsError] = useState(false)
  const [list, setList] = useState(new Values('green').all(10))
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setColor('')
      setIsError(false)
      setList(colors)
    } catch (error) {
      setIsError(true)
      console.error(error);
    }
  }
  return <>
    <section className="container">
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={`${isError ? 'error' : null}`}
          value={color} onChange={(e) => { setColor(e.target.value) }}
          placeholder='#333'
        />
        <button className="btn">submit</button>
      </form>
    </section>
    <section className="colors">
      {list.map((color, index) => {
        return <SingleColor key={index} {...color} index={index} />
      })}
    </section>
  </>
}

export default App
