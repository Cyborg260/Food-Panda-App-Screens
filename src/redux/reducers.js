import {
    ADDTOCART
} from "./actionType"

const initialState = {
    counter: 0,
    price: 0,
    product: {}
}

export const mainreducers = (state = initialState, action) => {
    switch (action.type) {
        case ADDTOCART:
            return {
                ...state,
                counter: action.payload,
                price: action.rupees,
            }
        default:
            return state;
    }
}