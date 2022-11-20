import React from 'react'
import { useCurrentUser } from '../hooks/hooks'

const User = () => {

    const muser = useCurrentUser()
    console.log(muser);
   let  normalDate = muser &&  new Date(muser?.metadata.createdAt*1000).toLocaleString()
  return (
    <div className='text-white d-flex flex-column align-items-center'>
      <div>{muser?.phoneNumber}</div>
      <div>{muser?.photoURL}</div>
      <div>{muser?.displayName}</div>
    <div>{muser?.email}</div>
    <div>{muser?.metadata.createdAt}</div>
    <div>{muser?.metadata.lastLoginAt}</div>
    <div>{(muser?.metadata.creationTime)}</div>

    </div>
  
  )
}
  //   var seconds = 1667544020351;
  // let time = new Date(seconds)
  // let normalDate = new Date(seconds).toLocaleString('tr-TR')
export default User