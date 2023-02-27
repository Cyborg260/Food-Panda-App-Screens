import {
    ADDTOCART
} from "./actionType"

const initialState = {
    quantity: 0,
    price: 0,
    product: {}
}

export const mainreducers = (state = initialState, action) => {
    switch (action.type) {
        case ADDTOCART:
            
            return {
                ...state,
                quantity: action.payload.quantity,
                price: action.payload.price,
            }
        default:
            return state;
    }
}