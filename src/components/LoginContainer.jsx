import React from 'react';
import '../assets/styles/loginContainer.scss';

const LoginContainer = ({ children }) => {
  return (
    <>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        {children}
        <p className='login__container--register'>
          No tienes ninguna cuenta
          <a href='/'>Regístrate</a>
        </p>
      </section>
    </>
  );
};

export default LoginContainer;
