const defaultState = {
    period: '',
    cronValue: '',
}

const SET_PERIOD = 'SET_PERIOD';
const CONVERT_PERIOD_TO_CRON = 'CONVERT_PERIOD_TO_CRON';


export const periodReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_PERIOD:
            return {
                ...state,
                period: action.payload,
                cronValue: convertPeriodToCron(action.payload),
            }
        default:
            return state;
    }
};

const convertPeriodToCron = (time) => {
    console.log(time)
}

export const setPeriodAction = (payload) => ({ type: SET_PERIOD, payload });
export const convertPeriodToCronAction = (payload) => ({ type: CONVERT_PERIOD_TO_CRON, payload });