import React from 'react';
import '../assets/styles/carruselCards.scss';

function CarruselCards({ children }) {
  return (
    <>
      <section className='carousel'>
        <div className='carousel__container'>{children}</div>
      </section>
    </>
  );
}

export default CarruselCards;
