import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useIsLoggedIn } from '../hooks/hooks';

const AuthLayout = () => {

    const isLoggedIn = useIsLoggedIn();
    if (isLoggedIn === null) return <h1 className='text-white'>Loading...</h1>;
   else if (isLoggedIn === true) return <Navigate replace to="/" />;
  return (
   <Outlet/>
  )
}

export default AuthLayout