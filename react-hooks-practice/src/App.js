import React, { useState}  from 'react'


function App() {
  const [count, setCount] = useState(4)

  function decrement(){
    setCount(prevCount => prevCount - 1)
  }

  function increment(){
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default App;