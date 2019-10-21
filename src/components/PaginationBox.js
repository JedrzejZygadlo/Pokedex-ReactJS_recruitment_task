import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import '../assets/PaginationBox.css';

const PaginationBox = ({ maxPages, currentPage, cl, status, searchValue }) => {
  const prevPage = Number(currentPage) - 1;
  const nextPage = Number(currentPage) + 1;
  let dest = 'pokemons';
  if (status === 'search' || window.location.pathname.includes('search')) {
    dest = `search/${searchValue}`;
  }
  return (
    <Pagination className={cl} size="lg" aria-label="Page navigation">
      <PaginationItem disabled={currentPage <= 1}>
        <PaginationLink first href={`/${dest}/1`} />
      </PaginationItem>
      <PaginationItem disabled={prevPage <= 0}>
        <PaginationLink previous href={`/${dest}/${prevPage}`} />
      </PaginationItem>
      {renderPages(currentPage, maxPages, dest)}
      <PaginationItem disabled={nextPage > maxPages}>
        <PaginationLink next href={`/${dest}/${nextPage}`} />
      </PaginationItem>
      <PaginationItem disabled={currentPage >= maxPages}>
        <PaginationLink last href={`/${dest}/${maxPages}`} />
      </PaginationItem>
    </Pagination>
  );
};
const renderPages = (currentPage, maxPages, dest) => {
  return [...Array(maxPages)].map((page, i) => (
    <PaginationItem active={i === currentPage - 1} key={i}>
      <PaginationLink href={`/${dest}/${i + 1}`}>{i + 1}</PaginationLink>
    </PaginationItem>
  ));
};
export default PaginationBox;
