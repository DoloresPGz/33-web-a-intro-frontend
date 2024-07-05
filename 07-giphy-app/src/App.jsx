import {useState, useEffect} from "react"
import './App.css'
import ImageCard from "./components/ImageCard"

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
        <div className="grid-cards">
          {
            gifs.map((gif, index) =>(
              <ImageCard 
                key={gif.id + index}
                url={gif.images.fixed_height.url}
                title={gif.title}
              />
            )
          )}
        </div>
      </div>
    </>
  )
}

export default App
