import React, { useState } from "react";
import { userContext } from "./userContext";
import { useUserData } from "@/hooks/userdetailsHook";
const UserProvider=({children})=>{
    const [user, setUser] = useState({
        username:'',
        clerkId:'',
        userId:'',
        credits:0
    });
const userdata=useUserData();
console.log("user details from hook",userdata);
    return(
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}
export default UserProvider;