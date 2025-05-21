CREATE TABLE "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"clerkid" varchar(255) NOT NULL,
	"username" varchar(255) NOT NULL,
	"emailid" varchar(255) NOT NULL,
	"credits" integer DEFAULT 0,
	CONSTRAINT "users_emailid_unique" UNIQUE("emailid")
);
