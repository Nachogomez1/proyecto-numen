import React from "react";
import { useReducer } from "react";
import CartItems from "./CartItems";
import { shoppingInitialState, shoppingReducer } from "./ShoppingReducer";
import Products from "./Products";
import { TYPES } from "./ShoppingActions";
import "./shopping.css"


const ShoppingCart =() =>{
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)  

    const {products, cart} = state;

    const addToCart=(id) => dispatch({type:TYPES.ADD_TO_CART, payload: id})
    

    const deleteFromCart=(id, all =false) => {
        if (all) {
            dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload: id})
        } else {
            dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload: id})
        }
    }

    const clearCart=() => dispatch( {type: TYPES.CLEAR_CART})



    return(
    <div>
        
        <h3>Celulares</h3>
        <article className='boxProduct grid-responsive'>
            {
                products.map(product => <Products key={product.id} data={product} addToCart={addToCart} />)
            }
        </article>
<<<<<<< HEAD
       
        <h3> Cargadores</h3>
        <article className='boxProduct grid-responsive'>
            {
                products.map(product => <Products key={product.id} data={product} addToCart={addToCart} />)
            }
        </article>

        <h3>Fundas</h3>
=======
        
        <h3>Fundas y cargadores</h3>
>>>>>>> 561fc26478883a25cc817558acd6dae0196b5804
        <article className='boxProduct grid-responsive'>
            {
                products.map(product => <Products key={product.id} data={product} addToCart={addToCart} />)
            }
        </article>

        <h3> Auriculares</h3>
        <article className='boxProduct grid-responsive'>
            {
                products.map(product => <Products key={product.id} data={product} addToCart={addToCart} />)
            }
        </article>

        <h3>Carrito</h3>

        <article className='boxCarrito'>
           {
            cart.map ((item, index)=> <CartItems key ={index} data={item} deleteFromCart= {deleteFromCart} />) 
           } 
        </article>

             <button onClick={()=> clearCart()} className="cleanButtom">Limpiar carrito</button>

    </div>
);
};

export default ShoppingCart;