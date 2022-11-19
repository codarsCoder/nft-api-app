import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
const Home = () => {

    const [pokemon, setPokemon] = useState([])
    const [nextUrl, SetNextUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")
    const [prevUrl, SetPrevUrl] = useState("")
    const [resume, setResume] = useState(false)

    const getPokemon = async () => {
        setResume(false)
        setPokemon([])
        const { data } = await axios.get(nextUrl)
        console.log(data.next);
        SetNextUrl(data.next)
        SetPrevUrl(data.previus)
        console.log(data);
        const createPokemon = (res) => {

            res.forEach(async (poke) => {
                const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
                await setPokemon(currenPokemon => [...currenPokemon, data])
                console.log(data)
            });
            setResume(true)
        }
        createPokemon(data.results)
    }

    useEffect(() => {
        getPokemon()
    }, [])
    return (
        <div className="container d-flex  flex-wrap  justify-content-center mt-5">
            <button onClick={() => getPokemon()} className='btn btn-primary'>Next</button>
            {
                pokemon.map((item, ind) => {
                    return (
                        <Card key={ind} {...item} />
                    )
                })
            }
        </div>
    )
}
export default Home
