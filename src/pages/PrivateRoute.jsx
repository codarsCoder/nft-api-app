import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const navigate = useNavigate()
    const log = true
  return (
<>
    {log && (<Outlet/>)} 
    {!log && (navigate("/login"))} 
</>

 
  )
}

export default PrivateRoute