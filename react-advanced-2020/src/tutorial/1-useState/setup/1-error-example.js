import React, { useState, useEffect } from 'react';

const ErrorExample = () => {
  const [count, setCount] = useState(1)


  useEffect(() => {
    setTimeout(() => {

      setCount(prevState => {
        return prevState + 1
      });
    }, 2000)
  }, [count])
  return (
    <>
      <h2>useState error example</h2>
      <h1>{count}</h1>
      <button className='btn'>+ 1</button>
    </>
  )
};

export default ErrorExample;
