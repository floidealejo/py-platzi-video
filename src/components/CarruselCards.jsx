import React from 'react';
import Card from './Card';
import '../assets/styles/carruselCards.scss';

function CarruselCards() {
  return (
    <>
      <section className='carousel'>
        <div className='carousel__container'>
          <Card />
        </div>
      </section>
    </>
  );
}

export default CarruselCards;
