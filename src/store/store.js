import { createStore, combineReducers } from "redux";
import { dayReducer } from "./dayReducer";
import { periodReducer } from "./periodReducer";
import { intervalReducer } from "./intervalReducer";
import { timeReducer } from "./timeReducer";
import { monthReducer } from "./monthReducer";
import { dateReducer } from "./dateReducer";


const rootReducer = combineReducers({
    month: monthReducer,
    day: dayReducer,
    period: periodReducer,
    time: timeReducer,
    interval: intervalReducer,
    date: dateReducer,
})

export const store = createStore(rootReducer);