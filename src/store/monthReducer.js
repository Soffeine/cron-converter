const defaultState = {
    month: '',
    cronValue: '',
};

const SELECT_MONTH = 'SELECT_MONTH';
const CONVERT_TO_CRON = 'CONVERT_TO_CRON';

export const monthReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SELECT_MONTH:
            return {
                ...state,
                month: action.payload,
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

const convertToCron = (month) => {
    const monthsInCron = {
        '01': 'jan',
        '02': 'feb',
        '03': 'mar',
        '04': 'apr',
        '05': 'may',
        '06': 'jun',
        '07': 'jul',
        '08': 'aug',
        '09': 'sep',
        '10': 'oct',
        '11': 'nov',
        '12': 'dec',
    };

    const monthInCron = monthsInCron[month];
}

export const selectMonthAction = (payload) => ({ type: SELECT_MONTH, payload });
export const convertToCronAction = (payload) => ({ type: CONVERT_TO_CRON, payload });