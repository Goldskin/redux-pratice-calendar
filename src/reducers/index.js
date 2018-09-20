
import { combineReducers } from 'redux';
import * as fromByid  from './byId'
import  * as fromList from './createList';
import calendarEvents from './calendarEvents'
import publicHolidays from './publicHolidays'

const reducers = combineReducers({
    calendarEvents,
    publicHolidays
})

export default reducers

export const getVisibleDate = (state, date) => {
    const ids = fromList.getIds(state.calendarEvents)
    return ids.map(id => fromByid.getCalendarEvent(state.calendarEvents.byId, id))
}

export const getIsFetching = (state, date) =>
    fromList.getIsFetching(state)


export const getErrorMessage = (state, date) =>{
    fromList.getErrorMessage(state)
}
