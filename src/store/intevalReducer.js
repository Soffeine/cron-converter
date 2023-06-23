const defaultState = {
    interval: '',
}

const SET_INTERVAL = 'SET_INTERVAL'

export const intervalReducer = (state = defaultState, action) => {
    switch (action.payload) {
        case SET_INTERVAL:
            return {
                ...state,
                interval: action.payload,
            }

        default:
            return state;
    }
};

export const setIntervalAction = (payload) => ({ type: SET_INTERVAL, payload });