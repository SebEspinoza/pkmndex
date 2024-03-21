//getPokemon 
export async function getPokemon() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1025');
    const pokemonData = await res.json();

    const pokemonList = await Promise.all(
        pokemonData.results.map(async (pokemon: any) => {
            const pokemonDetailsRes = await fetch(pokemon.url);
            const pokemonDetails = await pokemonDetailsRes.json();
            return {
                ...pokemon,
                types: pokemonDetails.types.map((type: any) => type.type.name),
            };
        })
    );

    return pokemonList;
}
