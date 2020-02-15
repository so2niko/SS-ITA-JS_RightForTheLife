import React from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { useQuery } from '../../helpers/useQuery';
import { Pagination } from '../../components/Pagination';
import { ErrorIndicator } from '../../components/ErrorIndicator';

export const withPagination = (WrappedComponent, articlesPerPage) => props => {
  const query = useQuery();
  const history = useHistory();
  const location = useLocation();

  const requestedPageNum = extractAndCheckRequestedPage(
    props.data,
    articlesPerPage,
    location,
  );
  if (!requestedPageNum) {
    return (
      <ErrorIndicator
        message="Нет такой страницы"
        renderAction={() => (
          <Link to={`${location.pathname}`}>Вернуться к первой странице</Link>
        )}
      />
    );
  }

  function handlePaginationPageChange(nextPage) {
    window.scrollTo(0, 0);
    query.set('page', nextPage);
    history.push(`${location.pathname}?${query.toString()}`);
  }

  return (
    <>
      <WrappedComponent
        {...props}
        data={trimDataForCurrentPage(
          props.data,
          requestedPageNum,
          articlesPerPage,
        )}
      />
      <Pagination
        classNames="mb-14"
        currentPageNum={requestedPageNum}
        totalPagesQuantity={Math.ceil(props.data.length / articlesPerPage)}
        pageChangeHandler={handlePaginationPageChange}
      />
    </>
  );

  function extractAndCheckRequestedPage(articles, articlesPerPage) {
    const requestedPage = query.get('page');

    if (!requestedPage) {
      return 1;
    }
    const requestedPageNum = Number(requestedPage);
    if (isNaN(requestedPageNum)) {
      return false;
    }
    if (
      requestedPageNum < 1 ||
      requestedPageNum > Math.ceil(articles.length / articlesPerPage)
    ) {
      return false;
    }
    return requestedPageNum;
  }

  function trimDataForCurrentPage(data, requestedPageNum, articlesPerPage) {
    const start = requestedPageNum * articlesPerPage - articlesPerPage;
    const end = requestedPageNum * articlesPerPage;
    return data.slice(start, end);
  }
};
