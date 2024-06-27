import { useState } from 'react'
import viteLogo from '/vite.svg'
import googlelogo from '/google.svg'
import imagen from '/icon svg.svg'
import './App.css'

import datos from './database/datos.json'
console.log(datos)
console.log(datos.empleado)
console.log(datos.empleado.nombre)


function App() {
  const [count, setCount] = useState(0)

//   const numero = [1,2,3,4,]
//   const empleado = {
//   "nombre": "Cristian",
//   "apellido": "Yalanda"
// }
  return (
    <>
    
      <div>
        <a href="https://vitejs.dev" target="_blank" onClick={() => setCount((count) => count + 1)}>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://google.com" target="_blank" onClick={() => setCount((count) => count + 1)}>
          <img src={googlelogo} className="logo google" alt="google logo" />
        </a>
      </div>
      <h1>Buscador</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          cantidad visitas  {count}
        </button>

        <code>Espero encuentres lo que estas</code> buscandov
        <div>
          <img src = {imagen} class ="logo" alt="imagen" />
          {/* <p>{empleado.nombre} {empleado.apellido}</p>
          <p>{numero[0]} {numero[1]}</p> */}
          
          <p>{datos.empleado.nombre} {datos.empleado.apellido}</p>
        </div>
      </div>
      <p className="read-the-docs">
        has clik en los logos para abrir los buscadores
      </p>
    </>
  )
}

export default App
