export const selectDay = (day) => {
    return {
        type: "SELECT_DAY",
        payload: day,
    }
}