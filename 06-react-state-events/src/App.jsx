import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const inputChange = (event) => {
    setName(event.target.value)
  }

  return (
    <form>
      <label htmlFor="name">Name: </label>
      <input type="text" onChange={inputChange} />
      <br />
      <label htmlFor="age">Age: </label>
      <input type="number" onChange={(event) => setAge(event.target.value)} />

      <h3>Hola {name} tienes {age} años</h3>
    </form>
  );
}

export default App
