import React,{ useReducer } from 'react'
import './App.css'

const reducer=(state,action)=>{
  if(action.type === 'add'){
    return {counter: state.counter+1}
  }

  else if(action.type === 'remove'){
    if(state.counter === 0){
      return state;
    }
    else
      return {counter: state.counter-1}
  }

  else{
    throw new Error('Unsupported action Type')
  }
};

function App() {
  const [state,dispatch]=useReducer(reducer,{counter:0})
  // it is a pure function

  const addValue=()=>{
    dispatch({type:"add"});
  }

  const removeValue=()=>{
    dispatch({type:"remove"});
  }

  return (
    <>
      <h2>Counter value: {state.counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
