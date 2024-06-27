import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const [valor, setValor] = useState(0)
    const [nombre, setNombre] = useState("")
    const [encendido, setEncendido] = useState(true)

    console.log(valor);

   const sumar =  () =>  {
        setValor(valor + 1 );
        actualizarValor();
    };

    const restar =  () =>  {
        setValor(valor - 1 );
        actualizarValor();
    };

    const actualizarValor = () => {
        console.log(valor,"hola");
        if (valor === 5){
            setNombre("juanjo")
        }
        else if (valor === 10){
           setNombre("stiven")
        }
        else{
            setNombre("")
        }

    }


  return (

   <>
      <h1>hola bien o que</h1>
    <div className="container">
    <Link to="/about">about us</Link>
    <Link to="/contact">Contact me </Link>
    </div>
    <div >
        <button onClick={sumar}>Sumar 1</button>
        <button onClick={restar}>Restar 1</button>
    </div>

    <>
    <div id="motor">{encendido ? "encendido" : "apagado"}</div>
    <button onClick={() => setEncendido(true)}>prender</button>
        <button onClick={() => setEncendido(false)}>apagar</button>
        {encendido ? (<p><span id="valor">{valor} <span>{nombre}</span></span></p>): (null)}
    </>
   </>
  )
}
