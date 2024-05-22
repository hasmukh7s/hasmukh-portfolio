import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./Constant"
export const productList = () => {
    return {
        type : PRODUCT_LIST,
        data : "Hello"
    }
}

// export const searchProduct = (query) => {
//     return {
//         type : SEARCH_PRODUCT,
//         query,
//     }
// }

