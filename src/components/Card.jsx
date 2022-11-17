import axios from 'axios';
import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import nftImage from '../assets/ex-1.jpg'
const Card = () => {

    const options = {
        method: 'GET',
        url: 'https://api.blockspan.com/v1/collections',
        params: {chain: 'eth-main'},
        headers: {accept: 'application/json', 'X-API-KEY': 'ER83icQAGsv47JN7F4QPB0Z0b19SvZVo'}
      };
      
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    return (
        <div className="container d-flex  flex-wrap gap-3 justify-content-center mt-5">
            <div className="nft-card-wrapper col-10 col-md-4 col-lg-3 p-3 ">
                <div className="nft-card-media rounded">
                    <img src={nftImage} alt="" />
                    <div className="whislist"><FaRegHeart className='text-white fs-5 me-1' />220</div>
                </div>
                <div className="nft-card-title"><h5 className='text-truncate'>NFT Title lorem ipsum </h5><div className="tags">ABC</div></div>
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




        </div>
    )
}

export default Card