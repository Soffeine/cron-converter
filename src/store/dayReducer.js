const defaultState = {
    day: '',
    cronValue: '',
}

const SELECT_DAY = 'SELECT_DAY';
const CONVERT_DAY_TO_CRON = 'CONVERT_DAY_TO_CRON';

export const dayReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SELECT_DAY:
            return {
                ...state,
                day: action.payload,
            };

        case CONVERT_DAY_TO_CRON:
            return {
                ...state,
                cronValue: convertDayToCron(action.payload),
            }

        default:
            return state;
    }
}

const convertDayToCron = (day) => {


    const daysInCron = {
        Monday: '1',
        Tuesday: '2',
        Wednesday: '3',
        Thursday: '4',
        Friday: '5',
        Saturday: '6',
        Sunday: '0',
    }

    const cronValue = daysInCron[day];
    return cronValue;
};

export const selectDayAction = (payload) => ({ type: SELECT_DAY, payload });
export const covertDayToCronAction = (payload) => ({ type: CONVERT_DAY_TO_CRON, payload })