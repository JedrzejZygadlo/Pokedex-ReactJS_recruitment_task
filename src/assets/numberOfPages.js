const NumberOfPages = (allPokemonsCount, pokemonsOnPage) => {
    const pages = Math.ceil(allPokemonsCount/pokemonsOnPage);
    return pages;
}
export default NumberOfPages;