import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map(person => {
        return <div key={person.id} className='person'>
          <h2>{person.name}</h2>
        </div>
      })}
    </>
  );
};

export default List;
