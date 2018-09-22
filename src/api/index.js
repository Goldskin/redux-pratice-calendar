
import delay from "./delay";
import * as fromCalendarEvents from './calendarEvents'
import * as fromPublicHolidays from './publicHolidays'


export const fetchCalendarEventsByDay = (date) =>
    delay(150).then(() => date).then(fromCalendarEvents.fetchDay)


export const fetchCalendarEventsByMonth = (date) =>
    delay(150).then(() => date).then(fromCalendarEvents.fetchMonth)

export const fetchPublicHolidaysByDay = (date) =>
    fromPublicHolidays.fetchDay(date)

export const fetchPublicHolidaysByMonth = (date) =>
    fromPublicHolidays.fetchMonth(date)