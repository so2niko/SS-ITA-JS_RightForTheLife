import React, { useState } from 'react';

export const EditModeBar = ({ state, onEdit }) => {
  const [isEdit, setIsEdit] = useState(true);

  return (
    <article className="fixed z-50 inset-x-0 bottom-0 flex justify-center py-2 text-sm shadow-xl bg-green-200">
      <section>
        <button
          className="mx-2 px-4 py-2 rounded-lg font-bold text-green-800 bg-green-300 hover:bg-green-400 uppercase"
          onClick={() => {
            setIsEdit(!isEdit);
            onEdit();
          }}
        >
          {isEdit ? 'Предпросмотр' : 'Редактировать'}
        </button>
      </section>
      <section>
        <button
          className="mx-2 px-4 py-2 rounded-lg font-bold text-green-800 bg-green-300 hover:bg-green-400 uppercase"
          onClick={() => {
            onEdit();
          }}
        >
          Сохранить
        </button>
        <button
          className="mx-2 px-4 py-2 rounded-lg font-bold text-green-800 bg-green-300 hover:bg-green-400 uppercase"
          onClick={() => {
            window.location.reload();
          }}
        >
          Отменить
        </button>
      </section>
    </article>
  );
};
