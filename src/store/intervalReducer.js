const defaultState = {
    interval: '',
    cronValue: '',
}

const SET_INTERVAL = 'SET_INTERVAL';
const RESET_INTERVAL = 'RESET_INTERVAL'

export const intervalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_INTERVAL:
            return {
                ...state,
                interval: action.payload,
                cronValue: convertIntervalToCron(action.payload),
            }
        case RESET_INTERVAL:
            return {
                ...state,
                interval: '',
                cronValue: '',
            }

        default:
            return state;
    }
};

const convertIntervalToCron = (interval) => {
    return `*/${interval}`;
}

export const setIntervalAction = (payload) => ({ type: SET_INTERVAL, payload });
export const resetIntervalAction = (payload) => ({ type: RESET_INTERVAL, payload });
