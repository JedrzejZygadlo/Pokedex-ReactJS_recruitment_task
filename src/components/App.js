import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap'
import PokemonList from './PokemonList';
import PaginationBox from './PaginationBox';

function App() {
  return (
    <div>
    <BrowserRouter>
      <PaginationBox />
      <Container className="mt-4">
        <Switch>  
          <Route path="/" exact component= {PokemonList} />
          <Route path="/pokemons/:page" exact component={PokemonList}/>
        </Switch>
      </Container>
    </BrowserRouter>
    </div>
  );
}

export default App;
