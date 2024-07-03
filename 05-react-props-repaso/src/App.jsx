//import './App.css'
import Saludar from './components/Saludar' // Esto es si es default
// import { Saludar } from './components/Saludar' // Esto es si no es un default
import { SaludoAmigable, SaludoNoTanAmigable, SaludoDeCompas, SaludoConProps, SaludoConDestructuracion } from './components/Saludos'

function App() {

  return (
    <>
      <Saludar />
      <SaludoAmigable />
      <SaludoNoTanAmigable />
      <SaludoDeCompas />
      <SaludoConProps  name="Mackaber" /> {/* props = { name: "Mackaber" } */}
      <SaludoConDestructuracion name="Mackaber" />
    </>
  );
}

export default App
