// Version 1
// function App() {
  
//     function handleClick(){
//       console.log("I was clicked!");
//     }

//   return (
//     <>
    
//       <h1 onClick={handleClick}>Event Handler</h1>
//       <button onClick={handleClick}>Click me!</button>

//     </>
//   )
// }

// Version 2
// function App(){
//   return (
//     <>
//       <h1>Inline events</h1>
//       <button onClick={() => console.log("I was clicked!")}>Arrow!</button>

//       <button
//         onClick={function() {
//           console.log("I was clicked!")
//         }}
//         >Normal!</button>
//     </>
//   )
// }

// Version 3
function App(){
  
  function handleClick(username){
    console.log(`Hello ${username}`);
  }

  return (
    <>
      <h1>Greeting</h1>
      <button onClick={() => handleClick("Bertie")}>Greet Bertie!</button>

      <button
        onClick={function() {
          console.log("I was clicked!")
        }}
        >Normal!</button>
    </>
  )
}

export default App
