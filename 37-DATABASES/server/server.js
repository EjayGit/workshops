import { db } from "./seed.js";
import express from "express";

const app = express();
app.use(express.json());

app.listen(8080, () => {
    console.log(`This app is listening on port 8080`);
});

app.get(`/messages`, async (req, res) => {
    const messages = await db.query(`SELECT * FROM messages`);
    res.json(messages.rows);
});

