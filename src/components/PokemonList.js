import React from 'react';
import { connect } from 'react-redux';
import Icon from './Icon'
import { fetchPokemons } from '../actions';
import OnePokemonInList from './OnePokemonInList';
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
        return this.props.pokemons.map(pokemon => <OnePokemonInList pokemon={pokemon} />);
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