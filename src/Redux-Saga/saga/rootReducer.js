import { combineReducers } from 'redux'

import { cartData } from '../reducer/Reducer'
import { productData } from '../reducer/productReducer'
import { postDetails } from '../reducer/postReducer'

export default combineReducers({
    cartData,
    productData,
    postDetails
})