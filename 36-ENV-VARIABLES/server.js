import express, { response } from "express";
import dotenv from "dotenv";
//import { createClient } from '@supabase/supabase-js';
import { db } from "./dbConnection.js";

const app = express();
dotenv.config();

app.use(express.json());

app.listen(8080, () => {
    console.log(`Server running on port 8080`);
});

app.get(`/`, (req,res)=>{
    res.json({message: `Welcome to the root route. GET comfy!`});
});

app.get('/', (req, res) => {
    res.send(`This is the root route`);
});

// TODO: I want to read the data in the staff table.
// route --> "/staff"
// HTTP method --> get

app.get('/staff', async(req, res)=>{
    // query the database.
    const query = await db.query(`SELECT name,location, age, bio FROM staff;`);
    console.log(query);
    // parse the response
    res.json(query.rows);
});

// TODO: I want to READ the name and location of all staff
// route --> 'staff-location'
// HTTP method --> GET
app.get('/staff-location', async(req, res)=>{
    const query = await db.query('SELECT name, location FROM staff;');
    console.log(query);
    res.json(query.rows);
})