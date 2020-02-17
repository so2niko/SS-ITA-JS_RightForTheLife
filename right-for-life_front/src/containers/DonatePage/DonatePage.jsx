import React from 'react';
import { API } from '../../rootConstants';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';
import TabBar from '../../components/TabBar';

const DonatePage = ({ data }) => {
  const {
    title,
    manager,
    summary,
    paymentMethodsInfo,
    moneyTransferInfo,
  } = data;

  return (
    <div className="text-lightgray-700">
      <header className="mb-6">
        <h1 className="text-4xl uppercase font-bold">{title}</h1>
      </header>
      <section className="mb-5">
        <h2 className="text-2xl font-bold mb-3">
          Куратор мини-приюта — {manager}
        </h2>
        <p className="text-lg">{summary}</p>
      </section>
      <TabBar
        paymentMethodsInfo={paymentMethodsInfo}
        moneyTransferInfo={moneyTransferInfo}
      />
    </div>
  );
};

const wrappedComponent = withFetchDataIndicators(DonatePage, API.DONATE);

export { wrappedComponent as DonatePage };
