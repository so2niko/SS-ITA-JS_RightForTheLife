import React, { useState } from 'react';
import { API } from '../../rootConstants';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';
import TabBar from '../../components/TabBar';
import { Select } from '../../components/Select';
import { CUDService } from '../../services/CUDService';
import { EditModeBar } from '../../components/EditModeBar';
import { cloneDeep } from 'lodash';

const DonatePage = ({ data: { title, manager, summary, paymentMethodsInfo, moneyTransferInfo } }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isEditModeBarOpen, setIsEditModeBarOpen] = useState(false);
  const [state, setState] = useState(data);

  const updateIsEdit = (value) => setIsEdit(value);
  const updateIsEditModeBarOpen = (value) => setIsEditModeBarOpen(value);
  const toggleEditStyle = (isEdit) => isEdit ? 'my-3 rounded-xl bg-gray-300 p-2 bg-orange-200' : '';

  const selectOptionChoseHandler = selectedOption => {
    switch (selectedOption) {
      case 'edit':
        setIsEditModeBarOpen(true);
        setIsEdit(true);
        break;
      case 'no-edit':
        setIsEditModeBarOpen(false);
        setIsEdit(false);
        break;
      default:
        return null;
    }
  };


  const stateSetters = {
    setText: (fieldName, name) => {
      const newState = { ...state };
      newState[fieldName] = name;
      setState({ ...newState });
      // data.manager = name;
      // setState({ ...data });
    },
    setPaymentMethod: (index, fieldName, value) => {
      const newState = cloneDeep(state);
      newState.paymentMethodsInfo.paymentMethods[index][fieldName] = value
      setState({ ...newState });
    },
    setAccount(index, account) {
      const newState = cloneDeep(state);
      newState.moneyTransferInfo.accounts[index] = account;
      setState({ ...newState });
    },
    setMoneyTransferInfo: (fieldName, text) => {
      const newState = cloneDeep(state);
      newState.moneyTransferInfo[fieldName] = text;
      setState({ ...newState });
    }
  };

  const {
    title,
    manager,
    summary,
    paymentMethodsInfo,
    moneyTransferInfo,
  } = data;

  return (
    <div className="text-lightgray-700">
      {!isEditModeBarOpen && <Select
        classNames="fixed z-50 top-0 right-0 mr-10 mt-20"
        chooseOptionHandler={selectOptionChoseHandler}
        optEdit
      />
      }

      <header className="mb-6">
        <h1 className="text-4xl uppercase font-bold">{title}</h1>
      </header>
      <section className="mb-5">
        <h2 className="text-2xl font-bold mb-3">
          Куратор мини-приюта — <span
            name="manager"
            className={toggleEditStyle(isEdit)}
            contentEditable={isEdit}
            suppressContentEditableWarning
            onBlur={e => stateSetters.setText(e.target.getAttribute('name'), e.target.innerText)}
          >
            {manager}
          </span>
        </h2>
        <p
          className={`text-lg ${toggleEditStyle(isEdit)}`}
          name="summary"
          style={{ whiteSpace: 'pre-wrap' }}
          contentEditable={isEdit}
          suppressContentEditableWarning
          onBlur={e => stateSetters.setText(e.target.getAttribute('name'), e.target.innerText)}
        >
          {summary}
        </p>
      </section>
      <TabBar
        isEdit={isEdit}
        updateIsEdit={updateIsEdit}
        isEditModeBarOpen={isEditModeBarOpen}
        updateIsEditModeBarOpen={updateIsEditModeBarOpen}
        paymentMethodsInfo={paymentMethodsInfo}
        moneyTransferInfo={moneyTransferInfo}
        stateSetters={stateSetters}
        isEdit={isEdit}
        toggleEditStyle={toggleEditStyle}
      />
    </div>
  );
};

const wrappedComponent = withFetchDataIndicators(DonatePage, API.DONATE);

export { wrappedComponent as DonatePage };
