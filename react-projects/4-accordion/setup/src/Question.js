import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) => {
  const [isShowAnswer, setIsShowAnswer] = useState(false)
  return <article className="question">
    <header>
      <h4>{title}</h4>
      <button className="btn"
        onClick={() => setIsShowAnswer(!isShowAnswer)}>
        {isShowAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
    </header>
    <p>{isShowAnswer ? info : ''}</p>
  </article>
};

export default Question;



