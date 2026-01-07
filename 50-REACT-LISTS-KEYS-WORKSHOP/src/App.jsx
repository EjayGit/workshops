import './App.css'

function App() {
  const items = ["item 1", "item 2", "item 3"];
  const htmlItems = items.map((item) => <li key={item}>{item}</li>);
  console.log(htmlItems);
  
  return (
    <>
      <ul>{htmlItems}</ul>
      <ul>
        {items.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </>
  )
}

export default App
