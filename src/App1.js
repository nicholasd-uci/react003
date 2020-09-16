import React, { useState } from 'react'

const App = () => {

const [countState, setCountState] = useState({
  count: 0,
  
})

countState.handleIncrement = () => {
  setCountState({ ...countState, count: countState.count + 1 })
}

countState.handleDecrement = () => {
    setCountState({ ...countState, count: countState.count - 1 })
}

countState.reset = () => {
      setCountState({ ...countState, count: 0 })
}

  return(
    <>
    <h1>{countState.message}</h1>
    <h1>Count: {countState.count}</h1>
    <button onClick={countState.handleIncrement}>Increase Number</button>
    <button onClick={handleDecrement}>Decrease Number</button>
    <button onClick={reset}>Rest</button>
    </>
  )
}

export default App