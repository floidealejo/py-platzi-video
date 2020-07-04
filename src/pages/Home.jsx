import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import CarruselCards from '../components/CarruselCards';
import '../assets/styles/general.scss';

function Home() {
  return (
    <>
      <Header />
      <Search />
      <h3 className='categories__title'>Mi lista</h3>
      <CarruselCards />
    </>
  );
}

export default Home;
