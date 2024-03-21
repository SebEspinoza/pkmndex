import Link from "next/link";

export default async function PkmnPage({ params }: { params: { pkmnName: string } }) {
    const { pkmnName } = params;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmnName}`);
    const data = await res.json();
    const idFormatting = String(data.id).padStart(3, "0");
    return (
        <><div className="grid grid-cols-2">
            <div className="flex-col flex justify-center">
                <h1 className="text-4xl pt-10 text-center bg-[#373f4d]">{data.name[0].toUpperCase() + data.name.slice(1)}</h1>
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idFormatting}.png`} alt={data.name} className="bg-[#373f4d]" />

            </div>
            <div className="bg-slate-900">
                <div className="flex-col flex justify-center">
                    <h2 className="text-2xl pt-10 text-center">Type</h2>
                    <div className="flex justify-center">
                        {data.types.map((type: any) => (
                            <p key={type.type.name} className="badge m-2 text-white">{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</p>
                        ))}
                    </div>
                </div>
                <div className="flex-col flex justify-center">
                    <h2 className="text-2xl text-center">Abilities</h2>
                    <div className="flex justify-center">
                        {data.abilities.map((ability: any) => (
                            <p key={ability.ability.name} className="badge m-2 text-white">{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}</p>
                        ))}
                    </div>
                </div>
                <div className="flex-col flex justify-center">
                    <h2 className="text-2xl text-center">Weight</h2>
                    <div className="flex justify-center">
                        <p className="badge text-center text-white">{data.weight / 10}kg</p>
                    </div>
                </div>
                <div className="flex-col flex justify-center">
                    <h2 className="text-2xl text-center">Height</h2>
                    <div className="flex justify-center">
                        <p className=" badge text-center text-white">{data.height * 10}cm</p>
                    </div>
                </div>
            </div>
        </div><div className="gird">
                <Link href={'/'}>
                    <button className="btn btn-wide btn-success">Go back</button>
                </Link>
            </div></>
    )


}