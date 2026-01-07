// const items = [
//   {
//     userid:1,
//     id:1,
//     title:'delectus aut autem',
//     completed:false,
//   },
//   {
//     userid:1,
//     id:2,
//     title:'quis ut nam facilis et officia qui',
//     completed:true,
//   },
//   {
//     userid: 1,
//     id: 3,
//     title: 'fugiat veniam minus',
//     completed: false,
//   },
// ];

import './App.css'
import {useState} from "react";
import {useEffect} from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      const data = await response.json();
      setCats(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.title}</li>
        })}
      </ul>
      <h1>Books</h1>
      <ul>
        {cats.map((cat) => {
          return <img key={cat.id} src={cat.url}></img>
        })}
      </ul>
    </div>
  );
}
