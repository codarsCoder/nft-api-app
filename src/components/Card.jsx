import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";

const Card = ({ name, base_experience, height, id, weight, types }) => {
console.log(name);

    return (
        
            <div  className="nft-card-wrapper col-10 col-md-6 col-xl-3 p-3 ">
                <div className="nft-card-content">
                    <div className="nft-card-media rounded">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="axies" />

                        <div className="whislist"><FaRegHeart className='text-white fs-5 me-1' />220</div>
                    </div>
                    <div className="nft-card-title"><h3 className='text-truncate'>{name} </h3><div className="tags" title='Type'>{types[0].type.name}</div></div>
                    <div className="meta-info">
                        <div className="author">

                        </div>
                        <div className="price"><span>base exprience</span>
                            <p> {base_experience}</p></div>
                        <div className="price"><span>Weight</span>
                            <p>{weight / 10}kg</p></div>
                        <div className="price"><span>Height</span>
                            <p>{height * 10}cm</p></div>
                    </div>
                </div>
            </div>
      
    )
}

export default Card