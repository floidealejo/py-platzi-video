import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import CarruselCards from '../components/CarruselCards';
import '../assets/styles/general.scss';
import Categorie from '../components/Categorie';
import Card from '../components/Card';

function Home() {
  return (
    <>
      <Header />
      <Search />
      <Categorie>
        <CarruselCards>
          <Card />
        </CarruselCards>
      </Categorie>
      <Categorie>
        <CarruselCards>
          <Card />
        </CarruselCards>
      </Categorie>
    </>
  );
}

export default Home;
