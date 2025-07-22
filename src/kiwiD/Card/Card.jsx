import React from 'react';
import './card.scss';

const Card = ({ children, className = '', ...props }) => (
  <div className={`kiwi-card ${className}`} {...props}>
    {children}
  </div>
);

export default Card;
