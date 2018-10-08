
import delay from "./delay";
import * as fromCalendarEvents from './calendarEvents'
import * as fromPublicHolidays from './publicHolidays'


export const fetchCalendarEventsByDay = (date) =>
    delay(150).then(() => fromCalendarEvents.fetchMonth(date))

export const fetchCalendarEventsByMonth = (date) =>
    delay(150).then(() => fromCalendarEvents.fetchMonth(date))

export const fetchPublicHolidaysByDay = (date) =>
    delay(150).then(() => fromPublicHolidays.fetchDay(date))

export const fetchPublicHolidaysByMonth = (date) =>
    delay(150).then(() => fromPublicHolidays.fetchMonth(date))

export const addCalendarEvent = (calendarEvent) =>
    delay(150).then(() => fromCalendarEvents.addEvent(calendarEvent))