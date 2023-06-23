const defaultState = {
    day: '',
    cronValue: '',
}

const SELECT_DAY = 'SELECT_DAY';


export const dayReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SELECT_DAY:
            return {
                ...state,
                day: action.payload,
                cronValue: convertDayToCron(action.payload),
            };

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