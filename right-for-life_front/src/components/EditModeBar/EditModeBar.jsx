import React, { useState, useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { isEqual } from 'lodash';
import { EditModeBarDialog } from './EditModeBarDialog';

const initialState = { isEdit: true, isSave: false, isLeave: false };

const reducer = (state, action) => {
  switch (action.type) {
    case 'BAR_ON_PREVIEW':
      return { ...state, isEdit: !state.isEdit };
    case 'BAR_ON_SAVE':
      return { ...state, isEdit: false, isSave: true };
    case 'BAR_ON_CANCEL':
      return { ...state, isLeave: true };
    case 'MODAL_ON_SAVE':
      return { ...state, isEdit: false, isSave: false };
    case 'MODAL_ON_UNSAVE':
      return { isEdit: true, isSave: false, isLeave: false };
    default:
      return state;
  }
};

export const EditModeBar = ({ data, onEdit }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [oldData, setOldData] = useState(null);
  const history = useHistory();
  const unblockHistory = history.block(
    `${
      !isEqual(data, oldData) ? 'Есть НЕ СОХРАНЕННЫЕ изменения!' : ''
    } Вы уверенны, что хотите ВЫЙТИ из режима редактрования?`,
  );

  useEffect(() => {
    setOldData({ ...data });
    return () => unblockHistory();
  }, []);

  return (
    <article className="fixed z-50 inset-x-0 bottom-0 flex justify-center py-2 text-sm shadow-xl bg-green-200">
      <section>
        <button
          className="mx-2 px-4 py-2 rounded-lg font-bold text-green-800 bg-green-300 hover:bg-green-400 uppercase"
          onClick={() => {
            dispatch({ type: 'BAR_ON_PREVIEW' });
            onEdit();
          }}
        >
          {state.isEdit ? 'Предпросмотр' : 'Редактировать'}
        </button>
      </section>
      <section>
        {!isEqual(data, oldData) && (
          <button
            className="mx-2 px-4 py-2 rounded-lg font-bold text-green-800 bg-green-300 hover:bg-green-400 uppercase"
            onClick={() => {
              dispatch({ type: 'BAR_ON_SAVE' });
            }}
          >
            Сохранить
          </button>
        )}
        <button
          className="mx-2 px-4 py-2 rounded-lg font-bold text-green-800 bg-green-300 hover:bg-green-400 uppercase"
          onClick={() => {
            dispatch({ type: 'BAR_ON_CANCEL' });
          }}
        >
          Отменить
        </button>
      </section>

      {state.isSave && (
        <EditModeBarDialog
          message="Вы уверенны что хотите СОХРАНИТЬ изменения?"
          onTrue={() => {
            unblockHistory();
            history.goBack();
            console.log(data);
          }}
          onFalse={() => {
            dispatch({ type: 'MODAL_ON_UNSAVE' });
          }}
        />
      )}

      {state.isLeave && (
        <EditModeBarDialog
          message={`${
            !isEqual(data, oldData) ? 'Есть НЕ СОХРАНЕННЫЕ изменения!' : ''
          } Вы уверенны, что хотите ВЫЙТИ из режима редактрования?`}
          onTrue={() => {
            unblockHistory();
            history.goBack();
          }}
          onFalse={() => {
            dispatch({ type: 'MODAL_ON_UNSAVE' });
          }}
        />
      )}
    </article>
  );
};
