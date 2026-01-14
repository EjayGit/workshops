//imports
import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

//init express
const app = express();

//use JSON in our server
app.use(express.json());

//config cors
app.use(cors());

//port
const PORT = 8080;
app.listen(PORT, () => {
  console.info(`Server API is running on port ${PORT}`);
});

//routing system

//root route
//route --> http method GET
// READ data
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server API. GET comfy!" });
});

//READ posts data
//route --> http method GET
//static route
app.get("/read-posts", async (req, res) => {
  try {
    //query db
    const query = await db.query(
      `SELECT posts.id, posts.title, posts.content, categories.name AS catagory FROM posts JOIN categories ON posts.category_id = categories.id`
    );
    console.log(query.rows);
    res.json(query.rows);
    // throw new Error(); //to test catch block
  } catch (error) {
    console.error(error, "Response failed. Turn off and on");
    res.status(500).json({ response: "fail" });
  }
});

//READ posts and categories
app.get("/posts-categories", async (req, res) => {
  try {
    const query = await db.query(
      `SELECT posts.*, categories.* FROM posts JOIN categories ON posts.category_id = categories.id`
    );
    console.log(query.rows);
    res.json(query.rows);
  } catch (error) {
    console.error(error, "Response failed. Turn off and on");
    res.status(500).json({ response: "Please try again" });
  }
});

//CREATE new entries in the posts table
//route --> http method POST

app.post("/new-post", async (req, res) => {
  try {
    //collect the data to insert
    const data = req.body;
    //query the database to insert new data
    const query = await db.query(
      `INSERT INTO posts (title, content, category_id) VALUES ($1, $2, $3) RETURNING *`,
      [
        data.title,
        data.content,
        data.category_id
      ]
    );
    res.status(200).json({ request: "success" });
  } catch (error) {
    console.error(error, "Request failed. Turn off and on");
    res.status(500).json({ request: "Please try again" });
  }
});

app.delete("/delete-post/:id", async (req,res) => {
    try{
        const idParams = req.params.id;
        // const { id } = req.params;
        const query = await db.query(
            'DELETE FROM posts WHERE id = $1 RETURNING *',
            [idParams]
        );
        res.status(200).json({ request: "success"});
    } catch(error){
        res.status(500).json({request: "Please try again."})
    }
})

app.put("/update-post/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const {title, content, category_id} = req.body;
        const query = await db.query(
            'UPDATE posts SET title = $1, content = $2, category_id = $3 WHERE id = $4',
            [title, content, category_id, id]
        );
        res.status(200).json({ message: "Post updated successfully" });
    } catch(error){
        console.log(error, "Request failed. Try again later.");
        res.status(500).json({request: 'Please try again'});
    }
});

//------------------------------------------------------

//======================================================================

//The routes in this server API are now available to be fetched from the React client

// try {
//   fetch("http://localhost:8080/new-post", {
//     method: "POST",
//     headers: {},
//     body: JSON.stringify(),
//   });
// } catch (error) {}

// //the params value in the client is destructured from the useParams() hook.

// const { id } = useParams();
// fetch(`http://localhost:8080/delete-post/${id}`, {
//   method: "DELETE",
//   headers: {},
// });