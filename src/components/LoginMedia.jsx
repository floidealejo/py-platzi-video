import React from 'react';
import googleIcon from '../assets/images/google-icon.png';
import TwitterIcon from '../assets/images/twitter-icon.png';

import '../assets/styles/loginMedia.scss';

const LoginMedia = () => {
  return (
    <>
      <section className='login__container--social-media'>
        <a href>
          <img src={googleIcon} alt={googleIcon} />
          Inicia sesión con Google
        </a>
        <a href>
          <img src={TwitterIcon} alt={TwitterIcon} />
          Inicia sesión con Twitter
        </a>
      </section>
    </>
  );
};

export default LoginMedia;
