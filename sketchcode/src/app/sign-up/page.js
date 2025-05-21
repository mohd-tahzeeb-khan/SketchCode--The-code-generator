import { SignIn } from "@clerk/nextjs";
import UserAuth from "../components/userAuth";

export default function Page(){
    return(
        <>
            <h1>Sign In Page</h1>
            <UserAuth />
            <SignIn /> 
        </>
    )
}