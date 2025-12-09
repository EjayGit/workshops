import express from "express";

//init express
const app = express();

// tell app to use json
app.use(express.json());

// set up a port of 8080
const PORT = 8080;
app.listen(PORT, function(){
    console.log(`This app is listenin onport ${PORT}`);
});

// TODO: Set up a root route to READ a welcome message.
// route --> "/"
app.get('/', function(request, response){
    response.json({message: "Welcome to the root route. GET comfy!"});
});

// DB connection string
