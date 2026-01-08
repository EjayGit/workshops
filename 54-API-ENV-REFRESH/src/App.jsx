import { meta } from 'eslint-plugin-react-hooks';
import './App.css'
import { useState, useEffect } from 'react';

function App() {
  const [otters, setOtters] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(import.meta.env.VITE_API_KEY);
      const data = await response.json();
      setOtters(data);
    }
    getData();
  }, []);
  
  return (
    <>
      
    </>
  )
}

export default App

/*
This is a fake api for this demo 
https://otters.com/api  <- will return error.
https://otters.com/api/e7fuf7843 <- returns data.
*/