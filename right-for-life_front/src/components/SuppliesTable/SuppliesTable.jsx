import React, { useState } from 'react';
import { API } from '../../rootConstants';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';
import SuppliesTableRow from '../SuppliesTableRow';
import './SuppliesTable.css';
import SuppliesCategoryButtons from '../SuppliesCategoryButtons';

const SuppliesTable = props => {
  const [category, setCategory] = useState(null);
  const getTableBody = suppliesArr => {
    return suppliesArr.map(el => {
      return <SuppliesTableRow itemData={el} key={el._id} />;
    });
  };

  const TableHeader = ({ hasAnyElements }) => {
    let headerRow = null;
    const trClass = 'text-2xl uppercase font-bold text-lightgray-700';

    if (hasAnyElements) {
      headerRow = (
        <tr className={trClass}>
          <th className='px-4 py-2'>Товар</th>
          <th className='px-4 py-2'>Тип</th>
          <th className='px-4 py-2 w-32'>Кол-во</th>
          <th className='px-4 py-2'>Инфо</th>
        </tr>
      );
    } else {
      headerRow = (
        <tr className={trClass}>
          <th className='px-4 py-2'>В данной категории нет товаров</th>
        </tr>
      );
    }

    return <thead>{headerRow}</thead>;
  };

  const categoryBtnHandlers = {
    onAllClick() {
      setCategory('all');
    },
    onFoodClick() {
      setCategory('Корма');
    },
    onProductsClick() {
      setCategory('Продукты');
    },
    onMedicineClick() {
      setCategory('Медикаменты');
    },
    onHouseholdClick() {
      setCategory('Хозяйственные нужды');
    },
    onNeedsClick() {
      setCategory('Важности и нужности');
    }
  };

  let table = null;
  if (category) {
    let { data } = props;
    if (category !== 'all') {
      data = data.filter(supply => supply.type === category);
    }
    table = (
      <table className='table-fixed mx-auto mt-6'>
        <TableHeader hasAnyElements={data.length} />
        <tbody>{getTableBody(data)}</tbody>
      </table>
    );
  }

  return (
    <div>
      <SuppliesCategoryButtons clickHandlers={categoryBtnHandlers} />
      {table}
    </div>
  );
};

export default withFetchDataIndicators(SuppliesTable, API.SUPPLIES);
