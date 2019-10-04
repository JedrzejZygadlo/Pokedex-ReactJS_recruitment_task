import React from 'react';
import {
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';
import '../assets/PaginationBox.css';
import numberOfPages from '../assets/numberOfPages.js';
const renderPages = (currentPage) => {
    return [...Array(8)].map((page, i) => 
              <PaginationItem active={i === currentPage-1} key={i}>
                <PaginationLink href={`/pokemons/${i+1}`}>
                  {i+1}
                </PaginationLink>
              </PaginationItem>
    )
}

const PaginationBox = (props) => {
    console.log(props.currentPage);
    const pokemonsOnPage = 20;
    const maxpage = numberOfPages(props.allPokemonsCount,pokemonsOnPage)
    const prevPage = Number(props.currentPage) - 1;
    const nextPage = Number(props.currentPage) + 1;
    return(
     <Pagination size="lg" aria-label="Page navigation">
        <PaginationItem disabled={props.currentPage <= 1}>
          <PaginationLink first href="/pokemons/1" />
        </PaginationItem>
        <PaginationItem disabled={prevPage <= 0}>
          <PaginationLink previous href={`/pokemons/${prevPage}`} />
        </PaginationItem>
            {renderPages(props.currentPage)}
        <PaginationItem disabled={nextPage > maxpage} >
          <PaginationLink next href={`/pokemons/${nextPage}`} />
        </PaginationItem>
        <PaginationItem disabled={props.currentPage >= maxpage}>
          <PaginationLink last href="/pokemons/8" />
        </PaginationItem>
      </Pagination>
     )
}

export default PaginationBox;