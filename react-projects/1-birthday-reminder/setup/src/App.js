import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  return <section className='section'>
    <h1>{people.length} birthdays today</h1>
    <List people={people} />
    <button onClick={() => { setPeople([]) }}>Clear list</button>
  </section>;
}

export default App;
