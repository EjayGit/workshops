import express from 'express';
import dotenv, { config, configDotenv } from 'dotenv';
import cors from 'cors';
//import {db} from './dbConnection';

const app = express();
app.use(express.json());
app.use(cors);

const PORT = 8080;

app.listen(PORT, () => console.log(`This app is on port ${PORT}`));

console.log(`Test1`);

app.post(`/message`, express.json(), (req, res) => {
    console.log(`req.body`, req.body);
    res.json({status: `Message received!`});
});


// app.get(`/`, (req, res) => res.json({message: `This app is working here`}));
