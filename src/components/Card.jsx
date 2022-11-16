import React from 'react'
import { FaRegHeart } from "react-icons/fa";
const Card = () => {
    
  return (
    <div className="container d-flex justify-content-center mt-5">
        <div className="nft-card-wrapper col-12 col-md-6 col-lg-3 col-xl-4 p-5 rounded">
            <div className="nft-card-media">
                <img src="" alt="" />
                <div className="whislist"><FaRegHeart className='text-white fs-5'  /></div>
            </div>

        </div>



    </div>
  )
}

export default Card