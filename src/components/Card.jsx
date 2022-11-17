import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import nftImage from '../assets/ex-1.jpg'
const Card = () => {

    const [pokemon, setPokemon] = useState([])
    const getPokemon = async(idd)=> {
           const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${idd}`)
           settPokemon(data)
    }  

    const settPokemon = async(data) => {
        const { name, base_experience, height, id, weight } = data;
        const item = {name, base_experience, height, id, weight};
       setPokemon([...pokemon, item])
        console.log(name);
    }
    const initPokemon = async () => {
        for (let i = 1; i <= 5; i++) {
          await getPokemon(i);
        }
      };
      
     
    useEffect(() => {
        initPokemon()
    
   
    }, [])
    
    return (
        <div className="container d-flex  flex-wrap gap-3 justify-content-center mt-5">
            {pokemon.map(item => {

                <div className="nft-card-wrapper col-10 col-md-4 col-lg-3 p-3 ">
                <div className="nft-card-media rounded">
                    <img src={nftImage} alt="" />
                    <div className="whislist"><FaRegHeart className='text-white fs-5 me-1' />220</div>
                </div>
                <div className="nft-card-title"><h5 className='text-truncate'>{item.name} </h5><div className="tags">ABC</div></div>
                <div className="meta-info">
                    <div className="author">
                        <div className="avatar">
                            <img src={nftImage} alt="axies" />
                        </div>
                        <div className="info">
                            <span>Creator</span>
                            <h6> <a href="/authors-02">SalvadorDali</a> </h6>
                        </div>
                    </div>
                    <div className="price"><span>Current Bid</span>
                        <h5> 4.89 ETH</h5></div>
                </div>
            </div> 
            })}
           




        </div>
    )
}

export default Card