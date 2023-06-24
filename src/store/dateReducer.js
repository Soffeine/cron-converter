const defaultState = {
    date: '',
    cronValue: '*',
}

const SET_DATE = 'SET_DATE';
const RESET_DATE = "RESET_DATE"



export const dateReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_DATE:
            return {
                ...state,
                date: action.payload,
                cronValue: action.payload,
            };
        case RESET_DATE:
            return {
                ...state,
                date: '',
                cronValue: '*',
            }

        default:
            return state;
    }
}

export const setDateAction = (payload) => ({ type: SET_DATE, payload });
export const resetDateAction = (payload) => ({ type: RESET_DATE, payload })