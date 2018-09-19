const byId = (state = {}, action) => {
    if (action.response) {
        return {
            ...state,
            ...action.response.entities.calendarEvents
        }
    }
    return state
}

export default byId

export const getCalendarEvent = (state, id) => state[id]