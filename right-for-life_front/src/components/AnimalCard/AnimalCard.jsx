import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { PopUpContacts } from "../PopUpContacts";
import calcAge from '../../helpers/calcAge';

export const AnimalCard = (props) => {
  const { name, age, photos, id } = props.animal;
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  const handleShowingModal = () => {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <>
      { modalIsOpen && <PopUpContacts handleShowingModal={handleShowingModal} /> }
      <li className="flex flex-col w-full xl:w-1/4 lg:w-1/3 sm:w-1/2 p-4">
        <div className="z-40 pointer">
          <div 
            className="h-56 rounded-xl bg-cover bg-top shadow-lg" 
            style={{ backgroundImage: "url(" + photos[0] + ")" }} 
          />
        </div>
        <div className="w-11/12 bg-white font-bold text-gray-700 text-center shadow-lg rounded-b-xl self-center">
          <p className="mt-4 text-lg uppercase">{name}</p>
          <p className="mb-3 font-medium text-gray-600">{calcAge(age)}</p>
          <hr />
          <div className="flex p-3">
            <button 
              className="w-1/2 py-2 rounded-xl font-bold text-lg text-green-700 bg-green-200 hover:bg-green-300" 
              onClick={handleShowingModal}
              style={{ outline: 'none'}}>
              Приютить
            </button>
            <Link 
              to={"/animals/" + id} 
              className="w-1/2 ml-2">
              <button
                className="w-full py-2 rounded-xl font-bold text-lg text-orange-700 bg-orange-200 hover:bg-orange-300 "
                style={{outline: 'none'}}>
                История
              </button>
            </Link>
          </div>
        </div>
      </li>
    </>
  );
};
