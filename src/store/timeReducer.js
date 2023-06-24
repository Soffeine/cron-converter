const defaultState = {
    time: '',
    cronValue: '* *'
}

const SET_TIME = 'SET_TIME';
const RESET_TIME = 'RESET_TIME';

export const timeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_TIME:
            return {
                ...state,
                time: action.payload,
                cronValue: convertTimeToCron(action.payload),
            }
        case RESET_TIME:
            return {
                ...state,
                time: '',
                cronValue: '* *'
            }

        default:
            return state;
    }
};

const convertTimeToCron = (time) => {
    const [hours, minutes] = time.split(':');
    return `${minutes} ${hours}`

}

export const setTimeAction = (payload) => ({ type: SET_TIME, payload });
export const resetTimeAction = (payload) => ({ type: RESET_TIME, payload });
