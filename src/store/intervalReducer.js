const defaultState = {
    interval: '',
    cronValue: '',
}

const SET_INTERVAL = 'SET_INTERVAL';
const CONVERT_INTERVAL_TO_CRON = 'CONVERT_INTERVAL_TO_CRON';

export const intervalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_INTERVAL:
            return {
                ...state,
                interval: action.payload,
                cronValue: convertIntervalToCron(action.payload),
            }

        default:
            return state;
    }
};

const convertIntervalToCron = (interval) => {
    // const minutes = `*/${interval}`;

    return `*/${interval}`;
}

export const setIntervalAction = (payload) => ({ type: SET_INTERVAL, payload });
export const convertIntervalAction = (payload) => ({type: CONVERT_INTERVAL_TO_CRON, payload})
