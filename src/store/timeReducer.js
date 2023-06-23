const defaultState = {
    time: '',
}

const SET_TIME = 'SET_TIME'

export const timeReducer = (state = defaultState, action) => {
    switch (action.payload) {
        case SET_TIME:
            return {
                ...state,
                time: action.payload,
            }

        default:
            return state;
    }
};

export const setTimeAction = (payload) => ({ type: SET_TIME, payload });