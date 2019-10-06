import React from 'react';
import { connect } from 'react-redux';

import SinglePokemonInfo from './SinglePokemonInfo';

class PokemonModal extends React.Component {
    render(){
        if(this.props.modal){
          return(
            <SinglePokemonInfo />
          )
        }
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        modal: state.singlePokemon.modal,
        modalId: state.singlePokemon.modalid
    }
}

export default connect(mapStateToProps)(PokemonModal)
