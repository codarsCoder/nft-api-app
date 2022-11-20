import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useIsLoggedIn } from '../hooks/hooks'

const PrivateRoute = () => {
 const  isLoggedIn = useIsLoggedIn()
 if (isLoggedIn === null) return <h1>Loading...</h1>;
 else if (isLoggedIn === false) return <Navigate replace to="/login" />;
  return (
   <Outlet/>
  )
}

export default PrivateRoute