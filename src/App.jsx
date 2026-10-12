import { useState } from 'react'
import './App.css'

const APP_NAME = 'My Counter App'
const APP_VERSION = '1.0.0'

function App() {
  // count holds the current value; setCount updates it
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <main className="app">
      <div className="card">
        <h1 className="title">{APP_NAME}</h1>

        <p className="count">{count}</p>

        <div className="buttons">
          <button className="btn btn-decrement" onClick={decrement}>
            −1
          </button>
          <button className="btn btn-reset" onClick={reset}>
            Reset
          </button>
          <button className="btn btn-increment" onClick={increment}>
            +1
          </button>
        </div>

        <footer className="version">Version {APP_VERSION}</footer>
      </div>
    </main>
  )
}

export default App
