import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useIsLoggedIn } from '../../hooks/hooks';
import { forgotPassword, login } from '../../redux/AuthSlice';

const ForgotPassword = () => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(forgotPassword(email));
    }

  return (
    <div className='container d-flex flex-column align-items-center text-white mt-5 login-page'>
     
      <h1>RESET PASSWORD</h1>
      <div className="col-10 col-md-6 mx-auto mt-5">
        <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-4">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" placeholder='Your  email' autoFocus />
                        {/* <div className="form-text">{message}</div> */}
                    </div>
                
          <div className="d-flex justify-content-between px-1">
            <div className="mb-4">
              <Link className="text-decoration-none text-white hover-blue me-3 fw-bold" to="/login">Login</Link>
                </div>
            <div className="mb-4">
              <Link className="text-decoration-none text-white hover-blue me-3 fw-bold" to="/register">Register</Link>
                </div>
          </div>

          <div className="mb-4 d-flex gap-2">
            <button type="submit" className="btn btn-primary">Send Email</button>
             </div>

        </form>


      </div>
      <ToastContainer/>
    </div>
  )
}

export default ForgotPassword