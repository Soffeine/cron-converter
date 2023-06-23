import { createStore, combineReducers } from "redux";
import { dayReducer } from "./dayReducer";
import { periodReducer } from "./periodReducer";


const rootReducer = combineReducers({
    day: dayReducer,
    period: periodReducer,
})

export const store = createStore(rootReducer);

// export const store = createStore(dayReducer)