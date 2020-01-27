import React from 'react'
import {Pagination} from "../../components/Pagination";
import {ErrorIndicator} from "../../components/ErrorIndicator";
import {Link} from "react-router-dom";

export const withPagination = (WrappedComponent) => (props) => {
  const articlesPerPage = 10;
  console.log(props)
  const requestedPageNum = extractAndCheckRequestedPage(props.match, props.data, articlesPerPage);
  if(!requestedPageNum) {
    return <ErrorIndicator
      message="Нет такой страницы"
      renderAction={() => <Link to="/stories">Вернуться на первую страницу</Link>}
    />
  }

  function handlePaginationPageChange(nextPage) {
    props.history.push(`/stories/page/${nextPage}`);
  }

  return <>
    <WrappedComponent {...props} />
    <Pagination
      classNames="mb-16"
      currentPageNum={requestedPageNum}
      totalPagesQuantity={Math.ceil(props.data.length / articlesPerPage)}
      pageChangeHandler={handlePaginationPageChange}
    />
  </>

  function extractAndCheckRequestedPage(match, articles, articlesPerPage) {
    if(!match.params.requestedPage) {
      return 1
    }
    const requestedPageNum = Number(match.params.requestedPage);
    if(isNaN(requestedPageNum)) {
      return false;
    }
    if(requestedPageNum < 1 || requestedPageNum > Math.ceil(articles.length / articlesPerPage)) {
      return false
    }
    return requestedPageNum
  }
}
