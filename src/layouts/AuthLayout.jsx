import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Loader from '../components/Loader';
import { useIsLoggedIn } from '../hooks/hooks';
import { ToastifyInfo, ToastifyWarning } from '../hooks/toastify';
const AuthLayout = () => {

  const msg = useSelector((state) => state.auth.error);
  const successMsg = useSelector((state) => state.auth.succesMessage);
  msg && ToastifyWarning(msg)

  
    const isLoggedIn = useIsLoggedIn();
    if (isLoggedIn === null) return <Loader/>;
   else if (isLoggedIn === true) return (  successMsg && ToastifyInfo(successMsg),<Navigate replace to="/" />);
  return (
   <Outlet/>
  )
}

export default AuthLayout