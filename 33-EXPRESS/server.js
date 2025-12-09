const data = [
  { name: "Robin", type: "garden", size: "small", cuteFactor: 900 },
  { name: "Puffin", type: "sea", size: "medium", cuteFactor: 1000 },
  { name: "Peacock", type: "farm", size: "medium", cuteFactor: 10 },
  { name: "Toucan", type: "jungle", size: "medium", cuteFactor: 8 },
  { name: "Crow", type: "corvid", size: "medium", cuteFactor: "800" },
  { name: "condor", type: "mountain", size: "larg", cuteFactor: 3 },
  { name: "blackbird", type: "garden", size: "small", cuteFactor: 75 },
  { name: "Magpie", type: "crow-family", size: "small-medium", cuteFactor: 0 },
  { name: "Golden Eagle", type: " mountain", size: "large", cuteFactor: 500 },
  { name: "penguin", type: "flightless", size: "medium", cuteFactor: 80 },
  { name: "Porg", type: "sci-fi", size: "small", cuteFactor: 5000 },
  { name: "hawk", type: "prey", size: "medium", cuteFactor: "999" },
];

import express from "express";

const app = express();

app.use(express.json());

app.listen(3000, ()=>{console.log("Server is listening on port 3000")});

app.post("/messages", (request, response) => {response.json({message: "Hello World"})});

app.get("/messages", (request, response) => {response.json({message: "Hello Universe"})});

app.get("/birds", (request, response) => {response.json(data)});

app.post("/add", (request, response) => {
  const numA = request.body.a;
  const numB = request.body.b;
  response.json(`${numA} + ${numB} = ${numA + numB}`);
});