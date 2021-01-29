import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { reducer } from './reducer'

const Index = () => {
  const initialState = {
    people: [],
    isModelOpen: false,
    modelContext: ''
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const [name, setName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'ADD_PERSON', payload: newPerson })
      setName('')
    } else {
      dispatch({ type: 'NO_NAME' })
    }
  }
  const closeModel = () => {
    dispatch({ type: 'HIDE_MESSAGE' })
  }
  return <>
    {state.isModelOpen && <Modal modelContext={state.modelContext} closeModel={closeModel} />}
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name} onChange={(e) => { setName(e.target.value) }}
      />
      <button className="btn">Submit</button>
    </form>
    {state.people.map(person => {
      return <div key={person.id} className='item'>
        <h4>{person.name}</h4>
        <button onClick={() => { dispatch({ type: 'REMOVE_PERSON', payload: person.id }) }}>X</button>
      </div>
    })}
  </>;
};

export default Index;
