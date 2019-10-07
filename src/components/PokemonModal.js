import React from 'react';
import { connect } from 'react-redux';

import SinglePokemonInfo from './SinglePokemonInfo';

class PokemonModal extends React.Component {
  render() {
    if (this.props.modal) {
      return <SinglePokemonInfo />;
    }
    return null;
  }
}

const mapStateToProps = ({ singlePokemon }) => {
  return {
    modal: singlePokemon.modal,
    modalId: singlePokemon.modalid
  };
};

export default connect(mapStateToProps)(PokemonModal);
