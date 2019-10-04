import React from 'react';
import { connect } from 'react-redux';
import Icon from './Icon'
import { fetchPokemonsPage } from '../actions';
import OnePokemonInList from './OnePokemonInList';
import '../assets/PokemonList.css'

class PokemonList extends React.Component{
    componentDidMount(){
        this.props.fetchPokemonsPage(this.props.match.params.page || 1);
    }
    renderTypes = (types) => {
        return types.map(type => {
            return <Icon iconType={type}/>
        })
    }
    renderPokemons(){
        return this.props.pokemons.map(pokemon => <OnePokemonInList pokemon={pokemon} key={pokemon.id}/>);
    }
    
    render(){
        if (this.props.loading) {
            return <div> Loading </div>;
        }
        if(this.props.error){
            return <div> Error: {this.props.error.message} </div>
        }
        return(
            <div className="columns">    
                {this.renderPokemons()}     
            </div>
            )   
        }   
        
}
const mapStateToProps = (state) => {
    return { pokemons: state.pokemonList.pokemons, loading: state.pokemonList.isLoading, error: state.pokemonList.error}
}
export default connect(mapStateToProps,{ fetchPokemonsPage })(PokemonList);