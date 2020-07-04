import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import CarruselCards from '../components/CarruselCards';
import '../assets/styles/general.scss';
import Categorie from '../components/Categorie';
import Card from '../components/Card';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <Search />
      <Categorie title='Mi lista'>
        <CarruselCards>
          <Card />
        </CarruselCards>
      </Categorie>
      <Categorie title='Favoritos'>
        <CarruselCards>
          <Card />
        </CarruselCards>
      </Categorie>
      <Footer />
    </>
  );
}

export default Home;
