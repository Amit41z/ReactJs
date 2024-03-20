import Chai from "./chai"

// function App() {
//   return (
// // {/* <h1>Chai aur react with vite | Amit Kumar Ghosh</h1>  */}
// <Chai/>
//   )
// }

function App() {
  const username="chai aur code"
  return (
    <>  
    /*fragments*/
    <h1>Chai aur react with vite |{username}</h1>  
<Chai/>
<p>React with vite</p>
    </>

  )
}

export default App


// {username} this is known as evaluated expression 