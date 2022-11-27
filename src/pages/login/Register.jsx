import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useIsLoggedIn } from '../../hooks/hooks';
import { register } from '../../redux/AuthSlice';

const Register = () => {

    const dispatch = useDispatch();
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register({user,email,password}));
      }
    
    return (
        <div className='container d-flex flex-column align-items-center text-white mt-5 login-page'>
            <h1>REGISTER POKE APP</h1>
            <div className="col-10 col-md-6 mx-auto mt-5">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-4">
                        <input onChange={(e) => setUser(e.target.value)} type="text" className="form-control" id="exampleInputFullName" placeholder='Your full name' autoFocus/>
                        {/* <div className="form-text">{message}</div> */}
                    </div>
                    <div className="mb-4">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" placeholder='Your  email' />
                        {/* <div className="form-text">{message}</div> */}
                    </div>
                    <div className="mb-4">
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder='Set your password' />
                    </div>
                    <div className="d-flex justify-content-between px-1">
                    
                        <div className="mb-4">
              <Link className="text-decoration-none text-white hover-blue me-3 fw-bold" to="/login">Login</Link>
                </div>
                    </div>

                    <div className="mb-3 d-flex gap-2">
                        <button type="submit" className="btn btn-primary">Register</button>
                        <button type="button" className="btn btn-primary gap-1 d-flex align-items-center"><FaGoogle />Register With Google</button>
                    </div>

                </form>


            </div>
            <ToastContainer/>
        </div>
    )
}

export default Register