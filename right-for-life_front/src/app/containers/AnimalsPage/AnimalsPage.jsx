import React, { useState, useEffect } from 'react';
import AnimalsList from '../../components/AnimalsList/AnimalsList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AnimalsPage = (props) => {
  const dataApi = "https://alex-boklag.github.io/SSA-Demo-AnimalShelter/db/animals.json";
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch(dataApi)
      .then(data => data.json())
      .then(list => setAnimals(list));
  }, []);
    
  return (
    <div className="animals-page bg-lightgray-300">
      <Header />
      <AnimalsList animals={animals} />
      <Footer />
    </div>
  );
}

export default AnimalsPage;