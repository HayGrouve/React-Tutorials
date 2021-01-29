import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const handleClear = (id) => {
    setPeople(prevPeople => {
      return prevPeople.filter(person => person.id != id)
    })
  }
  return (
    <>
      <h2>useState array example</h2>
      {people.map(person => {
        return (
          <div className='item' key={person.id}>
            <h4>{person.name}</h4>
            <button className="btn" onClick={() => handleClear(person.id)}>Clear Person</button>
          </div>
        )
      })}
      <button className="btn" onClick={() => { setPeople([]) }}>Clear All</button>
    </>
  )
};

export default UseStateArray;
