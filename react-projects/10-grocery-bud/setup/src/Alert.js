import React, { useEffect } from 'react';

const Alert = ({ msg, type, hideAlert, list }) => {
  useEffect(() => {
    const timing = setTimeout(() => {
      hideAlert();
    }, 1000);
    return () => {
      clearTimeout(timing);
    };
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
