import React from 'react';
import calcAge from '../heplers/calcAge';

const AnimalCard = (props) => {
  const { name, age, photos } = props.animal;

  return <li className="w-64 m-4 flex flex-col">
    <div className="z-40 pointer">
      <div className="h-56 rounded-lg bg-cover bg-top" style={{ backgroundImage: "url(" + photos[0] + ")" }}></div>
    </div>
    <div className="w-11/12 bg-gray-100 text-gray-700 font-bold text-center shadow-lg rounded-b-lg self-center">
      <p>{name}</p>
      <p>{calcAge(age)}</p>
      <button className="w-5/12 bg-green-300 hover:bg-green-400 text-green-700 font-bold py-2 px-2 rounded-lg mt-4 mb-2" style={{ outline: 'none'}}>
        Приютить
      </button>
      <button className="w-5/12 bg-orange-300 hover:bg-orange-400 text-orange-700 font-bold py-2 px-2 rounded-lg mb-4 ml-2" style={{ outline: 'none'}}>
        История
      </button>
    </div>
  </li >
}

export default AnimalCard;