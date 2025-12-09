//TODO: I want to set up a pool to send requests from the server to the database.

// import pg -> postgres management package
import pg from "pg";

// configure .env file -> dotenv is package to manage this file
import dotenv from "dotenv";
dotenv.config();

// setup connection pool
export const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
});