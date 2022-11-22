import { useState } from 'react'
import reactLogo from './assets/img.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p className='notFound'>404 NOT FOUND</p>
      <div className='container'>
        <img src={reactLogo} />
        <div className='containerText'>
          <h1 className='title'>I have bad news for you</h1>
          <p className='text'>The page you are looking for might be removed or is temporarily unavailable</p>
          <button>Back to homepage</button>
        </div>
      </div>
      
    </div>
  )
}

export default App
