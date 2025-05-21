import { SignIn } from "@clerk/nextjs";

export default function page(){
    return(
        <>
            <h1>Sign In Page</h1>
            <SignIn />
        </>
    )
}