import React, { useState } from 'react';

export const EditModeBar = ({ state, onEdit }) => {
  const [open, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className={`fixed right-0 bottom-0 flex items-center justify-center h-14 w-14 m-10 rounded-full font-bold text-green-800 bg-green-200 ${!open ? 'visible' : 'invisible'}`}
        onClick={() => {
          setIsOpen(true);
          onEdit();
        }}>
        <i className="fas fa-pen text-xl" />
      </button>
      <article className={`fixed z-50 inset-x-0 bottom-0 flex justify-center py-2 text-sm shadow-xl bg-green-200 ${open ? 'visible' : 'invisible'}`}>
        <section>
          <button 
            className="mx-2 px-4 py-2 rounded-lg font-bold text-green-800 bg-green-300 uppercase"
            onClick={() => {
              onEdit();
            }}>
            Предпросмотр
          </button>
        </section>
        <section>
          <button 
            className="mx-2 px-4 py-2 rounded-lg font-bold text-green-800 bg-green-300 uppercase"
            onClick={() => {
              setIsOpen(false);
              onEdit();
              console.log(state);
            }}>
            Сохранить
          </button>
          <button 
            className="mx-2 px-4 py-2 rounded-lg font-bold text-green-800 bg-green-300 uppercase"
            onClick={() => {
              window.location.reload();
            }}>
            Отменить
          </button>
        </section>
      </article>
    </>
  );
};
