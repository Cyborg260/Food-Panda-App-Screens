import {
    ADDTOCART
} from "./actionType"

export const addtocart = (item) => {

    console.log('================== addtocart');
    console.log(item);

    return {
        type: ADDTOCART,
        payload: item
    }
}