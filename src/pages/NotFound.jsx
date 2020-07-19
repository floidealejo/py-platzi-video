import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>Contenido no encontrado</h1>
      <Link to='/'>Regresa a casa</Link>
    </>
  );
};

export default NotFound;
