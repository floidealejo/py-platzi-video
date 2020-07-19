import React from 'react';
import '../assets/styles/header.scss';
import { Link } from 'react-router-dom';
import user from '../assets/images/user-icon.png';
import logo from '../assets/images/logo-platzi-video-BW2.png';

const Header = () => {
  return (
    <>
      <header className='header'>
        <Link to='/'>
          <img className='header__img' src={logo} alt='Platzi Video..' />
        </Link>
        <div className='header__menu'>
          <div className='header__menu--profile'>
            <img src={user} alt='user..' />
            <p>Perfil</p>
          </div>
          <ul>
            <li>
              <Link to='/register'>Cuenta</Link>
            </li>
            <li>
              <Link to='/'>Cerrar Sesión</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
