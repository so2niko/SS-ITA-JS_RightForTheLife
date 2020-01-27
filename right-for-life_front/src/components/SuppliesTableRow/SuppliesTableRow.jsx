import React from 'react';

const SuppliesTableRow = ({ itemData }) => {
  const { name, type, info, amount } = itemData;

  return (
    <tr>
      <td className='border px-4 py-2 rounded-lg capitalize text-center bg-gray-400'>
        {name}
      </td>
      <td className='border px-4 py-2 rounded-lg capitalize text-center bg-gray-400'>
        {type}
      </td>
      <td className='border px-4 py-2 rounded-lg capitalize text-center bg-gray-400'>
        {amount}
      </td>
      <td className='border px-4 py-2 rounded-lg text-center bg-gray-400'>
        {info}
      </td>
    </tr>
  );
};

export default SuppliesTableRow;
