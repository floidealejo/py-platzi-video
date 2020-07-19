import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const NotFound = () => {
  return (
    <>
      <Layout>
        <h1>Contenido no encontrado</h1>
        <Link to='/'>Regresa a casa</Link>
      </Layout>
    </>
  );
};

export default NotFound;
