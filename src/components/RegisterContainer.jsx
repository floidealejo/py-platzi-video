import React from 'react';
import '../assets/styles/registerContainer.scss';
const RegisterContainer = ({ children }) => {
  return (
    <>
      <section className='register__container'>
        <h2>Regístrate</h2>
        {children}
        <a href='/'>Iniciar sesión</a>
      </section>
    </>
  );
};

export default RegisterContainer;
