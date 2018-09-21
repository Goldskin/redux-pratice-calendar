import * as fromCalendarEvent from './calendarEvent'
import * as fromPublicHolidays from './publicHolidays'

export const fetchCalendarEventsByDay = fromCalendarEvent.fetchDay
export const fetchPublicHolidaysByDay = fromPublicHolidays.fetchDay
export const fetchCalendarEventsByMonth = fromCalendarEvent.fetchMonth
export const fetchPublicHolidaysByMonth = fromPublicHolidays.fetchMonth