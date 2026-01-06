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
// function App(){
  
//   function handleClick(username){
//     console.log(`Hello ${username}`);
//   }

//   return (
//     <>
//       <h1>Greeting</h1>
//       <button onClick={() => handleClick("Bertie")}>Greet Bertie!</button>

//       <button
//         onClick={function() {
//           console.log("I was clicked!")
//         }}
//         >Normal!</button>
//     </>
//   )
// }

//************** */ Workshop *******************
function App(){

    function clickHandler(){
        console.log("Function activated!")
    }

    function clickHandler2(name){
        console.log(name);
    }

    return(
        <>
            <button onClick={() => console.log("Button clicked!")}>Click me!</button>
            <button onClick={() => console.log("Click me again button clicked!")}>Click me again!</button>
            <button onClick={() => console.log("Again again button clicked!")}>Again again!!</button>

            <button onClick={clickHandler}>Click me!</button>
            <button onClick={() => clickHandler2('Universe')}>Click me for an input!</button>
        </>
    )
}

export default App
