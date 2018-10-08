import { combineReducers } from "redux";
export default (actions, type) => {
    const ids = (state = [], action) => {
        switch (action.type) {
            case actions.FETCH.SUCCESS:
                return action.response.result
            case actions.ADD.SUCCESS:
                return [...state, action.response.result]
            default:
                return state
        }
    }
    const errorMessage = (state = null, action) => {
        switch (action.type) {
            case actions.FETCH.FAILURE:
            case actions.ADD.FAILURE:
                return action.message
            case actions.FETCH.REQUEST:
            case actions.FETCH.SUCCESS:
            case actions.ADD.REQUEST:
            case actions.ADD.SUCCESS:
                return null
            default:
                return state
        }
    }

    const isFetching = (state = false, action) => {
        switch (action.type) {
            case actions.FETCH.REQUEST:
            case actions.ADD.REQUEST:
                return true
            case actions.FETCH.SUCCESS:
            case actions.FETCH.FAILURE:
            case actions.ADD.SUCCESS:
            case actions.ADD.FAILURE:
                return false
            default:
                return state
        }
    }

    const byId = (state = {}, action) => {
        if (action.response) {
            return {
                ...state,
                ...action.response.entities[type]
            }
        }
        return state
    }

    return combineReducers({
        byId,
        ids,
        errorMessage,
        isFetching
    })
}

export const getIds = state => state.ids
export const getIsFetching = state => state.isFetching
export const getErrorMessage = state => state.errorMessage