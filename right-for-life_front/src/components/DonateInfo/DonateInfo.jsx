import React from 'react';

import { DonateButton } from '../DonateButton';

const PaymentMethod = ({ name, details, isEdit, setPaymentMethod, toggleEditStyle, index }) => {
  return (
    <section className="mb-3">
      <h3
        className={`text-lg font-bold mb-1 ${toggleEditStyle(isEdit)}`}
        name="name"
        contentEditable={isEdit}
        suppressContentEditableWarning
        onBlur={e => { setPaymentMethod(index, e.target.getAttribute('name'), e.target.innerText) }}
      >
        {name}
      </h3>
      <p
        name="details"
        className={toggleEditStyle(isEdit)}
        contentEditable={isEdit}
        suppressContentEditableWarning
        onBlur={e => setPaymentMethod(index, e.target.getAttribute('name'), e.target.innerText)}
      >
        {details}
      </p>
    </section>
  );
};

const MoneyTransfer = ({
  accounts,
  details,
  paymentPurpose,
  isEdit,
  toggleEditStyle,
  setAccount,
  setInfo }) => {
  return (
    <section className="moneyTransfer mb-5">
      <ul className="mb-2">
        {accounts.map((account, i) => (
          <li
            key={i}
            className={toggleEditStyle(isEdit)}
            contentEditable={isEdit}
            suppressContentEditableWarning
            onBlur={e => setAccount(i, e.target.innerText)}
          >
            {account}
          </li>
        ))}
      </ul>
      <pre
        className={`font-display mb-2 ${toggleEditStyle(isEdit)}`}
        name="details"
        contentEditable={isEdit}
        suppressContentEditableWarning
        onBlur={e => setInfo(e.target.getAttribute('name'), e.target.innerText)}
      // style={{ whiteSpace: 'pre-wrap' }}
      >
        {details}
      </pre>
      <p
        className={toggleEditStyle(isEdit)}
        name="paymentPurpose"
        contentEditable={isEdit}
        suppressContentEditableWarning
        onBlur={e => setInfo(e.target.getAttribute('name'), e.target.innerText)}
      >
        Назначение: <span className="italic">{paymentPurpose}</span>
      </p>
    </section>
  );
};

const DonateInfo = ({ paymentMethodsInfo, moneyTransferInfo, stateSetters, isEdit, toggleEditStyle }) => {
  if (paymentMethodsInfo) {
    return (
      <article className="payment_methods mt-10 text-center">
        <DonateButton />
        <h2 className="text-2xl font-bold mb-3">{paymentMethodsInfo.title}</h2>
        {paymentMethodsInfo.paymentMethods.map((method, i) => (
          <PaymentMethod
            key={i}
            index={i}
            {...method}
            setPaymentMethod={stateSetters.setPaymentMethod}
            isEdit={isEdit}
            toggleEditStyle={toggleEditStyle}
          />
        ))}
        <h3 className="text-lg font-bold mb-3">{moneyTransferInfo.title}</h3>
        <MoneyTransfer
          {...moneyTransferInfo}
          setAccount={stateSetters.setAccount}
          setInfo={stateSetters.setMoneyTransferInfo}
          isEdit={isEdit}
          toggleEditStyle={toggleEditStyle}
        />
        {isEdit? <input 
          className="bg-white focus:outline-none text-center focus:shadow-outline my-3 rounded-xl bg-gray-300 p-2 bg-orange-200 block w-full appearance-none leading-normal" 
          type="text" 
          placeholder="Token от ПриватБанка">
        </input> : null}
      </article>
    );
  }
  return null;
};

export default DonateInfo;
