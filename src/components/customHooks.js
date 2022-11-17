import {useState} from "react"

export  const usePokemon = params => {
    const [pokemon, setPokemon] = useState([])

  const hadleChange = () => {
    setPokemon([...pokemon,params]);
    console.log(pokemon)
  }
  return [pokemon, hadleChange]
}

