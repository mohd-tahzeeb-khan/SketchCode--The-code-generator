'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
// import { SignedIn, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/nextjs'

const page = () => {
  const route=useRouter();
  return (
    <>
      <div className='h-screen flex justify-center items-center bg-green-400'><h1>Development Server</h1>
      <button className='p-3 m-5 bg-blue-500 text-white rounded-2xl inline-block' onClick={()=>{route.push('/dashboard')}}>Dashboard</button>
      </div>
    </>
  )
}

export default page


// https://1e72-2409-4081-502-1668-c4c7-a3e2-f15f-530b.ngrok-free.app