'use client';
import { userContext } from "@/context/userContext";
import { useUser } from "@clerk/nextjs";

import Image from "next/image";
import { useContext } from "react";

const Profile = ({}) => {
  const userHook=useUser();
  const profileimageurl=userHook.user.imageUrl;
  console.log(userHook.user.imageUrl)
  const {user, setUser}=useContext(userContext)
  return (
    <>
      <div className="bg-black/10  p-6 rounded-xl shadow-md w-full max-w-md mx-auto text-center mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Hello, <span className="uppercase">{user.username}</span> 👋</h2>
        <p className="text-gray-600">Welcome to your dashboard. Have a productive day!</p>
      </div>
      <div className=" flex flex-col lg:flex-row justify-between bg-gradient-to-l from-[#00c3ff] to-[#ffff1c] opacity-90  gap-10 md:p-10 p-2 my-10">
        <div className="left-profile flex flex-col bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl rounded-2xl lg:w-full items-center p-10">
          <Image src={profileimageurl}
            height={300} width={300} alt="Profile Image" className="rounded-full mx-auto" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
            <input className="border-b-2 border-black " value={user.username} />
            <input className="border-b-2 border-black " value={user.clerkId} disabled/>
            <input className="border-b-2 border-black " value={user.emailid}/>
            <input className="border-b-2 border-black " value="" />
          </div>
          <div><button value="Save" className="bg-gradient-to-br from-purple-600 to-blue-400 hover:to-blue-500 hover:from-green-600 transition-colors duration-300 text-white rounded-full py-2 px-3" >Save</button></div>
        </div>
        <div className="right-profile flex flex-col gap-10 lg:w-full">
          <div className="bg-white/10 backdrop-blur-2xl border-white/20 rounded-2xl  w-full h-[50%] py-5 px-8">
            <h1 className="font-bold text-2xl">Your Project</h1>
            <div className="bg-slate-600 w-full h-[1px]"></div>
            <div className="p-2">
              <li className="flex flex-row gap-5 justify-between">
                <h2>Code for X</h2>
                <div>GROK</div>
              </li>
              <li className="flex flex-row gap-5 justify-between">
                <h2>Code for X</h2>
                <div>GROK</div>
              </li>
              <li className="flex flex-row gap-5 justify-between">
                <h2>Code for X</h2>
                <div>GROK</div>
              </li>
              <li className="flex flex-row gap-5 justify-between my-4">
                <h2>Code for X</h2>
                <div className="bg-gradient-to-tl from-blue-400 to-purple-400  py-0.5 px-2 md:py-1 md:px-5 rounded-lg">GROK</div>
              </li>
            </div>
          </div>
          <div className="bg-yellow-500 w-[100%] h-[50%]">.</div>
        </div>
      </div>
      ;
    </>
  )
};

export default Profile;
