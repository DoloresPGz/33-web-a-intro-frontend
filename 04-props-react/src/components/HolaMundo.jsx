const HolaMundo = ({saludo, nombre}) => {
    return (
      <>
      <h1 style= {{color:"green", fontSize:"30px"}} >Hola grupo 33</h1>
      <p>{saludo}</p>
      <p>{nombre}</p>
      </>
    )
  }


// const HolaMundo = (props) => {
//   return (
//     <>
//     <h1>Hola grupo 33</h1>
//     <p>{props.saludo}</p>
//     <p>{props.nombre}</p>
//     </>
//   )
// }
export default HolaMundo
