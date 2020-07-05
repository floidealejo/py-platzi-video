import React from 'react';
import '../assets/styles/carruselCards.scss';

function CarruselCards({ children, id }) {
  return (
    <>
      <section className='carousel' key={id}>
        <div className='carousel__container'>{children}</div>
      </section>
    </>
  );
}

export default CarruselCards;
