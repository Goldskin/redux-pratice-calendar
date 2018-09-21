import fakeDatabase from './database'
import moment from "moment";

export const fetchDay = (date) => {
    return fakeDatabase.publicHolidays.filter(calendarEvent =>
        moment(calendarEvent.date).format('YYYYMMDD') === date
    )
}

export const fetchMonth = (date) => {
    return fakeDatabase.publicHolidays.filter(calendarEvent =>
        moment(calendarEvent.date).format('YYYYMM') === date
    )
}