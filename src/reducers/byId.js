const byId = (state = {}, action) => {
    if (action.response) {
        return {
            ...state,
            ...action.response.entities.todos
        }
    }
    return state
}

export default byId

export const getCalendarEvent = (state, id) => state[id]