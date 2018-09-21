import fakeDatabase from './database'
import moment from "moment";

export const fetchDay = (date) => {
    return fakeDatabase.calendarEvents.filter(calendarEvent =>
        moment(calendarEvent.date).format('YYYYMMDD') === moment(date).format('YYYYMM')
    )
}

export const fetchMonth = (date) => {
    return fakeDatabase.calendarEvents.filter(calendarEvent =>
        moment(calendarEvent.date).format('YYYYMM') === moment(date).format('YYYYMM')
    )
}