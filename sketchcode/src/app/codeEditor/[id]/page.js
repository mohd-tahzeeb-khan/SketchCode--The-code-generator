'use client'
import { userContext } from '@/context/userContext'
import { useParams } from 'next/navigation'
import React, { useContext } from 'react'
const CodeEditor = () => {
  const encodeUrl=useParams();
  console.log("1",encodeUrl.id)
  const geturl=decodeURIComponent(encodeUrl.id) 
  console.log("2",geturl)
  // const {url}=param.url
  const {user, setUser}=useContext(userContext);

  return (
    <>
      {user.id}<br/>
      {user.clerkId}<br/>
      {user.username}<br/>
      {user.emailid}<br/>
      {geturl}




    </>
  )
}

export default CodeEditor