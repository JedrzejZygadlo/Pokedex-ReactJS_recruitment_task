import React from 'react';
import { connect } from 'react-redux';
import { fetchPokemons } from '../actions';

class PokemonList extends React.Component{
    componentDidMount(){
        this.props.fetchPokemons();
    }
    render(){
        console.log(this.props.pokemons);
        return (
            <div>
                PokemonList
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return { pokemons: state.pokemons}
}
export default connect(mapStateToProps,{ fetchPokemons })(PokemonList);