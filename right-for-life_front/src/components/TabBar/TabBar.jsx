import React, { useState } from 'react';

import Tab from '../Tab';
import DonateInfo from '../DonateInfo';
import SuppliesTable from '../SuppliesTable';

const TabBar = ({ stateSetters, paymentMethodsInfo, moneyTransferInfo, isEdit, toggleEditStyle }) => {
  const tabLabels = ['Помочь деньгами', 'Нужды приюта'];
  const [activeTab, setActiveTab] = useState(tabLabels[0]);

  const onTabClick = tabLabel => setActiveTab(tabLabel);

  return (
    <div>
      <ul className="flex">
        {tabLabels.map(label => (
          <Tab
            key={label}
            label={label}
            onClick={onTabClick}
            active={label === activeTab}
          />
        ))}
      </ul>
      <div>
        {activeTab === tabLabels[0] ? (
          <DonateInfo
            paymentMethodsInfo={paymentMethodsInfo}
            moneyTransferInfo={moneyTransferInfo}
            stateSetters={stateSetters}
            isEdit={isEdit}
            toggleEditStyle={toggleEditStyle}
          />
        ) : (
            <SuppliesTable />
          )}
      </div>
    </div>
  );
};

export default TabBar;
