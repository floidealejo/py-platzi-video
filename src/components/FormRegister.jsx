import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/formRegister.scss';

const FormRegister = () => {
  return (
    <div>
      <form className='register__container--form'>
        <input className='input' type='text' placeholder='Nombre' />
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        {/* <button type='submit' ></button> */}
        <Link to='/' className='button'>
          Registrarme
        </Link>
      </form>
    </div>
  );
};

export default FormRegister;
