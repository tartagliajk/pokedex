import React from "react";

const Pokeinfo = ({ data }) => {

    return (
        <>
            {
                (!data) ? "" : (
                    <>
                        <h1>{data.name}</h1>
                        <h2>ID: {data.id}</h2>
                        <div className="flex-info">
                            <div className="img-container">
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="sprite" className="sprite-img" />
                            </div>
                            <div>
                                <div className="abilities">
                                    {
                                        data.abilities.map(poke => { //map - used to store key and value pairs
                                            return (
                                                <>
                                                    <div className="group">
                                                        <h2>{poke.ability.name}</h2>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <div className="base-stat">
                                    {
                                        data.stats.map(poke => {
                                            return (
                                                <>
                                                    <div className="stats">
                                                        <h3 style={{ color: "white" }}>{poke.stat.name}:</h3>
                                                        <h3 style={{ color: "#6bb775" }}>{poke.base_stat}</h3>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

        </>
    )
}
export default Pokeinfo