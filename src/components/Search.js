import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setPokemonListStatus, fetchPokemonsByName, setSearchValueInStore } from '../actions';
import '../assets/Search.css';

const Search = props => {
    const {setSearchValueInStore ,fetchPokemonsByName, setPokemonListStatus, searchValue } = props;
    const handleClick = () => {
        fetchPokemonsByName(searchValue, 1);
        setPokemonListStatus('search', searchValue);
    }

    return(
        <div className="rel">
        <form onSubmit={handleClick} className="searchBox">
            <input className="searchInput" type="text" placeholder="Pokemon name..." onChange={(e) => setSearchValueInStore(e.target.value)} value={searchValue}></input> 
            <button className="searchButton" type="submit" onClick={handleClick}>
                <FontAwesomeIcon
                    icon={['fas', 'search']}
                    size="1x"
                />
            </button>
        </form>
        </div>
    )
}

export default connect(
  null,
  { setPokemonListStatus, fetchPokemonsByName, setSearchValueInStore }
)(Search);