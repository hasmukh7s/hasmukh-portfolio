import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./Constant"

export const addToCart = (data) => {
    console.warn("action called",data)
    return {
        type : ADD_TO_CART,
        data
    }
}

export const removeFromCart = (data) => {
    console.warn("action called of Removal",data)
    return {
        type : REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = (data) => {
    console.warn("action called of Empty",)
    return {
        type : EMPTY_CART,
        
    }
}