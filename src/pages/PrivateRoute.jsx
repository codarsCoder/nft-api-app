import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Loader from '../components/Loader'
import { useIsLoggedIn } from '../hooks/hooks'

const PrivateRoute = () => {
  const loader = useSelector((state) => state.database.isLoading); 
 const  isLoggedIn = useIsLoggedIn()
 if (isLoggedIn === null) return <Loader/>;
 if (loader) return <Loader/>;
 else if (isLoggedIn === false) return <Navigate replace to="/login" />;
  return (
   <Outlet/>
  )
}

export default PrivateRoute