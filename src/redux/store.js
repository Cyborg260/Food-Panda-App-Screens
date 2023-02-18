import { createStore } from "redux";
import { mainreducers } from "./reducers";
export const store = createStore(mainreducers)
