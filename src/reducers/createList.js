import { combineReducers } from "redux";
import { FETCH_CALENDAR_EVENTS } from "../const";

const createList = month => {
    const ids = (state = [], action) => {
        switch (action.type) {
            case FETCH_CALENDAR_EVENTS.SUCCESS:
                return action.month === month ?
                    action.response.result :
                    state
            default:
                return state
        }
    }
    const isFetching = (state = false, action) => {
        if (action.month !== month) {
            return state
        }

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

    const errorMessage = (state = null, action) => {
        if (action.month !== month) {
            return state
        }

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

    return combineReducers({
        ids,
        isFetching,
        errorMessage
    })
}

export default createList
export const getIds = state => state.ids
export const getIsFetching = state => state.isFetching
export const getErrorMessage = state => state.errorMessage