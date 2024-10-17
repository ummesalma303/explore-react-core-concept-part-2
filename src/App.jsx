// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'

function App() {

 function handleClick() {
  alert("hi.... what's up")
 }
  function handleClickParams(num) {
    const result=num + 2
    alert(result)
  }
  return (
    <>
      <Team></Team>
      <Counter></Counter>
      <div>
      <h2>React Core Concept</h2>
      <button onClick={handleClick}>click</button>
      <button onClick={() => alert('hi guys')}>second click</button>
      <button onClick={()=>handleClickParams(7)}>Third Click</button>
     </div>
    </>
  )
}

export default App
