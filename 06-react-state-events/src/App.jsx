import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

      <h3>
        Hola {name} tienes {age} años
      </h3>


      <h3>Numeros multiplicados por 2</h3>
      {numeros.map((n) => (
        <p key={n}>
          el numero {n} multiplicado por 2 es {n * 2}
        </p>
      ))}

      <h3>Numeros pares</h3>
      {numeros.filter((n) => n % 2 === 0)
        .map((n) => (
        <p key={n}>
          el numero {n} es par
        </p>
      ))}
    </form>
  );
}

export default App
