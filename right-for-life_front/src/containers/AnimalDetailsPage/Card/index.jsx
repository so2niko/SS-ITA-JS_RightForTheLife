import React, { useState, useEffect, useRef } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { PopUpContacts } from '../../../components/PopUpContacts';
import calcAge from '../../../helpers/calcAge';
import { Gallery } from './Gallery';
import './style.css';

export const Card = ({
  name,
  age,
  gender,
  photos,
  updateName,
  updateGender,
  updateAge,
  isEdit,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const nameRef = useRef();
  const genderRef = useRef();

  const showModal = () => {
    window.history.pushState(null, null, '#');
    setModalIsOpen(true);
  };
  const closeModal = () => setModalIsOpen(false);

  useEffect(() => {
    window.addEventListener('popstate', closeModal);
    return () => {
      window.removeEventListener('popstate', closeModal);
    };
  });

  return (
    <>
      {modalIsOpen && (
        <PopUpContacts handleShowingModal={() => window.history.back()} />
      )}
      <li className="animal-details-card w-full flex flex-col">
        <div className="pointer">
          <div className="rounded-b-xl sm:rounded-xl overflow-hidden shadow-lg z-0 relative -mx-3 sm:mx-0">
            {!isEdit && <Gallery photos={photos} />}
          </div>
        </div>
        <div className="w-11/12 p-4 bg-white text-gray-700 uppercase shadow-xl rounded-b-xl self-center">
          <div>
            <div className="flex justify-between items-center">
              <p
                className={`font-bold text-lg ${
                  isEdit ? 'px-2 bg-orange-200' : ''
                }`}
                contentEditable={isEdit}
                suppressContentEditableWarning
                ref={nameRef}
                onBlur={() => updateName(nameRef.current.innerText)}
              >
                {name}
              </p>

              {isEdit ? (
                <select
                  ref={genderRef}
                  className="appearance-none bg-white border border-orange-300 hover:border-orange-400 px-4 py-2 
                      rounded shadow leading-tight cursor-pointer"
                  onChange={() => updateGender(genderRef.current.value)}
                >
                  {gender === 'М' ? (
                    <>
                      <option value="М" selected>
                        Мальчик
                      </option>
                      <option value="Ж">Девочка</option>
                    </>
                  ) : (
                    <>
                      <option value="М">Мальчик</option>
                      <option value="Ж" selected>
                        Девочка
                      </option>
                    </>
                  )}
                </select>
              ) : (
                <p className="text-2xl">
                  {gender === 'М' ? (
                    <i className="fas fa-mars" />
                  ) : (
                    <i className="fas fa-venus" />
                  )}
                </p>
              )}
            </div>

            {isEdit ? (
              <DayPickerInput
                value={new Date(age)}
                onDayChange={day => updateAge(Date.parse(day))}
              />
            ) : (
              <p className="text-sm font-medium">{calcAge(age)}</p>
            )}

            {!isEdit && (
              <button
                onClick={showModal}
                className="animal-details__btn w-full font-bold py-2 px-2 rounded-xl mt-2 focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-700"
              >
                Приютить
              </button>
            )}
          </div>
        </div>
      </li>
    </>
  );
};
