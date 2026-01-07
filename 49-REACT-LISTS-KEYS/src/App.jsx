import Snacks from "./components/Snacks";
import './App.css';

function App() {
  const books = ["The Hobbit", "James and the Giant Peach", "1984"];

  return (
    <>
      <h1>Map - Showing lists in react</h1>
      <p>Showing items from an array defined in the component</p>
      {books.map((book) => {
        return <p key={book}>{book}</p>;
      })}

      <Snacks />
    </>
  );
}

export default App;