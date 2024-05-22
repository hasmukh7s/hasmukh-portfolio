import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../action/Constant";

export const productData = (data = [],action) => {
    switch (action.type) {
        case PRODUCT_LIST:
            console.warn("product list condition",action)
            return [action.data, ...data];
            case SET_PRODUCT_LIST:
                console.warn("set product list condition",action)
                return [...action.data];
        default:
            return data;
    }
}