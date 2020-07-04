import React from 'react';
import '../assets/styles/categorie.scss';

function categorie({ children, title }) {
  return (
    <>
      {' '}
      <h3 className='categories__title'>{title}</h3>
      {children}
    </>
  );
}

export default categorie;
