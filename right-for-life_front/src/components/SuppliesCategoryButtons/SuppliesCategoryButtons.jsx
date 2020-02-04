import React from 'react';

const SuppliesCategoryButtons = ({ clickHandlers }) => {
  const {
    onAllClick,
    onFoodClick,
    onProductsClick,
    onMedicineClick,
    onHouseholdClick,
    onNeedsClick
  } = clickHandlers;

  const btnClass =
    'font-semibold rounded-xl p-3 my-2 bg-gray-400 hover:border-green-300 hover:bg-gray-700 hover:text-white focus:outline-none';
  return (
    <div className='flex flex-row justify-around flex-wrap mt-10 text-xl'>
      <button onClick={() => onAllClick()} className={btnClass}>
        Все <i className='fas fa-paw'></i>
      </button>
      <button onClick={() => onFoodClick()} className={btnClass}>
        Корма <i className='fas fa-bone'></i>
      </button>
      <button onClick={() => onProductsClick()} className={btnClass}>
        Продукты <i className='fas fa-utensils'></i>
      </button>
      <button onClick={() => onMedicineClick()} className={btnClass}>
        Медикаменты <i className='fas fa-pills'></i>
      </button>
      <button onClick={() => onHouseholdClick()} className={btnClass}>
        Хозяйственные нужды <i className='fas fa-hammer'></i>
      </button>
      <button onClick={() => onNeedsClick()} className={btnClass}>
        Важности и нужности <i className='fas fa-box-open'></i>
      </button>
    </div>
  );
};

export default SuppliesCategoryButtons;
