
import delay from "./delay";
import getCalendarEvents from './calendarEvents'
import getPublicHolidays from './publicHolidays'


export const fetchCalendarEvents = (date) => delay(1500).then(() => date).then(getCalendarEvents)
export const fetchPublicHolidays = (date) => delay(1500).then(() => date).then(getPublicHolidays)