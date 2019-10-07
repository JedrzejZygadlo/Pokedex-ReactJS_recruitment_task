import React from 'react';
import { connect } from 'react-redux';
import { Spinner, Alert } from 'reactstrap';
import { fetchPokemonsPage, displayModal } from '../actions';
import OnePokemonInList from './OnePokemonInList';
import PaginationBox from './PaginationBox';
import PokemonModal from './PokemonModal';
import history from '../history';
import numberOfPages from '../assets/numberOfPages.js';
import '../assets/PokemonList.css';
import '../assets/Spinner.css';

class PokemonList extends React.Component {
  componentDidMount() {
    const { page } = this.props.match.params;
    this.props.fetchPokemonsPage(page || 1);
  }
  componentDidUpdate(prevProps) {
    const { page } = this.props.match.params;
    const locationChanged = this.props.location !== prevProps.location;
    if (locationChanged) {
      this.props.fetchPokemonsPage(page || 1);
    }
  }
  handleClick = id => {
    this.props.displayModal(id);
  };
  renderPokemons() {
    const { pokemons } = this.props;
    return pokemons.map(pokemon => (
      <div onClick={() => this.handleClick(pokemon.id)} key={pokemon.id}>
        <OnePokemonInList pokemon={pokemon} />
      </div>
    ));
  }
  checkInvalidRoutes(maxPages, page) {
    if (page <= 0 || isNaN(Number(page))) {
      history.push('/pokemons/1');
    }
    if (page > maxPages) {
      history.push(`/pokemons/${maxPages}`);
    }
  }
  render() {
    const { page } = this.props.match.params;
    const { loading, error } = this.props;
    const pokemonsOnPage = 20;
    const maxPages = numberOfPages(this.props.allPokemonsCount, pokemonsOnPage);
    this.checkInvalidRoutes(maxPages, page);

    if (loading) {
      return <Spinner className="custom-spinner" color="primary" />;
    }
    if (error) {
      return <Alert color="danger"> {error.message} </Alert>;
    }
    return (
      <div>
        <PokemonModal />
        <PaginationBox
          cl="pagination-top"
          currentPage={page || 1}
          maxPages={maxPages}
        />
        <div className="columns mt-2 mb-4">{this.renderPokemons()}</div>
        <PaginationBox currentPage={page || 1} maxPages={maxPages} />
      </div>
    );
  }
}
const mapStateToProps = ({ pokemonList }) => {
  return {
    pokemons: pokemonList.pokemons,
    loading: pokemonList.isLoading,
    error: pokemonList.error,
    allPokemonsCount: pokemonList.allPokemonsCount
  };
};
export default connect(
  mapStateToProps,
  { fetchPokemonsPage, displayModal }
)(PokemonList);
