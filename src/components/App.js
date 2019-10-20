import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import PokemonList from './PokemonList';
import Navbar from './Navbar.js';
import history from '../history';

function App() {
  return (
    <div>
      <Router history={history}>
        <Navbar />
        <Container className="mt-4">
          <Switch>
            <Route path="/" exact component={PokemonList} />
            <Route path="/pokemons/:page" exact component={PokemonList} />
            <Route path="/search/:searchValueParam/:page" exact component={PokemonList} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
