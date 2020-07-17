import React from 'react';
import '../assets/styles/formRegister.scss';

const FormRegister = () => {
  return (
    <div>
      <form className='register__container--form'>
        <input className='input' type='text' placeholder='Nombre' />
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button type='submit' className='button'>
          Registrarme
        </button>
      </form>
    </div>
  );
};

export default FormRegister;
