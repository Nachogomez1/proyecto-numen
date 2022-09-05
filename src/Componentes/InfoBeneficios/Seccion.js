import React from "react";
import './infoBeneficios.css'



const Seccion = ({data} ) => {

  const {titulo, descripcion, icono} = data;
  return (
    <div className='benef'>
      <h3 style={{ textDecoration: "underline", textShadow: "2px 1px 3px black" }}>{titulo} </h3>
      <h5 style={ {color: "black"}} >{descripcion} </h5>
       {icono}
      
    </div>
  )
}
  
export default Seccion

