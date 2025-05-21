import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const userTable=pgTable("users",{
    id:integer().primaryKey().generatedAlwaysAsIdentity(),
    clerkid:varchar({length:255}).notNull(),
    username:varchar({length:255}).notNull(),
    emailid:varchar({length:255}).notNull().unique(),
    credits:integer().default(0)
})