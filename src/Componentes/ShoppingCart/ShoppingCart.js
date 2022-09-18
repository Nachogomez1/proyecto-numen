import React from "react";
import { useReducer, useEffect } from "react";
import CartItems from "./CartItems";
import { shoppingInitialState, shoppingReducer } from "./ShoppingReducer";
import Products from "./Products";
import { TYPES } from "./ShoppingActions";
import "./shopping.css"
import axios from "axios";


const ShoppingCart =() =>{
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)  

    const updateState = async () => {
        const productsURL = "http://localhost:5000/products",
          cartURL = "http://localhost:5000/cart"    

    const resProducts = await axios.get(productsURL),
         resCart = await axios.get(cartURL)  

    const productsList = await resProducts.data,
        newCartItem = await resCart.data  

    dispatch({type: TYPES.READ_STATE, payload: [productsList, newCartItem]})    

    }

    useEffect(() => {
        updateState() 
     
    }, [])
    

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

    <h3 className="tittleShop">Celulares</h3>

        <article className='boxProduct grid-responsive'>
            {
                products.map(product => <Products key={product.id} data={product} addToCart={addToCart} />)
            }
        </article>

        <h3 className="tittleCart">Carrito</h3>

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