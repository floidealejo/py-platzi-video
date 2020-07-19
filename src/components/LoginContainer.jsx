import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/loginContainer.scss';

const LoginContainer = ({ children }) => {
  return (
    <>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        {children}
        <p className='login__container--register'>
          No tienes ninguna cuenta
          <Link to='/register'>Regístrate</Link>
        </p>
      </section>
    </>
  );
};

export default LoginContainer;
