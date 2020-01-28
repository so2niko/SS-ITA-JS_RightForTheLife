import React from 'react'
import {Pagination} from "../../components/Pagination";
import {ErrorIndicator} from "../../components/ErrorIndicator";
import {Link} from "react-router-dom";

export const withPagination = (WrappedComponent, articlesPerPage) => (props) => {

  const requestedPageNum = extractAndCheckRequestedPage(props.data, articlesPerPage, props.location);
  if(!requestedPageNum) {
    return <ErrorIndicator
      message="Нет такой страницы"
      renderAction={() => <Link to={`${props.location.pathname}`}>Вернуться к первой странице</Link>}
    />
  }

  function handlePaginationPageChange(nextPage) {
    window.scrollTo(0, 0)
    props.history.push(`${props.location.pathname}?page=${nextPage}`);
  }

  return <>
    <WrappedComponent
      {...props}
      data = {trimDataForCurrentPage(props.data, requestedPageNum, articlesPerPage)}
      name = {WrappedComponent.name}
    />
    <Pagination
      classNames="mb-16"
      currentPageNum={requestedPageNum}
      totalPagesQuantity={Math.ceil(props.data.length / articlesPerPage)}
      pageChangeHandler={handlePaginationPageChange}
    />
  </>

  function extractAndCheckRequestedPage(articles, articlesPerPage, location) {
    const params = new URLSearchParams(location.search);
    const requestedPage = params.get("page");

    if(!requestedPage) {
      return 1
    }
    const requestedPageNum = Number(requestedPage);
    if(isNaN(requestedPageNum)) {
      return false;
    }
    if(requestedPageNum < 1 || requestedPageNum > Math.ceil(articles.length / articlesPerPage)) {
      return false
    }
    return requestedPageNum
  }

  function trimDataForCurrentPage(data, requestedPageNum, articlesPerPage) {
    const start = requestedPageNum * articlesPerPage - articlesPerPage;
    const end = requestedPageNum * articlesPerPage;
    return data.slice(start, end);
  }
}
