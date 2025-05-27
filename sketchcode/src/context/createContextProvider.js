'use client'

import { useState } from "react"
import { aiCreateContext } from "./createContext"

const AiCreateProvider=({children})=>{
    const [aiCreate, setaiCreate] = useState(
        {
            prompt:'',
            model:'',
            url:''
        });
        return(
            <aiCreateContext.Provider value={{aiCreate, setaiCreate}}>
                {children}
            </aiCreateContext.Provider>
        )
}
export default AiCreateProvider;