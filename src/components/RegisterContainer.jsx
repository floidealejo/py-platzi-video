import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/registerContainer.scss';
const RegisterContainer = ({ children }) => {
  return (
    <>
      <section className='register__container'>
        <h2>Regístrate</h2>
        {children}
        <Link to='/Login'>Iniciar sesión</Link>
      </section>
    </>
  );
};

export default RegisterContainer;
