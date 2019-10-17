import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Spinner, Alert } from 'reactstrap';
import { fetchPokemonsPage, displayModal } from '../actions';
import OnePokemonInList from './OnePokemonInList';
import PaginationBox from './PaginationBox';
import PokemonModal from './PokemonModal';
import history from '../history';
import numberOfPages from '../assets/numberOfPages.js';
import '../assets/PokemonList.css';
import '../assets/Spinner.css';

const PokemonList = props => {
  const pokemonList = useSelector(state => state.pokemonList);
  const { pokemons, isLoading, error, allPokemonsCount } = pokemonList;
  const { page } = props.match.params;
  const { fetchPokemonsPage } = props;

  
  useEffect(() => {
    fetchPokemonsPage(page || 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchPokemonsPage(page || 1);
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
  } else if (error) {
    content = <Alert color="danger"> {error.message} </Alert>;
  } else {
    content = (
      <div>
        <PokemonModal />
        <PaginationBox
          cl="pagination-top"
          currentPage={page || 1}
          maxPages={maxPages}
        />
        <div className="columns mt-2 mb-4">{renderPokemons()}</div>
        <PaginationBox currentPage={page || 1} maxPages={maxPages} />
      </div>
    );
  }

  return <>{content}</>;
};

export default connect(
  null,
  { fetchPokemonsPage, displayModal }
)(PokemonList);
