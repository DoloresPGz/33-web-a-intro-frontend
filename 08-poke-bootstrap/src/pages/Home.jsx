import { useEffect, useState } from "react"

const Home = () => {
    const [pokemons, setPokemons] = useState([]) //Lista de Pokemones
    useEffect((() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(res => res.json())
        .then(data => setPokemons(data.results))
        .catch(error => console.error(error))
    }), [])
  return (
    
    <div className="container">
        <h1>Home</h1>
        <div className="row">
            {
                //Despliego mi lista de pokemones
                pokemons.map(pokemon =>(
                    <div className="col-sm-4 mb-4" key={pokemon.name}>
                        <div className="card">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`} alt={pokemon.name} />
                            <div className="card-body">
                                <h5 className="card-title">{pokemon.name}</h5>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
export default Home