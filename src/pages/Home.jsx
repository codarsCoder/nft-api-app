import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

const Home = () => {

    const [pokemon, setPokemon] = useState([])
    const [resume, setResume] = useState(false)

    const getPokemon = async (idd) => {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idd}`)
        const { name, base_experience, height, id, weight, types, short_effect } = data;
        const item = { name, base_experience, height, id, weight, types, short_effect }
        setPokemon(poke => [...poke, item])
    }

    const initPokemon = async () => {
        for (let i = 1; i <= 10; i++) {
            getPokemon(i);
            if (i == 10) {
                setResume(true)
            }
        }
    };

    useEffect(() => {
        initPokemon()
    }, [])
    return (
        <div className="container d-flex  flex-wrap  justify-content-center mt-5">
            {
                resume && (
                    pokemon.map((item, ind) => {
                     
                        return (  
                             
                            <Card key={ind} {...item} />
                        )
                    })
                )
            }
        </div>
    )
}
export default Home