import React from 'react';
import { connect } from 'react-redux';
import Icon from './Icon'
import { fetchPokemonsPage, displayModal } from '../actions';
import OnePokemonInList from './OnePokemonInList';
import PaginationBox from './PaginationBox';
import PokemonModal from './PokemonModal';
import history from '../history';
import numberOfPages from '../assets/numberOfPages.js';
import '../assets/PokemonList.css'

class PokemonList extends React.Component{
    componentDidMount(){
        this.props.fetchPokemonsPage(this.props.match.params.page || 1);
    }
    componentDidUpdate(prevProps) {
            // will be true
            const locationChanged = this.props.location !== prevProps.location;
            if(locationChanged){
                this.props.fetchPokemonsPage(this.props.match.params.page || 1);
            }
    }
    handleClick = (id) => {
        this.props.displayModal(id);
    }
    renderPokemons(){
        return this.props.pokemons.map(pokemon => <div onClick={() => this.handleClick(pokemon.id)} key={pokemon.id}><OnePokemonInList pokemon={pokemon}/></div>);
    }
    checkInvalidRoutes(maxPages) {
        if (this.props.match.params.page <= 0 || isNaN(Number(this.props.match.params.page))) {
            history.push('/pokemons/1');
        }
        if(this.props.match.params.page > maxPages){
            history.push(`/pokemons/${maxPages}`);
        }
    }
    render(){
        const pokemonsOnPage = 20;
        const maxPages = numberOfPages(this.props.allPokemonsCount, pokemonsOnPage);
        this.checkInvalidRoutes(maxPages)
        if (this.props.loading) {
            return <div> Loading </div>;
        }
        if(this.props.error){
            return <div> Error: {this.props.error.message} </div>
        }
        return(
            <div>
                <PokemonModal />
                <PaginationBox cl="pagination-top" currentPage={this.props.match.params.page || 1} maxPages={maxPages}/>
                <div className="columns mt-2 mb-4">    
                    {this.renderPokemons()}     
                </div>
                <PaginationBox currentPage={this.props.match.params.page || 1} maxPages={maxPages}/>
            </div>
            )   
        }   
        
}
const mapStateToProps = (state) => {
    return { pokemons: state.pokemonList.pokemons, loading: state.pokemonList.isLoading, error: state.pokemonList.error, allPokemonsCount: state.pokemonList.allPokemonsCount}
}
export default connect(mapStateToProps,{ fetchPokemonsPage, displayModal })(PokemonList);