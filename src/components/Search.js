import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  setPokemonListStatus,
  fetchPokemonsByName,
  setSearchValueInStore
} from '../actions';
import '../assets/Search.css';

const Search = ({ setSearchValueInStore, fetchPokemonsByName, setPokemonListStatus, searchValue }) => {
  const handleSubmit = () => {
    if (searchValue !== ''){
    fetchPokemonsByName(searchValue, 1);
    setPokemonListStatus('search', searchValue);
    }
  };
  const handleChange = (event) => {
    setSearchValueInStore(event.target.value)
  }
  return (
    <div className="rel">
      <form onSubmit={handleSubmit} className="searchBox">
        <input
          required
          className="searchInput"
          type="text"
          placeholder="Pokemon name..."
          onChange={event => handleChange(event)}
          value={searchValue || ''}
        ></input>
        <button className="searchButton" type="submit">
          <FontAwesomeIcon icon={['fas', 'search']} size="1x" />
        </button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { setPokemonListStatus, fetchPokemonsByName, setSearchValueInStore }
)(Search);
