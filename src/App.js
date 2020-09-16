import React, { useState } from 'react'

const App = () => {


const [countState, setCountState] = useState({
  count: 0
})

const handleBtnClick = () => {
  setCountState({ count: countState.count + 1 })
}
  return(
    <>

  <h1>Count: {countState.count}</h1>
    <button onClick={handleBtnClick}>Click Me</button>

    </>
  )
}

export default App