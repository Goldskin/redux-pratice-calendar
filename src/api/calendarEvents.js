import getDatabase, {add} from './database'
import moment from "moment";

export const fetchDay = (date) => getDatabase()
    .then(database => database.calendarEvents)
    .then(calendarEvents => calendarEvents.filter(calendarEvent =>
        moment(calendarEvent.date).format('YYYYMMDD') === moment(date).format('YYYYMMDD')
    ))

export const fetchMonth = (date) => getDatabase()
    .then(database => database.calendarEvents)
    .then(calendarEvents => calendarEvents.filter(calendarEvent =>
        moment(calendarEvent.date).format('YYYYMM') === moment(date).format('YYYYMM')
    ))

export const addEvent = (calendarEvent) => add('calendarEvents', calendarEvent)