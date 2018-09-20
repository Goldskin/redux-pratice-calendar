import fakeDatabase from './database'
import moment from "moment";

export default (date) => {
    return fakeDatabase.calendarEvents.filter(calendarEvent =>
        moment(calendarEvent.date).format('YYYYMMDD') === date
    )
}