// Button.js
import React from 'react';
import './Button.css';

const Button = ({ label, onClick }) => {
  return (
    <button className="my-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
