"use client"
import React, { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";

interface PokedexProps {
    pokemonList: any;
}

export function Pokedex({ pokemonList }: PokedexProps) {
    const [search, setSearch] = useState("");
    const [pokemonPerPage] = useState(12);
    const [displayedPokemon, setDisplayedPokemon] = useState<any[]>([]);
    const [allLoaded, setAllLoaded] = useState(false);
    const [sortOption, setSortOption] = useState(0);
    const [sortedAndSearched, setSortedAndSearched] = useState<any[]>([]);


    useEffect(() => {
        const sortedAndSearchedList = searchPokemon(sortPokemon(pokemonList, sortOption), search);
        setSortedAndSearched(sortedAndSearchedList);
        setDisplayedPokemon(sortedAndSearchedList.slice(0, pokemonPerPage));
    }, [search, pokemonList, sortOption]);

    const sortPokemon = (pokemonList: any, sortOption: number) => {
        let sortedList = [...pokemonList];

        switch (sortOption) {
            case 0:
                sortedList.sort((a: any, b: any) => a.id - b.id);
                break;
            case 1:
                sortedList.sort((a: any, b: any) => a.id - b.id);
                sortedList.reverse();
                break;
            case 2:
                sortedList.sort((a: any, b: any) => a.name.localeCompare(b.name));
                break;
            case 3:
                sortedList.sort((a: any, b: any) => b.name.localeCompare(a.name));
                break;
            default:
                break;
        }
        return sortedList;
    };

    const searchPokemon = (pokemonList: any, search: string) => {
        return pokemonList.filter((pokemon: any) => {
            return pokemon.name.toLowerCase().includes(search.toLowerCase());
        });
    };

    const loadMore = () => {
        const nextSliceStart = displayedPokemon.length;
        const nextSliceEnd = nextSliceStart + pokemonPerPage;

        if (nextSliceEnd >= sortedAndSearched.length) {
            setAllLoaded(true);
        } else {
            const nextDisplayedPokemon = sortedAndSearched.slice(nextSliceStart, nextSliceEnd);
            setDisplayedPokemon([...displayedPokemon, ...nextDisplayedPokemon]);
        }
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(parseInt(e.target.value));
    };


    return (
        <>
            <div className="grid grid-cols-2">
                <div className="px-5">
                    <h3 className="text-2xl py-6 text-center text-black">Search for your Pokémon</h3>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            className="grow"
                            type="text"
                            value={search}
                            autoComplete="off"
                            placeholder="Pokémon Name..."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </label>
                </div>
                <div className="px-5">
                    <h3 className="text-2xl py-6 text-center text-black">Sort By</h3>
                    <select className="select select-bordered w-full" value={sortOption} onChange={handleSortChange}>
                        <option value={0}>Lowest Number (First)</option>
                        <option value={1}>Highest Number (First)</option>
                        <option value={2}>A-Z</option>
                        <option value={3}>Z-A</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 pt-5">
                {displayedPokemon.map((pokemon: any) => (
                    <PokemonCard
                        key={pokemon.name}
                        name={pokemon.name}
                        id={pokemon.url.split("/")[6]}
                        types={pokemon.types}
                    />
                ))}
            </div>
            <div className="pt-5">
                {!allLoaded && (
                    <button className="btn btn-active btn-primary" onClick={loadMore}>
                        Load More Pokémon
                    </button>
                )}
            </div>
        </>
    );
}