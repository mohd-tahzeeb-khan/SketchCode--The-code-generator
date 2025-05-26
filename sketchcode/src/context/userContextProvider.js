'use client'
import React, { useState, useEffect } from "react";
import { userContext } from "./userContext";
import { useUserData } from "@/hooks/userdetailsHook";
const UserProvider=({children})=>{
    const [user, setUser] = useState({
        username:'',
        clerkId:'',
        id:'',
        emailid:'',
        credits:0
    });
const {userData}=useUserData();
useEffect(() => {
  if(userData){
    setUser({
        username:userData.username || '',
        emailid:userData.emailid || '',
        id:userData.id || '',
        clerkId:userData.clerkid || '',
        credits:userData.credits || '',
    });
  }
}, [userData])
    return(
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}
export default UserProvider;