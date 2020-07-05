import React from 'react';
import '../assets/styles/categorie.scss';

function categorie({ children, title, id }) {
  return (
    <>
      {' '}
      <h3 className='categories__title' key={id}>
        {title}
      </h3>
      {children}
    </>
  );
}

export default categorie;
