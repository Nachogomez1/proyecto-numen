import { TYPES } from "./ShoppingActions";

export const shoppingInitialState={
    products:[
        {id:1, nombre: "Producto 1", precio: 10000},
        {id:2, nombre: "Producto 2", precio: 15000},
        {id:3, nombre: "Producto 3", precio: 20000},
        {id:4, nombre: "Producto 4", precio: 25000},
        {id:5, nombre: "Producto 5", precio: 30000},
        {id:6, nombre: "Producto 6", precio: 35000}
    ],
    cart:[]
};

export function shoppingReducer(state,action){
    switch(action.type){
        case TYPES.ADD_TO_CART:{
            let newItem= state.products.find(product=> product.id=== action.payload)
           
            let itemInCart= state.cart.find(item => item.id === newItem.id)
           
            return itemInCart
            ? {
                ...state,
                cart: state.cart.map(item=> 
                    item.id===newItem.id
                    ?{...item, quantity: item.quantity +1 }
                    : item )
            }
            :{
            ...state,
            cart:[...state.cart,{...newItem, quantity:1}]
            }
        }
        case TYPES.REMOVE_ONE_FROM_CART:{

            let itemToDelete= state.cart.find(item=> item.id === action.payload )
            return itemToDelete.quantity > 1
            ? {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload
                    ?{...item, quantity: item.quantity -1}
                    : item
                 )
            }
            :{
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
        case TYPES.REMOVE_ALL_FROM_CART:{
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }

        }
        case TYPES.CLEAR_CART:{
            return shoppingInitialState 
         }
        default:
            return state;
    }
}