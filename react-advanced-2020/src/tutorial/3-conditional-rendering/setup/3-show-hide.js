import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [isShow, setIsShow] = useState(false)
  return (
    <>
      <button className='btn' onClick={() => { setIsShow(!isShow) }}>Toggle</button>
      <div>{isShow && <Item />}</div>
    </>
  )
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)
  const changeSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', changeSize)
    return () => {
      window.removeEventListener('resize', changeSize)
    }
  }, [])
  return (
    <div>
      <h1>Window size: {size}</h1>
    </div>
  )
}

export default ShowHide;
