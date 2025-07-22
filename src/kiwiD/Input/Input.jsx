import React from 'react';
import './input.scss';

const Input = ({ type = 'text', className = '', ...props }) => (
  <input type={type} className={`kiwi-input ${className}`} {...props} />
);

export default Input;
