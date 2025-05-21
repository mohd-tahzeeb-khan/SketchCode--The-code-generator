import { useUser } from "@clerk/nextjs";

export default function UserAuth(){
   
    const { isSignedIn, user } = useUser();
    if(!isSignedIn) return <p>Please Sign In first</p>


 return(<p>Welcome {user.firstName}</p>)

}