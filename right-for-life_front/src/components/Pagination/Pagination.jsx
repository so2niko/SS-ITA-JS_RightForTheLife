import React from "react";
import cn from 'classnames';

export function Pagination ({currentPageNum, totalPagesQuantity, pageChangeHandler}) {

  const paginationContainerClasses = cn(
    'flex flex-wrap justify-center',
    {
    'invisible': totalPagesQuantity < 2
    }
  )

  const prevPageButtonClasses = cn({
    'invisible': currentPageNum === 1
  })

  const nextPageButtonClasses = cn({
    'invisible': currentPageNum === totalPagesQuantity
  })

  function handlePaginationElementClick(nextPage) {
    pageChangeHandler(nextPage);
  }


  function getPaginationPageButtons() {
    let buttons = [];
    let startPosition = 1;
    let endPosition = totalPagesQuantity;

    if (currentPageNum - 2 > 2) {
      buttons.push(
        <PaginationButton
          key={1}
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
};


function PaginationButton({pageNum, isActive, paginationElementClickHandler}) {
  return (
    <div
      className={cn(
        'bg-white',
        {'bg-blue-500 text-white': isActive}
      )}
      onClick={() => !isActive && paginationElementClickHandler(pageNum)}
    >
      {pageNum}
    </div>
  )
}


function PaginationStepButton({classNames, buttonType, paginationElementClickHandler}) {
  return (
    <div
      className={cn(
        'bg-white',
        classNames
      )}
      onClick={() => paginationElementClickHandler(buttonType)}
    >
      {buttonType === 'forward' ? '>' : '<'}
    </div>
  )
}

function PaginationDots() {
  return <div>...</div>
}