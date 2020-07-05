/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import CarruselCards from '../components/CarruselCards';
import '../assets/styles/general.scss';
import Categorie from '../components/Categorie';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Home = () => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });
  const [conectado, setConectado] = useState(false);
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch('http://localhost:3001/initalState');
      const data = await response.json();
      if (response.status) {
        setVideos(data);
        setConectado(true);
        // console.log('Respuesta', response);
      } else {
        console.log('Error al conectarse');
      }
    };
    fetchAPI();
  }, []);
  return videos.length === 0 ? (
    <h1>Cargando...</h1>
  ) : (
    <>
      <Header />
      <Search />
      {videos.mylist.length > 0 ? (
        <Categorie title={Object.keys(videos)['Lista']}>
          <CarruselCards>
            <Card />
          </CarruselCards>
        </Categorie>
      ) : (
        <Categorie>
          <CarruselCards>{}</CarruselCards>
        </Categorie>
      )}
      {Object.values(videos).map((index) => (
        <Categorie title={Object.keys(videos)[index]}>
          <CarruselCards>
            {videos.originals.map((item) => {
              return (
                <Card
                  key={item.id}
                  title={item.title}
                  cover={item.cover}
                  year={item.year}
                  contentRating={item.contentRating}
                  duration={item.duration}
                />
              );
            })}
            ;
          </CarruselCards>
        </Categorie>
      ))}
    </>
  );
};

export default Home;
