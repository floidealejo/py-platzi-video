import React from 'react';
import '../assets/styles/categorie.scss';

function categorie({ children }) {
  return (
    <>
      {' '}
      <h3 className='categories__title'>Mi lista</h3>
      {children}
    </>
  );
}

export default categorie;
