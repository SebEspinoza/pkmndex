import Link from "next/link"
import { useState } from "react"

interface PokemonCardProps {
    name: string;
    id: number;
    types: string[];
}

interface TypeColors {
    [key: string]: string;
}

export function PokemonCard({ name, id, types }: PokemonCardProps) {
    const idFormatting = String(id).padStart(3, "0");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState<any>(null);


    const typeColors: TypeColors = {
        normal: "bg-[#9fa19f]",
        fighting: "bg-[#ff8000]",
        flying: "bg-[#81b9ef]",
        poison: "bg-[#9141cb]",
        ground: "bg-[#915121]",
        rock: "bg-[#afa981]",
        bug: "bg-[#91a119]",
        ghost: "bg-[#704170]",
        steel: "bg-[#60a1b8]",
        fire: "bg-[#e62829]",
        water: "bg-[#2980ef]",
        grass: "bg-[#3fa129]",
        electric: "bg-[#fac000]",
        psychic: "bg-[#ef4179]",
        ice: "bg-[#3dcef3]",
        dragon: "bg-[#5060e1]",
        dark: "bg-[#624d4e]",
        fairy: "bg-[#ef70ef]",
    }

    const getTypeColorClass = (type: string) => typeColors[type.toLowerCase()] || '';

    return (
        <Link href={`/${name}`} key={name + "Card"}>
            <div className="card w-50 bg-base-100 shadow-xl flex-col hover:bg-slate-900">
                <figure className="px-15 bg-[#373f4d]">
                    <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idFormatting}.png`} alt={name} className="rounded-xl" />
                </figure>
                <p className="text-gray-500 text-sm px-5">N°{idFormatting}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
                    <div>
                        {types.map(((type: any) => (
                            <p key={type} className={`badge ${getTypeColorClass(type)} m-2 text-white`}>{type.charAt(0).toUpperCase()}{type.slice(1)}</p>
                        )))}
                    </div>
                </div>
            </div>
        </Link>
    )
}