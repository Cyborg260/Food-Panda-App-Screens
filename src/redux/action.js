import {
    ADDTOCART
} from "./actionType"

export const addtocart = (item) => {
    return {
        type: ADDTOCART,
        payload: item.payload,
        rupees:item.rupees,
    }
}