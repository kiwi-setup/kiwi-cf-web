import React from 'react';
import './button.scss';

const Button = ({ children, className = '', ...props }) => (
  <button className={`kiwi-btn ${className}`} {...props}>
    {children}
  </button>
);

export default Button;
