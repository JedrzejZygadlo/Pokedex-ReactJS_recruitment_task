import React from 'react';
import {
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';

const PaginationBox = (props) => {
    console.log(props);
    return(
     <Pagination aria-label="Page navigation example">
      <PaginationItem>
          <PaginationLink first href="/pokemons/1" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/pokemons/1">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/pokemons/2">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/pokemons/3">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/pokemons/4">
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/pokemons/5">
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/pokemons/6">
            6
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/pokemons/7">
            7
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/pokemons/8">
            8
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="/pokemons/5" />
        </PaginationItem>
      </Pagination>
     )
}

export default PaginationBox;