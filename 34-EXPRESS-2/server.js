import express from 'express';

const app = express();

app.use(express.json());

app.get('/movies', (request, response) => {
    
})