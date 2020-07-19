import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/form.scss';

export default function Form() {
  return (
    <form className='login__container--form'>
      <input className='input' type='text' placeholder='Correo' />
      <input className='input' type='password' placeholder='Contraseña' />
      <Link className='button' to='/'>
        Iniciar sesión
      </Link>
      <section className='login__container--remember-me'>
        <input type='checkbox' id='cbox1' value='first_checkbox' />
        Recuérdame
        <Link to='/'>Olvidé mi contraseña</Link>
      </section>
    </form>
  );
}
