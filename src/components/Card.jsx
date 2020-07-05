import React from 'react';
import '../assets/styles/card.scss';
import plus from '../assets/images/plus-icon.png';
import play from '../assets/images/play-icon.png';

function Card({ id, cover, title, year, contentRating, duration }) {
  return (
    <>
      <article className='carousel-item' id={id}>
        <img className='carousel-item__img' src={cover} alt={title} />
        <div className='carousel-item__details'>
          <div>
            <img
              className='carousel-item__details--img'
              src={play}
              alt='Play Icon'
            />
            <img
              className='carousel-item__details--img'
              src={plus}
              alt='Plus Icon'
            />
          </div>
          <p className='carousel-item__details--title'>{title}</p>
          <p className='carousel-item__details--subtitle'>
            {`${year} ${contentRating} ${duration} minutos`}
          </p>
        </div>
      </article>
    </>
  );
}

export default Card;
