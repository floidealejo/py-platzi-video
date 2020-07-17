/* eslint-disable function-paren-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable array-callback-return */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import CarruselCards from '../components/CarruselCards';
import '../assets/styles/general.scss';
import Categorie from '../components/Categorie';
import Card from '../components/Card';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

const API = ' http://localhost:8080/initalState';
const Home = () => {
  const [videos, categories] = useInitialState(API);
  if (videos.length === 0) {
    return <h1>Cargando...</h1>;
  }
  return (
    <>
      <Header />
      <Search />
      {categories.map((category) =>
        videos[category].length > 0 ? (
          <Categorie title={category}>
            <CarruselCards>
              {videos[category].map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  cover={item.cover}
                  year={item.year}
                  contentRating={item.contentRating}
                  duration={item.duration}
                />
              ))}
            </CarruselCards>
          </Categorie>
        ) : (
          <Categorie title={category}>
            <CarruselCards>{}</CarruselCards>
          </Categorie>
        ),
      )}
      <Footer />
    </>
  );
};
export default Home;
