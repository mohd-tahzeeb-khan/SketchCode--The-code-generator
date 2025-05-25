import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { url } from "inspector";

export const userTable=pgTable("users",{
    id:integer().primaryKey().generatedAlwaysAsIdentity(),
    clerkid:varchar({length:255}).notNull(),
    username:varchar({length:255}).notNull(),
    emailid:varchar({length:255}).notNull().unique(),
    credits:integer().default(0)
})


export const ImageDetails=pgTable("Images", {
    id:integer().primaryKey().generatedAlwaysAsIdentity(),
    img_url:varchar({length:255}).notNull(),
    model:varchar({length:255}).notNull(),
    description:varchar({length:255}).notNull(),
    code:varchar({length:255}),
    createdby:varchar({length:255}).notNull(),
    user_id:integer().notNull(),
    clerk_id:varchar({length:255}).notNull()
})