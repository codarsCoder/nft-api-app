import React, { useEffect, useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useIsLoggedIn } from '../hooks/hooks';
import { login } from '../redux/AuthSlice';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import { async } from '@firebase/util';


const Api = () => {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [file, setFile] = useState("")
  const [imgs, setImgs] = useState("")

  useEffect(() => {
    if (file) {
      let filem = new FileReader();
      filem.onload = function () {
        setImgs(() => filem.result)
      }
      filem.readAsDataURL(file)
    }

  }, [file])

  const handleChange = async () => {
    let filem = new FileReader();
    filem.onload = function () {
      setImgs(filem)
    }
    await filem.readAsDataURL(file)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(email, password, file)
    let datamm = new FormData()
    datamm.append('name', email)
    datamm.append('pass', password)
    await datamm.append('photo', file)
    console.log(datamm);
    const url = "https://localhost/kasa/api.php"

    axios.post(url,datamm)
      .then(response => {
        console.log(response.data.msg);
      });

  }

  return (
    <div className='container d-flex flex-column align-items-center text-white mt-5 login-page'>
      <img style={{ borderRadius: "50%" }} width={250} height={250} src={imgs} alt="" />
      <h1>LOGIN POKE APP</h1>
      <div className="col-10 col-md-6 mx-auto mt-5">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-4">
            <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" placeholder='Your  email' autoFocus />
            {/* <div className="form-text">{message}</div> */}
          </div>
          <div className="mb-4">
            <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder='Set your password' />
          </div>
          <div className="mb-4">
            <input onChange={(e) => setFile(e.target.files[0])} type="file" className="form-control" id="exampleInputPassword1" placeholder='Set your password' />
          </div>


          <div className="mb-4 d-flex gap-2">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>

        </form>


      </div>

    </div>
  )
}

export default Api