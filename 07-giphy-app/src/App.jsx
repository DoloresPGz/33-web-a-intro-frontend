import {useState, useEffect} from "react"
import './App.css'

function App() {
  //Creo el estado que se va a encargar de actualizar la lista de gifs
  const [gifs, setGifs] = useState([])
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY
  //Las llamadas a las API generalmente se hacen en el useEffect
  //Usaremos useEffect con un arreglo de dependencias vacío para que se ejecute una sola vez
  useEffect(() =>{
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`)
    .then(response => response.json())
    .then(result =>{
      console.log(result);
      setGifs(result.data)
    }).catch(error => console.log(error))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div>
        <h1>Giphy App</h1>
      </div>
    </>
  )
}

export default App
