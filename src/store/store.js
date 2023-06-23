import { createStore, combineReducers } from "redux";
import { dayReducer } from "./dayReducer";
import { periodReducer } from "./periodReducer";
import { intervalReducer } from "./intevalReducer";
import { timeReducer } from "./timeReducer";
import { monthReducer } from "./monthReducer";


const rootReducer = combineReducers({
    month: monthReducer,
    day: dayReducer,
    period: periodReducer,
    time: timeReducer,
    interval: intervalReducer,
    
})

export const store = createStore(rootReducer);