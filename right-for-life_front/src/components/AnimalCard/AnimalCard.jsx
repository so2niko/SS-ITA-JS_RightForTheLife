import React from 'react';
import { Link } from 'react-router-dom';
import calcAge from '../../helpers/calcAge';

export const AnimalCard = (props) => {
  const { name, age, photos, _id } = props.animal;

  return (
    <li className="w-64 m-4 flex flex-col">
      <div className="z-40 pointer">
        <div className="h-56 rounded-xl bg-cover bg-top shadow-md"
             style={{ backgroundImage: 'url(' + photos[0] + ')' }} />
      </div>
      <div className="w-11/12 bg-white font-bold text-gray-700 text-center shadow-xl rounded-b-xl self-center">
        <p className="mt-2">{name}</p>
        <p className="font-medium">{calcAge(age)}</p>
        <button className="w-5/12 bg-green-300 hover:bg-green-400 text-green-700 font-bold py-2 px-2 rounded-xl mt-2 mb-4" style={{ outline: 'none'}}>
          Приютить
        </button>
        <Link to={'/animals/' + _id}>
          <button
            className="w-5/12 bg-orange-300 hover:bg-orange-400 text-orange-700 font-bold py-2 px-2 rounded-xl mt-2 mb-4 ml-2"
            style={{outline: 'none'}}>
            История
          </button>
        </Link>
      </div>
    </li>
  );
};