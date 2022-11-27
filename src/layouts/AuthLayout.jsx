import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { useIsLoggedIn } from '../hooks/hooks';
import { ToastifyInfo, ToastifyWarning } from '../hooks/toastify';
const AuthLayout = () => {

  const msg = useSelector((state) => state.auth.error);
  const successMsg = useSelector((state) => state.auth.succesMessage);
  msg && ToastifyWarning(msg)
  successMsg && ToastifyInfo(successMsg)
  
    const isLoggedIn = useIsLoggedIn();
    if (isLoggedIn === null) return <h1 className='text-white'>Loading...</h1>;
   else if (isLoggedIn === true) return <Navigate replace to="/" />;
  return (
   <Outlet/>
  )
}

export default AuthLayout