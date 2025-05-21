import { db } from "@/db/index";
import { userTable } from "@/db/schema";
export async function POST(requestdata) {
    try {
        const rawBodydata=await requestdata.text()
        const payload =JSON.parse(rawBodydata);
        if(payload.type === "user.created"
        ){
            const {username, first_name, email_addresses, id}=payload.data;
            const clerkid=id.replace("user_", "")
            const email = email_addresses?.[0]?.email_address;

            console.log(email, clerkid)
            const result=await db.insert(userTable).values({username:username || first_name,
                emailid:email,
                clerkid:clerkid,
                credit:0
            })
            
            return new Response("New User Created",{status:200
            })
        }
    } catch (error) {
        if(error.code == 23505){
            return new Response("User Already exist" ,{status:409})
        }
        
    }
    
}