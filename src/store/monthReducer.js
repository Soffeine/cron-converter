const defaultState = {
    month: '',
    cronValue: '',
};

const SELECT_MONTH = 'SELECT_MONTH';

export const monthReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SELECT_MONTH:
            return {
                ...state,
                month: action.payload,
                cronValue: convertMonthToCron(action.payload),
            }
        default:
            return state;
    }
};

const convertMonthToCron = (month) => {
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

    return monthsInCron[month];
}

export const selectMonthAction = (payload) => ({ type: SELECT_MONTH, payload });
