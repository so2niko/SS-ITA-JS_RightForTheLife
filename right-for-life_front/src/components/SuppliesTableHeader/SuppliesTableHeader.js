import React from 'react';

const SuppliesTableHeader = () => {
  return (
    <thead>
      <tr className='text-2xl uppercase font-bold text-lightgray-700'>
        <th className='px-4 py-2'>Товар</th>
        <th className='px-4 py-2'>Тип</th>
        <th className='px-4 py-2'>Кол-во</th>
        <th className='px-4 py-2'>Инфо</th>
      </tr>
    </thead>
  );
};

export default SuppliesTableHeader;
