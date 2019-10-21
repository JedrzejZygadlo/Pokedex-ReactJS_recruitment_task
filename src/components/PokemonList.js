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
    pokemonsOnPage,
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

  const renderPokemons = () => pokemons.map(pokemon => (
      <div onClick={() => props.displayModal(pokemon.id)} key={pokemon.id}>
        <OnePokemonInList pokemon={pokemon} />
      </div>
  ));
  const maxPages = numberOfPages(allPokemonsCount, pokemonsOnPage);
  checkInvalidRoutes(maxPages, page);

  const renderContent = () => {
    switch(true){
      case isLoading:
        return <Spinner className="custom-spinner" color="primary" />;
      case error:
        return <Alert color="danger"> {error.message} </Alert>;
      case !allPokemonsCount:
        return <Alert color="danger"> {error.message} </Alert>;
      default:
        return (
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
        )
    }
  }

  return <>{renderContent()}</>;
};

export default connect(
  null,
  { fetchPokemonsPage, displayModal, fetchPokemonsByName }
)(PokemonList);
