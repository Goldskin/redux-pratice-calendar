import { FETCH_CALENDAR_EVENTS } from "../const";

export const ids = (state = [], action) => {
    switch (action.type) {
        case FETCH_CALENDAR_EVENTS.SUCCESS:
            return action.response.result
        default:
            return state
    }
}
export const isFetching = (state = false, action) => {
        switch (action.type) {
        case FETCH_CALENDAR_EVENTS.REQUEST:
            return true
        case FETCH_CALENDAR_EVENTS.SUCCESS:
        case FETCH_CALENDAR_EVENTS.FAILURE:
            return false
        default:
            return state
    }
}

export const errorMessage = (state = null, action) => {
    switch (action.type) {
        case FETCH_CALENDAR_EVENTS.FAILURE:
            return action.message
        case FETCH_CALENDAR_EVENTS.REQUEST:
        case FETCH_CALENDAR_EVENTS.SUCCESS:
            return null
        default:
            return state
    }
}



export const getIds = state => state.ids
export const getIsFetching = state => state.isFetching
export const getErrorMessage = state => state.errorMessage