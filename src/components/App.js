import React from 'react';
import { Container } from 'reactstrap'
import PokemonList from './PokemonList';

function App() {
  return (
    <Container className="mt-4">
      <PokemonList />
    </Container>
  );
}

export default App;
