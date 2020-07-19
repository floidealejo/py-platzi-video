import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/footer.scss';

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <Link to='/'>Terminos de uso</Link>
        <Link to='/'>Declaración de privacidad</Link>
        <Link to='/'>Centro de ayuda</Link>
      </footer>
    </div>
  );
};

export default Footer;
