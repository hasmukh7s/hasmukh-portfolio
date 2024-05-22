import { takeEvery, put } from "redux-saga/effects"
import { POST_DETAILS, PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "../action/Constant";

function* getProducts() {
    let data = yield fetch("https://jsonplaceholder.typicode.com/posts");
    data = yield data.json()
    yield put({ type: SET_PRODUCT_LIST, data })

}

function* postDetails(action) {
    console.log("action ",action)
    // let data = yield fetch("https://jsonplaceholder.typicode.com/posts");
    // data = yield data.json()
    // yield put({ type: POST_DETAILS, data })

}

// function* searchProducts(data) {
//     let result = yield fetch("https://jsonplaceholder.typicode.com/posts");
//     result = yield result.json()
//     console.warn('action is failed',result);
//     yield put({ type: PRODUCT_LIST, data:result })

// }

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(POST_DETAILS, postDetails)
    // yield takeEvery(SEARCH_PRODUCT, searchProducts)

}
export default productSaga;