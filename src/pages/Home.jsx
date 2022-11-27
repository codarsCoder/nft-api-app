import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAllLikesWhis, getAlllikesWhis } from '../auth/firebase';
import Card from '../components/Card';


const Home = () => {
    const [pokemon, setPokemon] = useState([])
    const [nextUrl, SetNextUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")
    const [prevUrl, SetPrevUrl] = useState("")
    const [allLikeList, SetAllLikeList] = useState([])
    const getPokemon = async (props) => {

        setPokemon([])
        const { data } = await axios.get(props === "next" ? nextUrl : prevUrl)
        data.previous ?  SetPrevUrl(data.previous) : SetPrevUrl("https://pokeapi.co/api/v2/pokemon?limit=20")
         SetNextUrl(data.next) 
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
        getAllLikesWhis(SetAllLikeList)
    }, [])
    return (
        <div className="container d-flex  flex-wrap  justify-content-center mt-5">
            <div className="list-button w-100 col-12 mx-auto d-flex gap-2 justify-content-center">
                <button onClick={() => getPokemon("previev")} className='btn btn-secondary'>Previev</button>
                <button onClick={() => getPokemon("next")} className='btn btn-primary'>Next</button>
            </div>

            {
                pokemon.map((item, ind) => {
                    return (
                        <Card key={ind} {...item} pokemon={pokemon} allLikeList={allLikeList} />
                    )
                })
            }
        </div>
    )
}
export default Home
