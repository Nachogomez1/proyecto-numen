import React from 'react'
import "./shopping.css"

const CartItems = ({data, deleteFromCart}) => {

    const {id,nombre, precio, quantity} = data;

  return (
    <div className='boxCarrito'> 
        <h4> {nombre} </h4>
        <h5> $ {precio} x {quantity} = $ {precio * quantity} </h5>
        <button onClick={()=> deleteFromCart(id)} className="deleteButtom"> Eliminar uno</button>
        <button onClick={()=> deleteFromCart(id, true)} className="deleteAllButtom"> Eliminar todos</button>


    </div>
  )
}

export default CartItems