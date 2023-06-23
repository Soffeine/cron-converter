const defaultState = {
    time: '',
    cronValue: ''
}

const SET_TIME = 'SET_TIME';

export const timeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_TIME:
            return {
                ...state,
                time: action.payload,
                cronValue: convertTimeToCron(action.payload),
            }

        default:
            return state;
    }
};

const convertTimeToCron = (time) => {
    const [hours, minutes] = time.split(':');
    console.log( `${minutes} ${hours} ***`)
    return `${minutes} ${hours}`
    
}

export const setTimeAction = (payload) => ({ type: SET_TIME, payload });
