import { Pokedex } from "./pokedex/Pokedex";
import { getPokemon } from "./API/pokeAPI";

export default async function Home() {
  const pokemonList = await getPokemon();
  return (
    <Pokedex pokemonList={pokemonList} />
  );
}
