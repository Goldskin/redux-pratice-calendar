
import { combineReducers } from 'redux';
import byId, * as fromByid  from './byId'
import  * as fromList from './createList';
import moment from 'moment'

const calendarEvents = combineReducers({
    byId,
    ids: fromList.ids,
    isFetching: fromList.isFetching,
    errorMessage: fromList.errorMessage
})


export default calendarEvents


export const getVisibleDate = (state, date) => {
    const ids = fromList.getIds(state)
    return ids.map(id => fromByid.getCalendarEvent(state.byId, id))
}

export const getIsFetching = (state, date) =>
    fromList.getIsFetching(state)


export const getErrorMessage = (state, date) =>{
    fromList.getErrorMessage(state)
}
