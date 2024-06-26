import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("")
  
  let nombre = "Pepe"

  const inputChange = (event) => {
    setName(event.target.value)

    nombre = event.target.value
    // console.log(nombre)

  }



  return (
    <>
      <input onKeyUp={inputChange} />

      <h1>Hola { name }</h1>
      <h2>Hola { nombre }</h2>
    </>
  )
}

export default App
