import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`The app is listening on port ${PORT}`);
});

app.get('/message', (req, res)=>{
    res.json({message: `Here is a message`});
});