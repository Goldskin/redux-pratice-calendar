import fakeDatabase from './database'
import moment from "moment";

export const fetchDay = (date) => fakeDatabase.calendarEvents.filter(calendarEvent =>
    moment(calendarEvent.date).format('YYYYMMDD') === moment(date).format('YYYYMMDD')
)

export const fetchMonth = (date) => fakeDatabase.calendarEvents.filter(calendarEvent =>
    moment(calendarEvent.date).format('YYYYMM') === moment(date).format('YYYYMM')
)
