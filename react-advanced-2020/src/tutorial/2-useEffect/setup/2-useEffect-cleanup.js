import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)
  const changeSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', changeSize)
  }, [])
  return (
    <>
      <h1>Window size: {size}</h1>
    </>
  )
};

export default UseEffectCleanup;
