import React, { useState, useRef } from 'react';
import {useClickAway} from 'react-use';
import cn from 'classnames';

export const Select = ({classNames, optAdd, optEdit, optDelete, optPinToHomePage, chooseOptionHandler}) => {

  const [isSelectOpened, setIsSelectOpened] = useState(false);
  const componentRef = useRef(null);
  useClickAway(componentRef, () => setIsSelectOpened(false));

  function handleSelectListClick(event) {
    chooseOptionHandler(event.target.dataset.role);
    setIsSelectOpened(false);
  }


  return (
    <>
      {optAdd ? (
        <div
          className={`relative inline-block ${classNames}`}
        >
          <i
            onClick={() => chooseOptionHandler('add')}
            className="fas fa-plus text-2xl cursor-pointer w-12 h-12 rounded-full flex justify-center items-center shadow-xl bg-white"
          />
        </div>
      ) : (
        <div
          ref={componentRef}
          className={`relative inline-block ${classNames}`}
        >
          <i
            onClick={() => !isSelectOpened && setIsSelectOpened(true)}
            className="fas fa-pencil-alt text-2xl cursor-pointer w-12 h-12 rounded-full flex justify-center items-center shadow-xl bg-white"
          />
          <ul
            className={cn({'block' : isSelectOpened}, {'hidden' : !isSelectOpened}, "absolute bottom-0 right-0")}
            onClick={handleSelectListClick}
          >
            {optEdit ? <SelectOption role="edit" label="Редактировать" /> : null}
            {optPinToHomePage ? <SelectOption role="pinToHomePage" label="Прикрепить на главную" /> : null}
            {optDelete ? <SelectOption role="delete" label="Удалить" /> : null}
          </ul>
        </div>
      )}
    </>
  )
}

function SelectOption({role, label}) {
  return (
    <li
      data-role={role}
      className=""
    >
      {label}
    </li>
  )
}