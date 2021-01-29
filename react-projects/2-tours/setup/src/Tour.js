import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [isReadMore, setIsReadMore] = useState(false)
  return <article className="single-tour">
    <img src={image} alt={`${name}'s image`} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>
        {isReadMore ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setIsReadMore(!isReadMore)}>
          {isReadMore ? 'Show Less' : 'Read More'}
        </button>
      </p>
      <button className="delete-btn" onClick={() => removeTour(id)}>Not Interested</button>
    </footer>
  </article>;
};

export default Tour;
