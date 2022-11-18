import React, { useEffect, useState } from 'react'
import icons from '../helper/icons'
import { FaRegCommentAlt, FaRegHeart } from "react-icons/fa";
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';


const Detail = () => {
const {pId} = useParams()
const {state} = useLocation()

 

const { name, base_experience, height, id, weight, types,abilities } =state
 const [pability, setPability] = useState([]);

  const  getAbility = async () => {
    console.log({abilities})
    abilities.map(async(item)=>{
         const {data} = await axios.get(`https://pokeapi.co/api/v2/ability/${item.ability.name}`)
         console.log(item.ability.name);
         const abily = data.effect_entries.filter(it => it.language.name ==="en")
         console.log(abily);
         setPability((abl)=>[...abl,abily[0].effect])
         
         
    })
    
            // console.log(state.abilities);
            //  setPability(data.effect_entries[1].effect)
    }
    useEffect(() => {
        getAbility() 
    }, [])
    
    const pokeImg= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    return (
        <div className="container d-flex  flex-wrap  justify-content-center mt-5">
           <button onClick={()=> console.log(pability)}>vv</button>
                <div className=" col-md-8 col-xl-5">
                    <div className="detail-media">
                        <img src={pokeImg} alt="" />
                    </div>
                </div>
                <div className=" col-md-12 col-xl-7 d-flex align-items-center flex-column p-3">
                    <div className="detail-title text-center text-white " >
                        <h1>{name.slice(0,1).toLocaleUpperCase()+ name.slice(1)}</h1>
                    </div>
                    <div className="meta-item d-flex  gap-3 w-100 p-5">
                        <div className="detail-whislist d-flex justify-content-center  align-items-center gap-1"><FaRegHeart className='text-white fs-5 me-1' />0</div>
                        <div className="detail-whislist d-flex justify-content-center  align-items-center gap-1"><FaRegCommentAlt className='text-white fs-5 me-1' />0</div>
                    </div>
                    <div className="detail-info d-flex justify-content-around flex-wrap w-100 ">
                       <div className="col-12 col-md-4 p-1">
                        <div className="detail-author  ">
                            <div className="detail-avatar">
                                <img src={pokeImg} alt="axies" />
                            </div>
                            <div className="info tex-start">
                                <span>Base Exprience</span>
                                <h6> {base_experience}</h6>
                            </div>
                        </div>
                        </div>
                       <div className="col-12 col-md-4 p-1">
                        <div className="detail-author  ">
                            <div className="detail-avatar">
                                <img src={pokeImg} alt="axies" />
                            </div>
                            <div className="info tex-start">
                                <span>Weight</span>
                                <h6> {weight / 10}kg</h6>
                            </div>
                        </div>
                        </div>
                       <div className="col-12 col-md-4 p-1">
                        <div className="detail-author  ">
                            <div className="detail-avatar">
                                <img src={pokeImg} alt="axies" />
                            </div>
                            <div className="info tex-start">
                                <span>Height</span>
                                <h6> {height * 10}cm</h6>
                            </div>
                        </div>
                        </div>
                    
                    </div>
                    <div className="detail-types w-100 text-white text-start mt-3">
                    <span>Types</span>  
                    {
                        types.map((type,i) => {
                          return(
                         
                            <figure key={i} className='d-flex flex-column align-items-center '>
                               <img width={"60px"} height={"60px"} src={icons[type.type.name]} alt={type.type.name} title={type.type.name}/>
                           <figcaption>{type.type.name}</figcaption>
                            </figure>
                         
                          )
                        })
                    }
                    </div>
                  
                    {
                        
                         abilities.map((it,i)=> {
                            {   
                               
                               
                                  return(
                                    <>  
                                    <div className="detail-types-2  text-white text-start mt-3">
                    <span>Ability-{i+1}</span>  
                    <div>
                        <h4 key={i}>{it.ability.name}: </h4>
                         <p >{pability[i]}</p>
                    </div>
                         
                          </div>
                        </>
                          ) 
                            }
                       
                        })
                    }
                
                    <div className="w-100 text-white text-start mt-3">
                       
                    </div>
                </div>


            
            <div className="divider"></div>
          
                <div className=" col-10  d-flex flex-column  align-items-center">
                    <div className="detail-comments col-md-10 col-lg-8">
                        <div className="detail-comment w-100">
                            <div className="detail-title text-white d-flex justify-content-between">
                                <h5>nr.arslan@gmail.com</h5>
                                <p>10.10.2022</p>
                            </div>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste animi in ad? Deleniti ratione magnam debitis porro voluptas temporibus deserunt facere? Quod voluptas dignissimos unde magnam dolore aperiam repellat neque nostrum nobis, nemo veritatis et accusantium rem corrupti illum quasi quae quas autem ratione optio eum dolorem quis ipsam adipisci?</p>
                        </div>
                    </div>
                    <div className="detail-add-comment w-100">
                        <div className=" col-md-12 col-lg-8 mx-auto mt-5">
                            <form className='w-100'>
                                <div className="mb-4">
                                    <textarea className="form-control" rows="4" placeholder="Leave a comment here" id="floatingTextarea" ></textarea>

                                </div>


                                <div className="mb-4 d-flex gap-2">
                                    <button type="submit" className="btn btn-primary">Add Commit </button>
                                    <button type="button" className="btn btn-secondary">Edit Commit </button>

                                </div>

                            </form>


                        </div>
                    </div>
                </div>
           
        </div>
    )
}

export default Detail