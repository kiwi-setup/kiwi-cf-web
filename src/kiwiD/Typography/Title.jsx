import React from 'react';
import './title.scss';

const Title = ({ children, level = 1, className = '', ...props }) => {
  const Tag = `h${level}`;
  return (
    <Tag className={`kiwi-title ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export default Title;
