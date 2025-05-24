'use client';
import Image from "next/image";
const Profile = ({ name = "Friend" }) => {
  return (
    <>
     <div className="bg-zinc-400 p-6 rounded-xl shadow-md w-full max-w-md mx-auto text-center mt-10">
   <h2 className="text-2xl font-bold text-gray-800 mb-2">Hello, {name} 👋</h2>
   <p className="text-gray-600">Welcome to your dashboard. Have a productive day!</p>
 </div>
 <div className=" flex flex-col lg:flex-row justify-around bg-amber-300"> 
    <div className="left-profile flex bg-amber-800">
      <Image src='' height={300} width={220} alt="Profile Image"/>
    </div>
    <div className="right flex flex-col gap-20">
      <div className="bg-green-500 w-full h-[50%]">.</div>
      <div className="bg-yellow-500 w-[100%] h-[500px]">.</div>
    </div>
 </div>
;
    </>
    )
};

export default Profile;
