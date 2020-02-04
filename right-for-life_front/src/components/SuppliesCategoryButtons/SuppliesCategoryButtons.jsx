import React from 'react';

const SuppliesCategoryButtons = ({ clickHandlers, activeCategory }) => {
  const {
    onAllClick,
    onFoodClick,
    onProductsClick,
    onMedicineClick,
    onHouseholdClick,
    onNeedsClick
  } = clickHandlers;

  const buttonsArr = [
    {
      name: 'all',
      label: 'Все',
      icon: <i className='fas fa-paw'></i>,
      onClickFunc() {
        onAllClick();
      }
    },
    {
      name: 'food',
      label: 'Корма',
      icon: <i className='fas fa-bone'></i>,
      onClickFunc() {
        onFoodClick();
      }
    },
    {
      name: 'products',
      label: 'Продукты',
      icon: <i className='fas fa-utensils'></i>,
      onClickFunc() {
        onProductsClick();
      }
    },
    {
      name: 'medicine',
      label: 'Медикаменты',
      icon: <i className='fas fa-pills'></i>,
      onClickFunc() {
        onMedicineClick();
      }
    },
    {
      name: 'household',
      label: 'Хозяйственные нужды',
      icon: <i className='fas fa-hammer'></i>,
      onClickFunc() {
        onHouseholdClick();
      }
    },
    {
      name: 'needs',
      label: 'Важности и нужности',
      icon: <i className='fas fa-box-open'></i>,
      onClickFunc() {
        onNeedsClick();
      }
    }
  ];

  const btnDefaultClass =
    'font-semibold rounded-xl p-3 my-2 focus:outline-none ';
  const btnActiveClass = 'bg-green-400 text-gray-200 ';
  const btnInactiveClass = 'bg-gray-400 hover:bg-gray-700 hover:text-white ';

  return (
    <div className='flex flex-row justify-around flex-wrap mt-10 text-xl'>
      {buttonsArr.map((btn, idx) => {
        const btnClass = `${btnDefaultClass}${
          activeCategory === btn.name ? btnActiveClass : btnInactiveClass
        }`;
        return (
          <button onClick={btn.onClickFunc} className={btnClass} key={idx}>
            {btn.label} {btn.icon}
          </button>
        );
      })}
    </div>
  );
};

export default SuppliesCategoryButtons;
