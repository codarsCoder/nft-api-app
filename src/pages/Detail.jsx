import React, { useEffect, useState } from 'react'
import icons from '../helper/icons'
import { FaRegCommentAlt, FaRegHeart, FaSyncAlt } from "react-icons/fa";
import { BiRightArrow } from "react-icons/bi";
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Pcarousel from '../components/Pcarousel';
import { useDispatch, useSelector } from 'react-redux';
import { useCurrentUser } from '../hooks/hooks';
import { addComment } from '../redux/DatabaseSlice';
import { addbaba } from '../auth/firebase';

const Detail = () => {

    const email = useSelector((state) => state.auth.email);
    console.log(email);
    const { pId } = useParams()
    const { state } = useLocation()
    const [pability, setPability] = useState([]);
    const [evolation, setEvolation] = useState("");
    const [comment, setComment] = useState("");
    const { name, base_experience, height, id, weight, types, abilities, sprites, species, stats } = state
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addComment({email,comment}));
        // addbaba(email,comment)
      }



    const getAbility = async () => {
        setEvolation("")
        abilities.map(async (item) => {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/ability/${item.ability.name}`)
            const abily = data.effect_entries.filter(it => it.language.name === "en")
            setPability((abl) => [...abl, abily[0].effect])
            const datam = await axios.get(species.url)
            const evo = datam.data?.evolves_from_species?.name
            const evolation = evo && await axios.get(`https://pokeapi.co/api/v2/pokemon/${evo}`)
            setEvolation({ ...evolation.data })
        })

 
    }

    useEffect(() => {
        getAbility()
    }, [])

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [abilities])

    const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    let evopokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolation.id}.png`

    return (
        <div className="container d-flex  flex-wrap  justify-content-center mt-5">
            <div className=" col-md-8 col-xl-5">
                <div className="detail-media">
                    <img src={pokeImg} alt="" />
                </div>
            </div>
            <div className=" col-md-12 col-xl-7 d-flex align-items-between flex-column p-5">
                <div className="detail-title d-flex align-items-center text-center text-white p-3" >
                    <h1>{name.slice(0, 1).toLocaleUpperCase() + name.slice(1)}</h1>
                    <div className="meta-item d-flex justify-content-end gap-3 w-100 ">
                        <div className="detail-whislist d-flex justify-content-center  align-items-center gap-1"><FaRegHeart className='text-white fs-5 me-1' />0</div>
                        <div className="detail-whislist d-flex justify-content-center  align-items-center gap-1"><FaRegCommentAlt className='text-white fs-5 me-1' />0</div>
                    </div> </div>
                <div className="detail-info d-flex justify-content-around flex-wrap w-100 ">
                    <div className="col-12 col-md-4 p-1">
                        <div className="detail-author  ">
                            <div className="detail-avatar">
                                <img src={sprites.front_shiny} alt="axies" />
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
                                <img src={sprites.back_default} alt="axies" />
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
                                <img src={sprites.front_shiny} alt="axies" />
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
                        types.map((type, i) => {
                            return (
                                <figure key={i} className='d-flex flex-column align-items-center '>
                                    <img width={"60px"} height={"60px"} src={icons[type.type.name]} alt={type.type.name} title={type.type.name} />
                                    <figcaption>{type.type.name}</figcaption>
                                </figure>
                            )
                        })
                    }
                </div>


            </div>
            {
                abilities.map((it, i) => {
                    {
                        return (
                            <>
                                <div className="detail-types-2 w-100  text-white text-start mt-3">
                                    <span>Ability-{i + 1}</span>
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
            {
                evolation && (
                    <>
                      <div className='w-100 text-center'> <h4 className='text-white mt-3 mx-auto'>Evolation</h4></div> 
                        <div className="evolation d-flex align-items-center justify-content-center mt-3">

                            <div className="nft-card-content col-6 col-md-4">
                                <div className="nft-card-media rounded">
                                    <img src={evopokeImg} alt="axies" />
                                </div>
                                <div className="nft-card-title"><h3 className='text-white m-auto'>{evolation.name} </h3>
                                </div>
                            </div>
                            <div className="arrow"><BiRightArrow className='arrow-in' /></div>
                            <div className="nft-card-content col-6 col-md-4">
                                <div className="nft-card-media rounded">
                                    <img src={pokeImg} alt="axies" />
                                </div>
                                <div className="nft-card-title"><h3 className='text-white m-auto'>{name} </h3>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            <div className=" d-flex flex-column gap-2 mt-3 col-12 col-md-8">
            <div className='w-100 text-center'> <h4 className='text-white mt-3 mx-auto'>Stats</h4></div> 
                    
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${Math.round(stats[0].base_stat / 2)}%` }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                    <span className='stat-name'>{stats[0].stat.name}</span><span className="stat-value">{`${Math.round(stats[0].base_stat / 2)}%`}</span>
                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: `${Math.round(stats[1].base_stat / 2)}%` }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                    <span className='stat-name'>{stats[1].stat.name}</span><span className="stat-value">{`${Math.round(stats[1].base_stat / 2)}%`}</span>
                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{ width: `${Math.round(stats[2].base_stat / 2)}%` }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                    <span className='stat-name'>{stats[2].stat.name}</span><span className="stat-value">{`${Math.round(stats[2].base_stat / 2)}%`}</span>
                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{ width: `${Math.round(stats[3].base_stat / 2)}%` }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                    <span className='stat-name'>{stats[3].stat.name}</span><span className="stat-value">{`${Math.round(stats[3].base_stat / 2)}%`}</span>
                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{ width: `5%` }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                    <span className='stat-name'>{stats[4].stat.name}</span><span className="stat-value">{`${Math.round(stats[4].base_stat / 2)}%`}</span>
                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" style={{ width: `${Math.round(stats[5].base_stat / 2)}%` }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                    <span className='stat-name'>{stats[5].stat.name}</span><span className="stat-value">{`${Math.round(stats[5].base_stat / 2)}%`}</span>
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
                        <form onSubmit={(e) => handleSubmit(e)} className='w-100'>
                            <div className="mb-4">
                                <textarea onChange={(e)=>setComment(e.target.value)}  className="form-control" rows="4" placeholder="Leave a comment here" id="floatingTextarea" ></textarea>
                            </div>
                            <div className="mb-4 d-flex gap-2">
                                <button type="submit" className="btn btn-primary">Add Comment </button>
                                <button type="button" className="btn btn-secondary">Edit Comment </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Pcarousel pokemon={state.pokemon}/>
        </div>
    )
}

export default Detail