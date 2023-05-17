import React from "react";
const Card = ({ pokemon, loading,infoPokemon}) => {
   // console.log(pokemon);
    return (
        <>
        {
            loading ? <h1>Loading...</h1> : //alternative to if-statement
                pokemon.map((item) => {
                    return (
                        <>
                            <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                                <h2>{item.name}</h2>
                                <img src={item.sprites.front_default} alt="sprites" /> 
                            </div>
                        </>
                    )
                })
        }
        </>
    )
}
export default Card;