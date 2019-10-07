const numberOfPages = (allPokemonsCount, pokemonsOnPage) => {
  return Math.ceil(allPokemonsCount / pokemonsOnPage);
};
export default numberOfPages;
