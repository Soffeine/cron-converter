const defaultState = {
    time: '',
}

const SET_TIME = 'SET_TIME';
const CONVERT_TO_CRON = 'CONVERT_TO_CRON';

export const timeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_TIME:
            return {
                ...state,
                time: action.payload,
            }
        case CONVERT_TO_CRON:
            return {
                ...state,
                cronValue: convertToCron(action.payload),
            }

        default:
            return state;
    }
};

const convertToCron = (time) => {
    console.log(time)
}

export const setTimeAction = (payload) => ({ type: SET_TIME, payload });
export const convertTimeToCronAction = (payload) => ({ type: CONVERT_TO_CRON, payload });