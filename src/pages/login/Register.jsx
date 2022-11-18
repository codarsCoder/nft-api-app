import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";

const Register = () => {

    const [message, setMessage] = useState("")

    return (
        <div className='container d-flex flex-column align-items-center text-white mt-5 login-page'>
            <h1>REGISTER NFT APP</h1>
            <div className="col-10 col-md-6 mx-auto mt-5">
                <form>
                    <div className="mb-4">
                        <input type="text" className="form-control" id="exampleInputFullName" placeholder='Your full name' autoFocus/>
                        <div className="form-text">{message}</div>
                    </div>
                    <div className="mb-4">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Your  email' />
                        <div className="form-text">{message}</div>
                    </div>
                    <div className="mb-4">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Set your password' />
                    </div>
                    <div className="d-flex justify-content-between px-1">
                        <div className="mb-4 form-check">
                            <input type="checkbox" className="form-check-input bg-transparent" id="exampleCheck1" />
                            <label className="form-check-label fw-bold" htmlFor="exampleCheck1">Remember Me?</label>
                        </div>
                        <div className="mb-4">
                            <a className="text-decoration-none text-white hover-blue" href="#">Forgot Password?</a>
                        </div>
                    </div>

                    <div className="mb-3 d-flex gap-2">
                        <button type="submit" className="btn btn-primary">Register</button>
                        <button type="button" className="btn btn-primary gap-1 d-flex align-items-center"><FaGoogle />Register With Google</button>
                    </div>

                </form>


            </div>

        </div>
    )
}

export default Register