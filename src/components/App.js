import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap'
import PokemonList from './PokemonList';
import PaginationBox from './PaginationBox';
import SinglePokemonInfo from './SinglePokemonInfo';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Container className="mt-4">
        <Switch>  
          <Route path="/" exact component= {PokemonList} />
          <Route path="/pokemons/:page" exact component={PokemonList}/>
          <Route path="/pokemon/:id" exact component={SinglePokemonInfo}/>
        </Switch>
      </Container>
    </BrowserRouter>
    </div>
  );
}

export default App;
