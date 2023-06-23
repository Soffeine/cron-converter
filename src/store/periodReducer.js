const defaultState = {
    period: '',
}

const SET_PERIOD = 'SET_PERIOD';
const CONVERT_TO_CRON = 'CONVERT_TO_CRON';


export const periodReducer = (state = defaultState, action) => {
    switch (action.payload) {
        case SET_PERIOD:
            return {
                ...state,
                period: action.payload,
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

export const setPeriodAction = (payload) => ({ type: SET_PERIOD, payload });
export const convertPeriodToCronAction = (payload) => ({ type: CONVERT_TO_CRON, payload });