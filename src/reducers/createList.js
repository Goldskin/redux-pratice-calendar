import { combineReducers } from "redux";
export default (actions, type) => {
    const ids = (state = [], action) => {
        switch (action.type) {
            case actions.SUCCESS:
                return action.response.result
            default:
                return state
        }
    }
    const errorMessage = (state = null, action) => {
        switch (action.type) {
            case actions.FAILURE:
                return action.message
            case actions.REQUEST:
            case actions.SUCCESS:
                return null
            default:
                return state
        }
    }
    const isFetching = (state = false, action) => {
        switch (action.type) {
            case actions.REQUEST:
                return true
            case actions.SUCCESS:
            case actions.FAILURE:
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