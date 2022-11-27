import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useIsLoggedIn } from '../../hooks/hooks';
import { login } from '../../redux/AuthSlice';
import { ToastContainer } from 'react-toastify';


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(login({email,password}));
    }

  return (
    <div className='container d-flex flex-column align-items-center text-white mt-5 login-page'>
     
      <h1>LOGIN POKE APP</h1>
      <div className="col-10 col-md-6 mx-auto mt-5">
        <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-4">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" placeholder='Your  email' autoFocus />
                        {/* <div className="form-text">{message}</div> */}
                    </div>
                    <div className="mb-4">
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder='Set your password' />
                    </div>
          <div className="d-flex justify-content-between px-1">
            <div className="mb-4 form-check">
              <input type="checkbox" className="form-check-input bg-transparent" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Remember Me?</label>
            </div>
            <div className="mb-4">
              <Link className="text-decoration-none text-white hover-blue me-3 fw-bold" to="/register">Register</Link>
              <Link className="text-decoration-none text-white hover-blue me-3 fw-bold" to="/forgot-password">Forgot Password?</Link>
            </div>
          </div>

          <div className="mb-4 d-flex gap-2">
            <button type="submit" className="btn btn-primary">Login</button>
            <button type="button" className="btn btn-primary gap-1 d-flex align-items-center"><FaGoogle />Login With Google</button>
          </div>

        </form>


      </div>
<ToastContainer/>
    </div>
  )
}

export default Login