const defaultState = {
    month: '',
}

const SELECT_MONTH = 'SELECT_MONTH'

export const monthReducer = (state = defaultState, action) => {
    switch (action.payload) {
        case SELECT_MONTH:
            return {
                ...state,
                month: action.payload,
            }

        default:
            return state;
    }
};

export const selectMonthAction = (payload) => ({ type: SELECT_MONTH, payload });