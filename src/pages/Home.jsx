import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { useCurrentUser } from '../hooks/hooks';

const Home = () => {

    const [pokemon, setPokemon] = useState([])
    const [nextUrl, SetNextUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")
    const [prevUrl, SetPrevUrl] = useState("")

    const getPokemon = async (props) => {
    
        setPokemon([])
        const { data } = await axios.get(props === "next" ? nextUrl : prevUrl )
        SetNextUrl(data.next)
        SetPrevUrl(nextUrl)
        const createPokemon = (res) => {

            res.forEach(async (poke) => {
                const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
                await setPokemon(currenPokemon => [...currenPokemon, data])
            });
          
        }
        createPokemon(data.results)
    }
    
    useEffect(() => {
        getPokemon("next")
    }, [])
    return (
        <div className="container d-flex  flex-wrap  justify-content-center mt-5">
            <div className="list-button">
                <button onClick={() => getPokemon("previev")} className='btn btn-secondary'>Previev</button>
            <button onClick={() => getPokemon("next")} className='btn btn-primary'>Next</button>
            </div>
            
            {
                pokemon.map((item, ind) => {
                    return (
                        <Card key={ind} {...item} pokemon={pokemon}  />
                    )
                })
            }
        </div>
    )
}
export default Home
