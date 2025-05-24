import { useUser } from "@clerk/nextjs";
import { useContext } from "react";
import { userContext } from "@/context/userContext";
export default function UserAuth(){
   
    const { isSignedIn } = useUser();
    if(!isSignedIn) return <p>Please Sign In first</p>
    const {user, setUser}=useContext(userContext);


 return(<>
 <main>
    <div>
        <h1 className="uppercase">Welcome, <span className="font-bold text-2xl">{user.username}</span></h1>
    </div>
 </main>
 <section className="shadow-2xl bg-zinc-200">
    <div className="flex gap-7"><h2>Name:</h2><h2>{user.username}</h2></div>
    <div className="flex gap-7"><h2>Registered Email Id:</h2><h2>{user.emailid}</h2></div>
    <div className="flex gap-7"><h2>Cid:</h2><h2>{user.clerkId}</h2></div>
 </section>
 
 </>)

}