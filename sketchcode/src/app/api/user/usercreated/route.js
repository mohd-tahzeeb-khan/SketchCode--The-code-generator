import { db } from "@/db/index";
import { userTable } from "@/db/schema";
import { eq } from "drizzle-orm";
export async function POST(requestdata) {
    try {
        const rawBodydata=await requestdata.text()
        const payload =JSON.parse(rawBodydata);
        console.log("api/user/usercreated- request: ",payload.type)
        if(payload.type === "user.created")
            {
            const {username, first_name, email_addresses, id}=payload.data;
            const clerkid=id.replace("user_", "")
            const email = email_addresses?.[0]?.email_address;
            const result=await db.insert(userTable).values({username:username || first_name,
                emailid:email,
                clerkid:clerkid,
                credit:0
            })
            
            return new Response("New User Created",{status:200
            })
        }
        if(payload.type==="user.deleted"){
            const{deleted, id}=payload.data;
            const clerkid=id.replace("user_", "")
            const result=await db.delete(userTable).where(eq(clerkid, clerkid));
            if(deleted && result.rowCount>0){
                return new Response("user deleted(Removed)", {status:200})
            }
            else{
                return new Response("User not Exist", {status:204})
            }
        }
    } catch (error) {
        if(error.code == 23505){
            return new Response("User Already exist" ,{status:409})
        }
        
    }
}