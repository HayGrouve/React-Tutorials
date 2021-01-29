import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const name = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name.current.value);
  }
  useEffect(() => {
    name.current.focus()
  })
  return <>
    <form className='form' onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" ref={name} />
      </div>
      <button className="btn">Submit</button>
    </form>
  </>;
};

export default UseRefBasics;
