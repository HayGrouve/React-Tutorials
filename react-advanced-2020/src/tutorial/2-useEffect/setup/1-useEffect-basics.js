import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    count !== 0 && (document.title = `New Messages (${count})`);
  }, [count])
  return (
    <>
      <h1>{count}</h1>
      <button className="btn" onClick={() => { setCount(prevState => prevState + 1) }}>Click Me</button>
    </>
  )

};

export default UseEffectBasics;
