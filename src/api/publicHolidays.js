import fakeDatabase from './database'
import moment from "moment";

export default (date) => {
    return fakeDatabase.publicHolidays.filter(calendarEvent =>
        moment(calendarEvent.date).format('YYYYMMDD') === date
    )
}