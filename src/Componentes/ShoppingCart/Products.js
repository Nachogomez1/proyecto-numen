import React from 'react'
import "./shopping.css"

const Products = ({data, addToCart}) => {

    const{id,nombre, precio, imagen}= data;
  return (
    <div className='boxProduct'>
        
        <h4> {nombre } </h4>
        <img src= {imagen} alt=""  height="100" /> 
        <h5>$ {precio}</h5>
        <button onClick={()=> addToCart(id)} className="addButtom"> Agregar </button>
    </div>
  )
}

export default Products