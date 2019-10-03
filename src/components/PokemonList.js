import React from 'react';
import { connect } from 'react-redux';
import Icon from './Icon'
import { fetchPokemons } from '../actions';
import './PokemonList.css'

class PokemonList extends React.Component{
    componentDidMount(){
        this.props.fetchPokemons();
    }
    renderTypes = (types) => {
        return types.map(type => {
            return <Icon iconType={type}/>
        })
    }
    renderPokemons(){
        console.log(this.props.pokemons);
        
        return this.props.pokemons.map(pokemon => {
            return(
                <div key={pokemon.id}>
                    <img src={pokemon.img} alt={pokemon.id}/>
                    <h1>#{pokemon.num} {pokemon.name}</h1>
                    {this.renderTypes(pokemon.type)}
                </div>
            )
        })
    }
    
    render(){
        if (!this.props.pokemons.length) {
            return <div>Loading</div>;
        }
        return(
            <div className="columns">    
                {this.renderPokemons()}     
            </div>
            )   
        }   
        
}
const mapStateToProps = (state) => {
    console.log(state.pokemons);
    return { pokemons: state.pokemons}
}
export default connect(mapStateToProps,{ fetchPokemons })(PokemonList);