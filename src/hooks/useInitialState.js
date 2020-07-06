import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [conectado, setConectado] = useState(false);
  const [categorie, setCategorie] = useState([]);
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setVideos(data);
      setConectado(true);
      setCategorie(Object.keys(data));
    };
    fetchAPI();
  }, []);
  return [videos, categorie];
};

export default useInitialState;
