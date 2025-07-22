import React from 'react';
import { Link } from 'react-router';
import './footer.scss';

const Footer = () => (
  <footer className='footer'>
    <span>Copyright @Kiwi</span>
    <Link className='footer__demo-link' to='/demo'>
      Demo
    </Link>
  </footer>
);

export default Footer;
