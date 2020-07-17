import { useState, useEffect } from 'react';

const useInitialState = (API) => {
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
      setCategorie(Object.keys(data));
    };
    fetchAPI();
  }, []);
  return [videos, categorie];
};

export default useInitialState;
