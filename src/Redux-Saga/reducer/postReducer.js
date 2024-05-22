import { POST_DETAILS } from "../action/Constant";

export const postDetails = (data = [],action) => {
    console.log("action detail",action.data, data)
    switch (action.type) {
        case POST_DETAILS:
            return [action.data, ...data];
        default:
            return data;
    }
}