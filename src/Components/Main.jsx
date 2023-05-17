import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
/*arrow function for fetching the data*/
const Main=()=>{
    const [pokeData,setPokeData]=useState([]); //usestate = returns an arr with two values
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/") //api link
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

    const pokeFunction=async()=>{ //await - temporarliy pause the function until resolved 
        setLoading(true)
        const res=await axios.get(url); //axios is used to make HTTP requests
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon=async(res)=>{
       res.map(async(item)=>{
          const result=await axios.get(item.url)
          setPokeData(state=>{
              state=[...state,result.data] //... - means that the arr saved from before will have vaules added to instead of rewritten
              state.sort((a,b)=>a.id>b.id?1:-1) //sorts the items based on id 
              return state;
          })
       })   
    }
    useEffect(()=>{ //useEffect - performs side effects in the componenet, ex fetching data 
        pokeFunction();
    },[url])
    return(
        <>  
            <h1>Pokédex</h1>
            <div className="container">
                <div className="left-content">
                    <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
                    <div className="btn-group">
                        {  prevUrl && <button onClick={()=>{
                            setPokeData([])
                           setUrl(prevUrl) 
                        }}>Previous</button>}
                        { nextUrl && <button onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}
                    </div>
                </div>
                <div className="right-content">
                   <Pokeinfo data={pokeDex}/>
                </div>
            </div>
        </>
    )
}
export default Main;