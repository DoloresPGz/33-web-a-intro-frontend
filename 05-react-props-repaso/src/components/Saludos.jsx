export function SaludoAmigable() {
  return (
    <h1>Hola Que Tal!</h1>
  )
}

export function SaludoNoTanAmigable() {
  return (
    <h1>No me caes bien!</h1>
  )
}

export function SaludoDeCompas() {
  return (
    <h1>Hola De Compas!</h1>
  )
}

export function SaludoConProps(props) {
  return (
    <h1>Hola {props.name}</h1>
  )
}

export function SaludoConDestructuracion({name}) {
  // const {name} = props
  return (
    <h1>Hola {name}</h1>
  )
}


// Otra opción para exportar
// export SaludoAmigable, SaludoNoTanAmigable, SaludoDeCompas