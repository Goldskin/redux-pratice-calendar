
import delay from "./delay";
import * as fromCalendarEvents from './calendarEvents'
import * as fromPublicHolidays from './publicHolidays'


export const fetchCalendarEventsByDay = (date) =>
    delay(1500).then(() => date).then(fromCalendarEvents.fetchDay)

export const fetchPublicHolidaysByDay = (date) =>
    delay(1500).then(() => date).then(fromPublicHolidays.fetchDay)

export const fetchCalendarEventsByMonth = (date) =>
    delay(1500).then(() => date).then(fromCalendarEvents.fetchMonth)

export const fetchPublicHolidaysByMonth = (date) =>
    delay(1500).then(() => date).then(fromPublicHolidays.fetchMonth)