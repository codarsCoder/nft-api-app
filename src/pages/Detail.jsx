import React from 'react'
import exImg from '../assets/ex-3.png'
import nftImage from '../assets/ex-1.jpg'
import { FaRegCommentAlt, FaRegHeart } from "react-icons/fa";

const detail = () => {
    return (
        <div className="container d-flex  flex-wrap  justify-content-center mt-5">
            <div className="row">
                <div className=" col-md-12 col-xl-6">
                    <div className="detail-media">
                        <img src={exImg} alt="" />
                    </div>
                </div>
                <div className=" col-md-12 col-xl-6 d-flex align-items-center flex-column p-3">
                    <div className="detail-title text-center text-white " >
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, unde.</h1>
                    </div>
                    <div className="meta-item d-flex justify-content-start gap-3 w-100 p-5">
                        <div className="detail-whislist d-flex justify-content-center  align-items-center gap-1"><FaRegHeart className='text-white fs-5 me-1' />220</div>
                        <div className="detail-whislist d-flex justify-content-center  align-items-center gap-1"><FaRegCommentAlt className='text-white fs-5 me-1' />220</div>
                    </div>
                    <div className="detail-info d-flex justify-content-around  gap-5 w-100 ">
                        <div className="detail-author ">
                            <div className="detail-avatar">
                                <img src={nftImage} alt="axies" />
                            </div>
                            <div className="info tex-start">
                                <span>Creator</span>
                                <h6> <a className='text-decoration-none fw-bold text-white' href="/authors-02">SalvadorDali</a> </h6>
                            </div>
                        </div>
                        <div className="detail-author">
                            <div className="detail-avatar">
                                <img src={nftImage} alt="axies" />
                            </div>
                            <div className="info tex-start">
                                <span>Creator</span>
                                <h6> <a className='text-decoration-none fw-bold text-white' href="/authors-02">SalvadorDali</a> </h6>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 text-white text-start mt-3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repudiandae modi veritatis sequi dolores. Harum blanditiis, est corrupti veniam placeat sit, cum aspernatur reiciendis error ipsam sapiente! Ipsum, quos voluptates vel necessitatibus temporibus quisquam odit ipsam, ipsa fuga doloremque adipisci! Ad itaque quidem dolorem nesciunt sed saepe laboriosam totam, nemo commodi maiores officiis quas hic, sit ipsa ullam? Quaerat animi aut nesciunt ea voluptate doloremque id, vitae omnis quod accusamus aliquam aperiam numquam a ad iusto! Voluptatibus facilis rem similique saepe, optio nobis? Id suscipit, laborum saepe asperiores sequi recusandae ratione itaque temporibus, ipsam voluptatum illum dolorum, adipisci perspiciatis est.</p>
                    </div>
                </div>


            </div>
            <div className="divider"></div>
            <div className="row w-100">
                <div className=" col  d-flex flex-column  align-items-center">
                    <div className="detail-comments col-md-12 col-lg-8">
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
                                <div className= "mb-4">
                                    <textarea className= "form-control" rows="4" placeholder="Leave a comment here" id="floatingTextarea" autoFocus></textarea>

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
        </div>
    )
}

export default detail