import { POST_DETAILS } from "./Constant";

export const postDetails = (data) => {
    console.log("post details action",data);
    return {
        type:POST_DETAILS,
        data
    }
}