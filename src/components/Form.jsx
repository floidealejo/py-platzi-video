import React from 'react';
import '../assets/styles/form.scss';

export default function Form() {
  return (
    <form className='login__container--form'>
      <input className='input' type='text' placeholder='Correo' />
      <input className='input' type='password' placeholder='Contraseña' />
      <button className='button'>Iniciar sesión</button>
      <section className='login__container--remember-me'>
        <input type='checkbox' id='cbox1' value='first_checkbox' />
        Recuérdame
        <a href='/'>Olvidé mi contraseña</a>
      </section>
    </form>
  );
}
