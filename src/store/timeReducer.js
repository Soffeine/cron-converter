const defaultState = {
    time: '',
}

const SET_TIME = 'SET_TIME';
const CONVERT_TIME_TO_CRON = 'CONVERT_TIME_TO_CRON';

export const timeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_TIME:
            return {
                ...state,
                time: action.payload,
            }
        case CONVERT_TIME_TO_CRON:
            return {
                ...state,
                cronValue: convertTimeToCron(action.payload),
            }

        default:
            return state;
    }
};

const convertTimeToCron = (time) => {
    console.log('blaaaaa')
}

export const setTimeAction = (payload) => ({ type: SET_TIME, payload });
export const convertTimeToCronAction = (payload) => ({ type: CONVERT_TIME_TO_CRON, payload });