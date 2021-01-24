import React, { useState} from 'react'

function App() {
  // for complex state use useState(() => 4)
  const [state, setState] = useState({ count: 4, theme: 'blue'})
  const count = state.count
  const theme = state.theme

  function decrement() {
    setState(prevState => {
      return {...prevState, count: prevState.count - 1 }
    })
  }

  function increment() {
    setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default App;