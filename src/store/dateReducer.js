const defaultState = {
    date: '',
}

const SET_DATE = 'SELECT_DATE';


export const dateReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_DATE:
            return {
                ...state,
                day: action.payload,
            };

        default:
            return state;
    }
}

export const setDateAction = (payload) => ({ type: SET_DATE, payload });