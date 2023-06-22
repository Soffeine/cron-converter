import { createStore } from "redux";
import { dayReducer } from "./dayReducer";

const store = createStore(dayReducer);

export default store;