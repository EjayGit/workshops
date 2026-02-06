const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Event API!');
});

app.listen(PORT, () => {
    console.log(`API is listening on PORT: ${PORT}`);
});

let photos = [
  {
    "id": 1,
    "title": "Flowers in grey",
    "src": "https://www.andrewbirchphotography.com/images/lg/1090.jpg",
    "alt": "Image of flowers in grey."
  },
  {
    "id": 2,
    "title": "Bare trees in grey",
    "src": "https://www.andrewbirchphotography.com/images/lg/1510.jpg",
    "alt": "An image of trees in grey."
  },
  {
    "id": 3,
    "title": "Leaf road",
    "src": "https://www.andrewbirchphotography.com/images/lg/1553.jpg",
    "alt": "An image of a road covered in leaves surrounded by trees."
  },
  {
    "id": 4,
    "title": "Streaks of cloud",
    "src": "https://www.andrewbirchphotography.com/images/lg/1803.jpg",
    "alt": "An image of clouds streaking across the sky, in grey"
  },
  {
    "id": 5,
    "title": "Large bare oak tree",
    "src": "https://www.andrewbirchphotography.com/images/lg/1819.jpg",
    "alt": "An image of a large oak tree in grey."
  },
  {
    "id": 6,
    "title": "A field of straw",
    "src": "https://www.andrewbirchphotography.com/images/lg/1319.jpg",
    "alt": "An image of a field of straw."
  },
  {
    "id": 7,
    "title": "A beam through shadow",
    "src": "https://www.andrewbirchphotography.com/images/lg/1138.jpg",
    "alt": "An image of a beam of light through the shadows."
  },
  {
    "id": 8,
    "title": "Flowers",
    "src": "https://www.andrewbirchphotography.com/images/lg/1180.jpg",
    "alt": "An image of flowers."
  }
]

app.get('/photos', (req, res)=>{
    res.json(photos);
});