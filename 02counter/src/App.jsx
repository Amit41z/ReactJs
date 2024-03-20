import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // const [variable,function]
  let [counter,setCounter] = useState(15)

  // let counter=5;

  const addValue=()=>{
    // counter=counter+1;
   if(counter>=20)
   {
    setCounter(20)
   }
   else
   {
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    setCounter(prevCounter=>prevCounter+1)
    // setCounter(prevCounter=>prevCounter+1)
    // setCounter(prevCounter=>prevCounter+1)
    // setCounter(prevCounter=>prevCounter+1)
   }
    // console.log("clicked ",counter);
    // document.querySelector('h2').textContent=counter;
  }

  const removeValue=()=>{
    if(counter<=0)
    {
      setCounter(0)
    }
    else
    {
      setCounter(counter-1)
    }
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
