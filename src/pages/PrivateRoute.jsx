import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const log = true
  return (
<>
    {log && (<Outlet/>)} 
    {!log && <Navigate to="/login" />} 
</>

 
  )
}

export default PrivateRoute