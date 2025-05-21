
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  // schema: "./Configs/drizzle/schema.js",
  schema: "src/db/schema.js",
  dbCredentials: {
    url: process.env.DATABASE_URL
  },
});


// import { defineConfig } from "drizzle-kit";

// export default defineConfig({
  // dialect: "postgresql",
  // schema: "./Configs/drizzle/schema.js",
  // dbCredentials: {
    // url: process.env.DATABASE_URL
  // },
// });