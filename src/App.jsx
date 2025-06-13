import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserSection from './components/UserSection'
import Counter from './components/Counter'


function App() {

  return (
    <div>
      <header>
        <h2>Espectadores</h2>
      </header>
      <Counter count={5}/>
      <UserSection mods={5}/>
    </div>
  ) 
}

export default App
