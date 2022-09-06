import React from 'react'
import "./shopping.css"

const Products = ({data, addToCart}) => {

    const{id,nombre, precio}= data;
  return (
    <div className='boxProduct'>

        <h4> {nombre } </h4>
        <h5>$ {precio}</h5>
        <button onClick={()=> addToCart(id)}> Agregar </button>
    </div>
  )
}

export default Products