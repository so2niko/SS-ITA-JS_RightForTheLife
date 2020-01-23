import React from "react";
import cn from 'classnames';

export function Pagination ({classNames, currentPageNum, totalPagesQuantity, pageChangeHandler}) {

  const paginationContainerClasses = cn(
    'flex flex-wrap justify-center select-none',
    classNames,
    {
    'invisible': totalPagesQuantity < 2
    }
  );

  const pageButtonClasses = "cursor-pointer bg-white w-10 h-10 sm:w-12 sm:h-12 flex rounded-lg sm:rounded-full sm:mx-1 justify-center items-center border border-gray-400";

  const prevPageButtonClasses = cn(
    pageButtonClasses,
    {'invisible': currentPageNum === 1}
  );

  const nextPageButtonClasses = cn(
    pageButtonClasses,
    {'invisible': currentPageNum === totalPagesQuantity}
    );

  function handlePaginationElementClick(nextPage) {
    if(nextPage === 'forward') {
      pageChangeHandler(currentPageNum + 1)
    } else if(nextPage === 'backward') {
      pageChangeHandler(currentPageNum - 1)
    } else {
      pageChangeHandler(nextPage)
    }
  }


  function getPaginationPageButtons() {
    let buttons = [];
    let startPosition = 1;
    let endPosition = totalPagesQuantity;

    if (currentPageNum - 2 > 2) {
      buttons.push(
        <PaginationButton
          key={1}
          classNames={pageButtonClasses}
          pageNum={1}
          isActive={false}
          paginationElementClickHandler={handlePaginationElementClick}
        />
      );
      buttons.push(<PaginationDots key={2} />);
      startPosition = currentPageNum - 2;
    }

    if (currentPageNum + 2 < totalPagesQuantity - 1) {
      endPosition = currentPageNum + 2;
    }

    for (let i = startPosition; i <= endPosition; i += 1) {
      buttons.push(
        <PaginationButton
          key={i}
          classNames={pageButtonClasses}
          pageNum={i}
          isActive={currentPageNum === i}
          paginationElementClickHandler={handlePaginationElementClick}
        />
      );
    }

    if (currentPageNum + 2 < totalPagesQuantity - 1) {
      buttons.push(<PaginationDots key={totalPagesQuantity - 1}/>);
      buttons.push(
        <PaginationButton
          key={totalPagesQuantity}
          classNames={pageButtonClasses}
          pageNum={totalPagesQuantity}
          isActive={false}
          paginationElementClickHandler={handlePaginationElementClick}
        />
      );
    }

    return buttons;
  }

  return (
    <div className={paginationContainerClasses}>
      <PaginationStepButton
        classNames={prevPageButtonClasses}
        buttonType="backward"
        paginationElementClickHandler={handlePaginationElementClick}
      />
      {getPaginationPageButtons()}
      <PaginationStepButton
        classNames={nextPageButtonClasses}
        buttonType="forward"
        paginationElementClickHandler={handlePaginationElementClick}
      />
    </div>
  )
}


function PaginationButton({classNames, pageNum, isActive, paginationElementClickHandler}) {
  return (
    <div
      style={isActive ? {cursor: 'default'} : {}}
      className={cn(classNames, {'text-white bg-blue-500': isActive})}
      onClick={() => !isActive && paginationElementClickHandler(pageNum)}
    >
      {pageNum}
    </div>
  )
}


function PaginationStepButton({classNames, buttonType, paginationElementClickHandler}) {
  return (
    <div
      className={classNames}
      onClick={() => paginationElementClickHandler(buttonType)}
    >
      {buttonType === 'forward' ? '>' : '<'}
    </div>
  )
}

function PaginationDots() {
  return <div className='flex items-center mx-1 sm:mx-3 cursor-default'>. . .</div>
}