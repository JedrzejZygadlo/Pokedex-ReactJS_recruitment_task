import React from 'react';
import {
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';
import '../assets/PaginationBox.css';

const renderPages = (currentPage, maxPages) => {
    return [...Array(maxPages)].map((page, i) =>
              <PaginationItem active={i === currentPage-1} key={i}>
                <PaginationLink href={`/pokemons/${i+1}`}>
                  {i+1}
                </PaginationLink>
              </PaginationItem>
    )
}

const PaginationBox = ({maxPages, currentPage,cl}) => {
    const prevPage = Number(currentPage) - 1;
    const nextPage = Number(currentPage) + 1;
    
    return(
     <Pagination className={cl} size="lg" aria-label="Page navigation">
        <PaginationItem disabled={currentPage <= 1}>
          <PaginationLink first href="/pokemons/1" />
        </PaginationItem>
        <PaginationItem disabled={prevPage <= 0}>
          <PaginationLink previous href={`/pokemons/${prevPage}`} />
        </PaginationItem>
            {renderPages(currentPage,maxPages)}
        <PaginationItem disabled={nextPage > maxPages} >
          <PaginationLink next href={`/pokemons/${nextPage}`} />
        </PaginationItem>
        <PaginationItem disabled={currentPage >= maxPages}>
          <PaginationLink last href={`/pokemons/${maxPages}`} />
        </PaginationItem>
      </Pagination>
     )
}

export default PaginationBox;