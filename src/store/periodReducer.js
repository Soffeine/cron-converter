const defaultState = {
    period: '',
    cronValue: '',
}

const SET_PERIOD = 'SET_PERIOD'

export const periodReducer = (state = defaultState, action) => {
    switch (action.payload) {
        case SET_PERIOD:
            

        default:
            return state;
    }
}