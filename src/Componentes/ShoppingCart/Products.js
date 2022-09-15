import React from 'react'
import "./shopping.css"

const Products = ({data, addToCart}) => {

    const{id,nombre, precio}= data;
  return (
    <div className='boxProduct'>
        <img src="" alt="" prop=""></img>
        <h4> {nombre } </h4>
        <h5>$ {precio}</h5>
        <button onClick={()=> addToCart(id)} className="addButtom"> Agregar </button>
    </div>
  )
}

export default Products