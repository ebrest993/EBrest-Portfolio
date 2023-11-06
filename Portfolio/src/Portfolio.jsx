import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <h1> Elliott </h1>
          <ul>
            <a href="/">About Me</a>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Resume</li>
          </ul>
        {/* </Navbar> */}
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
       
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            This is a 
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )}
    
export default App
