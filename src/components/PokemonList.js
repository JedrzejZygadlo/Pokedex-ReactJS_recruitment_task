import React from 'react';
import { connect } from 'react-redux';
import Icon from './Icon'
import { fetchPokemonsPage, displayModal } from '../actions';
import OnePokemonInList from './OnePokemonInList';
import PaginationBox from './PaginationBox';
import '../assets/PokemonList.css'
import PokemonModal from './PokemonModal';

class PokemonList extends React.Component{
    componentDidMount(){
        this.props.fetchPokemonsPage(this.props.match.params.page || 1);
    }
    renderTypes = (types) => {
        return types.map(type => {
            return <Icon iconType={type}/>
        })
    }
    handleClick = (id) => {
        this.props.displayModal(id);
    }
    renderPokemons(){
        return this.props.pokemons.map(pokemon => <div onClick={() => this.handleClick(pokemon.id)}><OnePokemonInList pokemon={pokemon} key={pokemon.id}/></div>);
    }
    
    render(){
        if (this.props.loading) {
            return <div> Loading </div>;
        }
        if(this.props.error){
            return <div> Error: {this.props.error.message} </div>
        }
        return(
            <div>
                <PokemonModal />
                <PaginationBox cl="pagination-top" currentPage={this.props.match.params.page || 1} allPokemonsCount={this.props.allPokemonsCount}/>
                <div className="columns mt-2 mb-4">    
                    {this.renderPokemons()}     
                </div>
                <PaginationBox currentPage={this.props.match.params.page || 1} allPokemonsCount={this.props.allPokemonsCount}/>
            </div>
            )   
        }   
        
}
const mapStateToProps = (state) => {
    return { pokemons: state.pokemonList.pokemons, loading: state.pokemonList.isLoading, error: state.pokemonList.error, allPokemonsCount: state.pokemonList.allPokemonsCount}
}
export default connect(mapStateToProps,{ fetchPokemonsPage, displayModal })(PokemonList);