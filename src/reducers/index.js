
import { combineReducers } from 'redux';
import  * as fromList from './createList';
import calendarEvents, * as fromCalendarEvents from './calendarEvents'
import publicHolidays, * as fromPublicHolidays from './publicHolidays'

const reducers = combineReducers({
    calendarEvents,
    publicHolidays
})

export default reducers

export const getVisibleCalendarEvents = fromCalendarEvents.getVisibleDate
export const getVisiblePublicHolidays = fromPublicHolidays.getVisibleDate

export const getIsFetching = (state, date) =>
    fromList.getIsFetching(state)


export const getErrorMessage = (state, date) =>{
    fromList.getErrorMessage(state)
}
