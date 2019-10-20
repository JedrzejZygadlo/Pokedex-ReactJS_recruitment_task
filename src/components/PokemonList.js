import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Spinner, Alert } from 'reactstrap';
import {
  fetchPokemonsPage,
  displayModal,
  fetchPokemonsByName
} from '../actions';
import OnePokemonInList from './OnePokemonInList';
import PaginationBox from './PaginationBox';
import PokemonModal from './PokemonModal';
import Search from './Search';
import history from '../history';
import numberOfPages from '../assets/numberOfPages.js';
import '../assets/PokemonList.css';
import '../assets/Spinner.css';

const PokemonList = props => {
  const pokemonList = useSelector(state => state.pokemonList);
  const {
    pokemons,
    isLoading,
    error,
    allPokemonsCount,
    status,
    searchValue
  } = pokemonList;
  const { page, searchValueParam } = props.match.params;
  const { fetchPokemonsPage, fetchPokemonsByName } = props;

  useEffect(() => {
    if (status || window.location.pathname.includes('search')) {
      fetchPokemonsByName(searchValueParam, page);
    } else {
      fetchPokemonsPage(page || 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location]);

  const checkInvalidRoutes = (maxPages, page) => {
    if (page <= 0 || isNaN(Number(page))) {
      history.push('/pokemons/1');
    }
    if (page > maxPages) {
      history.push(`/pokemons/${maxPages}`);
    }
  };

  const renderPokemons = () => {
    return pokemons.map(pokemon => (
      <div onClick={() => props.displayModal(pokemon.id)} key={pokemon.id}>
        <OnePokemonInList pokemon={pokemon} />
      </div>
    ));
  };

  const pokemonsOnPage = 20;
  const maxPages = numberOfPages(allPokemonsCount, pokemonsOnPage);
  checkInvalidRoutes(maxPages, page);
  let content;

  if (isLoading) {
    content = <Spinner className="custom-spinner" color="primary" />;
  } else if (error || allPokemonsCount === 0) {
    content = <Alert color="danger"> {error.message} </Alert>;
  } else {
    content = (
      <div>
        <PokemonModal />
        <Search searchValue={searchValue} />
        <PaginationBox
          cl="pagination-top"
          currentPage={page || 1}
          maxPages={maxPages}
          status={status}
          searchValue={searchValueParam}
        />
        <div className="columns mt-2 mb-4">{renderPokemons()}</div>
        <PaginationBox
          currentPage={page || 1}
          maxPages={maxPages}
          status={status}
          searchValue={searchValueParam}
        />
      </div>
    );
  }

  return <>{content}</>;
};

export default connect(
  null,
  { fetchPokemonsPage, displayModal, fetchPokemonsByName }
)(PokemonList);
