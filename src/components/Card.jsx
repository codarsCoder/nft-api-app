import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import nftImage from '../assets/ex-1.jpg'
const Card = () => {
    
    const [pokemon, setPokemon] = useState([])
    const [resume, setResume] = useState(false)
    const getPokemon = async(i)=> {
           const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
          const { name, base_experience, height, id, weight,types,short_effect } = data;
        const item = {name, base_experience, height, id, weight,types,short_effect}
             setPokemon(poke => [...poke,item])
    }  

    const initPokemon = async () => {
        for (let i = 1; i <= 300; i++) {
            getPokemon(i);
          if(i == 300){
            setResume(true)
          }
        }
      };
      const hello = ()=> {
        console.log(pokemon);
      }
     
    useEffect(() => {
     initPokemon()
    }, [])
    
    return (
        <div className="container d-flex  flex-wrap gap-3 justify-content-center mt-5">
            {
            resume && (         
                 pokemon.map((item,i) => {
                return(
                    <div key={i} className="nft-card-wrapper col-10 col-md-3 p-3 ">
                               <div className="nft-card-media rounded">
                               <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`} alt="axies" />
                                      
                                   <div className="whislist"><FaRegHeart className='text-white fs-5 me-1' />220</div>
                               </div>
                               <div className="nft-card-title"><h5 className='text-truncate'>{item.name} </h5><div className="tags">{item.types[0].type.name}</div></div>
                               <div className="meta-info">
                                   <div className="author">
                                       <div className="avatar">
                                           <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`} alt="axies" />
                                       </div>
                                       <div className="info">
                                           <span>Base experience</span>
                                           <h6> <a href="/authors-02">{item.base_experience}</a> </h6>
                                       </div>
                                   </div>
                                   <div className="price"><span>Weight</span>
                                       <p>{item.weight/10}kg</p></div>
                                   <div className="price"><span>Height</span>
                                       <p>{item.height*10}cm</p></div>
                               </div>
                           </div> 
               )
                              
                           }))
  }
           




        </div>
    )
}

export default Card