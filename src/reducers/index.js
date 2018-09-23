
import { combineReducers } from 'redux';
import  * as fromList from './createList';
import calendarEvents, * as fromCalendarEvents from './calendarEvents'
import publicHolidays, * as fromPublicHolidays from './publicHolidays'

const reducers = combineReducers({
    calendarEvents,
    publicHolidays
})

export default reducers

export const getMonthlyCalendarEvents = fromCalendarEvents.getVisibleMonth
export const getMonthlyPublicHolidays = fromPublicHolidays.getVisibleMonth

export const getDailyCalendarEvents = fromCalendarEvents.getVisibleDay
export const getDailyPublicHolidays = fromPublicHolidays.getVisibleDay

export const getIsFetching = (state) =>
    fromList.getIsFetching(state)


export const getErrorMessage = (state) =>
    fromList.getErrorMessage(state)

