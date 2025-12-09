import express from "express";
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

// app.get('/api', async(req, res)=>{
//     const API = `https://fsdfrrxragiqysdsrgez.supabase.co`;
//     const supabase = createClient(API, db);
//     const { data, error } = await supabase
//         .from('name')
//         .select()
// })