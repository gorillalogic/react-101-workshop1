import { useState } from "react";

function Counter (props) {
  const [counter, setCounter] = useState(props.initialValue)
  const [initName, setInitName] = useState({name: 'emma'})

  const increase = () => {
    setCounter( counter + 1)
  }
  const decrease = () => {
    setCounter( counter - 1)
  }
  return (
    <>
      <h2>Current Value {counter}</h2>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increase}>Increase</button>
    </>
  )
}

export default Counter;