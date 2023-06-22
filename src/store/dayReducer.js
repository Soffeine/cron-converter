const defaultState = {
    selectedDay: '',
    cronValue: '',
}

const SELECT_DAY = 'SELECT_DAY';

export const dayReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SELECT_DAY:

            const day = action.payload;
            const cronResult = convertToCronValue(day);
            return {
                ...state,
                selectedDay: day,
                cronValue: cronResult,
            }

        default:
            return state;
    }
}

const convertToCronValue = (day) => {

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

export const selectWeekDay = (payload) => ({type: SELECT_DAY, payload})