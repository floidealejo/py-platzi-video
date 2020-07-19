import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/images/google-icon.png';
import TwitterIcon from '../assets/images/twitter-icon.png';

import '../assets/styles/loginMedia.scss';

const LoginMedia = () => {
  return (
    <>
      <section className='login__container--social-media'>
        <Link to='/'>
          <img src={googleIcon} alt={googleIcon} />
          Inicia sesión con Google
        </Link>
        <Link to='/'>
          <img src={TwitterIcon} alt={TwitterIcon} />
          Inicia sesión con Twitter
        </Link>
      </section>
    </>
  );
};

export default LoginMedia;
