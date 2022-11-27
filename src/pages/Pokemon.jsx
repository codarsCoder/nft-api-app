import React, { useEffect, useRef, useState } from 'react'
import icons from '../helper/icons'
import { FaHeart, FaRegCommentAlt, FaRegHeart, FaSyncAlt } from "react-icons/fa";
import { BiRightArrow } from "react-icons/bi";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Pcarousel from '../components/Pcarousel';
import { useDispatch, useSelector } from 'react-redux';
import { useCurrentUser } from '../hooks/hooks';
import { addComment, addLike, changeLoader, deleteComment, deleteLike, editComment, getComment, getLike, getLikes } from '../redux/DatabaseSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, getLkesWhis } from '../auth/firebase';
import { getScroll} from '../hooks/functions';
import { ToastContainer, toast } from 'react-toastify';
import Toastify from '../hooks/toastify';

const Pokemon = () => {
    const { pName } = useParams()
    const { state } = useLocation()
    const [pability, setPability] = useState([]);
    const [evolation, setEvolation] = useState("");
    const [email, setEmail] = useState("");
    const [editBtn, setEditBtn] = useState(true);
    const [comment, setComment] = useState("");
    const [commentId, setCommentId] = useState("");
    const [addButton, setAddButton] = useState(false);
    const [gettLike, setGettLike] = useState(true);
    const { name, base_experience, height, id, weight, types, abilities, sprites, species, stats,allLikeList } = state
    const dispatch = useDispatch();
    const commentList = useSelector((state) => state.database.comments);
    const navigate =useNavigate()
    const textareaFocus = useRef()
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(changeLoader(true));
        await dispatch(addComment({ email, pName, comment }));
        dispatch(getComment({ pName }));
        setAddButton(() => false)
        setComment("")
        addButtonCheck();
        getScroll('comment-field')
    }
  
    const handleDeleteComment = async (id) => {
        await dispatch(deleteComment(id));
        dispatch(getComment({ pName }));
        getScroll('comment-field')
    }
    const handleEditComment2 = async (edtComment, id) => {
        setComment(edtComment)
        setEditBtn(false)
        setCommentId(id)
        textareaFocus.current.focus()
        getScroll('comment-field')
    }

    const handleEditComment = async () => {
       await dispatch(editComment({ commentId, comment }));
        console.log(commentId, comment)
        dispatch(getComment({ pName }));
        getScroll('comment-field')
       
    }

       
    
  
    const handlelike = async (id) => {

         console.log(id)
      await dispatch(addLike({ email, pName }));
        // dispatch(getComment({ pName }));

       
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
            setEvolation({ ...evolation?.data })
        })
    }

    const addButtonCheck = () => {
        commentList.map(item => {
            if (item?.emal == email) { setAddButton(true) } else { setAddButton(false) }
        })
        if (commentList.length == 0) { setAddButton(false) }
    }
    const authControl = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { email } = user;
                setEmail(email)
                
            }
        });
        return email
    }


    useEffect(() => {

    }, [])

    useEffect(() => {
        addButtonCheck()
    }, [commentList])


    useEffect(() => {
        dispatch(getComment({ pName }));
        setEvolation("")
        getAbility()
        authControl()
        addButtonCheck()
       
    }, [pName])

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [abilities])

    const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    let evolationImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolation.id}.png`
  
  
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
                        <div onClick={()=> handlelike(email)} className="detail-whislist d-flex justify-content-center  align-items-center gap-1">
                            {
                                allLikeList?.filter(item => item.emal == email && item.pName == pName).length > 0 ? <FaHeart className='text-white fs-5 me-1'/> : <FaRegHeart className='text-white fs-5 me-1' />
                            }
                            </div>
                        <div className="detail-whislist d-flex justify-content-center  align-items-center gap-1"><FaRegCommentAlt className='text-white fs-5 me-1' />{commentList.length}</div>
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
                        types?.map((type, i) => {
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

                    return (
                        <>
                            <div key={i} className="detail-types-2 w-100  text-white text-start mt-3">
                                <span>Ability-{i + 1}</span>
                                <div>
                                    <h4>{it.ability.name}: </h4>
                                    <p >{pability[i]}</p>
                                </div>
                            </div>
                        </>
                    )

                })
            }
            {

                evolation?.name && (
                    <>
                        <div className='w-100 text-center'> <h4 className='text-white mt-3 mx-auto'>Evolation</h4></div>
                        <div className="evolation d-flex align-items-center justify-content-center mt-3">

                            <div className="nft-card-content col-6 col-md-4">
                                <div className="nft-card-media rounded">
                                    <img src={evolationImg} alt="axies" />
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

            <div className=" col-12  d-flex flex-column  align-items-center">
                <div className="detail-comments col-md-12 col-lg-8">
                    {
                        commentList?.map((item, i) => {
                            let nn;
                            if (item?.seconds) {
                                nn = new Date((item?.seconds) * 1000).toLocaleDateString()
                            } else {
                                nn = "Now"
                            }

                            return (
                                <div className="detail-comment w-100">
                                    <div className="detail-title text-white d-flex justify-content-between">
                                        <h5>{item?.emal}</h5>
                                        <div className='d-flex align-items-baseline '>
                                            <p>{nn}</p>
                                            {
                                                item?.emal == email && (
                                                    <div className="edit  mb-2">
                                                        {
                                                            addButton && (
                                                                <>
                                                                    <button onClick={() => handleDeleteComment(item.id)}><FiTrash2 /></button>
                                                                    <button onClick={() => handleEditComment2(item?.commnt, item.id)}><FiEdit /></button>
                                                                </>
                                                            )
                                                        }
                                                    </div>
                                                )
                                            }

                                        </div>
                                    </div>
                                    <p className="text-white w-100">{item?.commnt}</p>

                                </div>
                            )

                        })

                    }

                </div>
                <div id="comment-field" className="detail-add-comment w-100">
                    <div className=" col-md-12 col-lg-8 mx-auto mt-5">
                        <form onSubmit={(e) => handleSubmit(e)} className='w-100'>
                            <div className="mb-4">
                                <textarea onChange={(e) => setComment(e.target.value)} className="form-control" rows="4" value={comment} placeholder="Leave a comment here" id="floatingTextarea" ref={textareaFocus}  ></textarea>
                           </div>
                            <div className="mb-4 d-flex gap-2">
                                {
                                    addButton ? (
                                        <button onClick={() => handleEditComment()} type="button" disabled={editBtn} className="btn btn-secondary" >Edit Comment </button>
                                    ) : (
                                        <button type="submit" className="btn btn-primary"  >Add Comment </button>
                                    )
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Pcarousel pokemon={state.pokemon} /> 
            <ToastContainer />
        </div>
       
    )
}

export default Pokemon

