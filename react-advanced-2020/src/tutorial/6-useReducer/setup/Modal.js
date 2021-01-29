import React, { useEffect } from 'react';
const Modal = ({ modelContext, closeModel }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModel()
    }, 1500)
  })
  return <div className='modal'>{modelContext}</div>;
};

export default Modal;
