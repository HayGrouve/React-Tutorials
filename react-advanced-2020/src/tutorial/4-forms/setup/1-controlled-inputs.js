import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [people, setPeople] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    setPeople(prevState => {
      return [...prevState, (`${firstName} ${lastName}`)]
    })
    setFirstName('')
    setLastName('')
  }
  return <>
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor='firstName'>First name: </label>
          <input
            type="text"
            id='firstName'
            name='firstName'
            value={firstName} onChange={(e) => { setFirstName(e.target.value) }}
          />
        </div>
        <div className="form-control">
          <label htmlFor='text'>Last name: </label>
          <input
            type="text"
            id='text'
            name='text'
            value={lastName} onChange={(e) => { setLastName(e.target.value) }}
          />
        </div>
        <button type='submit'>Add Person</button>
      </form>
    </article>
    {people.map(person => <h1>{person}</h1>)}
  </>
};

export default ControlledInputs;
