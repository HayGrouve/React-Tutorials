import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h2>Thats not the page you are looking for!</h2>
        <Link to="/">
          <button className="btn btn-primary">&lt;Go Home</button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
