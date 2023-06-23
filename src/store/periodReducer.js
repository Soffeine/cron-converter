const defaultState = {
    period: '',
}

const SET_PERIOD = 'SET_PERIOD'

export const periodReducer = (state = defaultState, action) => {
    switch (action.payload) {
        case SET_PERIOD:
            return {
                ...state,
                period: action.payload,
            }

        default:
            return state;
    }
};

export const setPeriodAction = (payload) => ({ type: SET_PERIOD, payload })