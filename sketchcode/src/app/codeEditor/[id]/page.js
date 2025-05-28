'use client'
import { aiCreateContext } from '@/context/createContext'
import { userContext } from '@/context/userContext'
import { useParams } from 'next/navigation'
import React, { useContext, useEffect } from 'react'
const CodeEditor = () => {
  const encodeUrl=useParams();
  console.log("1",encodeUrl.id)
  const geturl=decodeURIComponent(encodeUrl.id) 
  console.log("2",geturl)
  // const {url}=param.url
  const {aiCreate, setaiCreate}=useContext(aiCreateContext);
  const {user, setUser}=useContext(userContext);


  // API  Call
  useEffect(() => {
    const fetchdata=async()=>{
      try {
        const res=await fetch('/api/prompt', {
          method:"POST",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            prompt:"write a c program to print my name. My name is Tahzeeb Khan",
            model:"qwen/qwen-2.5-coder-32b-instruct:free"
          })
        })
        const data=await res.json();
        console.log(data);
      } catch (error) {
        console.error("error:", error)
        
      }
    }
  fetchdata();
  }, [])
  
  return (
    <>
      {user.id}<br/>
      {user.clerkId}<br/>
      {user.username}<br/>
      {user.emailid}<br/>
      {geturl}
<br/>
      {aiCreate.prompt}<br/>
      {aiCreate.url}<br/>
      {aiCreate.model}<br/>





    </>
  )
}

export default CodeEditor