import React from 'react';
import { connect } from 'react-redux';

import { fetchSinglePokemon } from '../actions';

class SinglePokemonInfo extends React.Component {
    componentDidMount(){
        this.props.fetchSinglePokemon(this.props.match.params.id);
    }
    render(){
        if(this.props.loading) {
            console.log('loading');
            return <div> Loading </div>
        }
        if(this.props.error) {
            return <div> Error: {this.props.error.message} </div>
        }
        return(
            <div>
                Modal
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.singlePokemon.isLoading);
    return {
        loading: state.singlePokemon.isLoading,
        error: state.singlePokemon.error,
        singlePokemon: state.singlePokemon.pokemonInfo
        
    }
}

export default connect(mapStateToProps, { fetchSinglePokemon })(SinglePokemonInfo)
