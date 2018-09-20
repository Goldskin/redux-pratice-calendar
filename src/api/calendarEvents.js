import fakeDatabase from './database'
import moment from "moment";

export default (date) => {
    if (Math.random() > 0.8) {
        throw new Error('KABOOM')
    }

    return fakeDatabase.calendarEvents.filter(calendarEvent =>
        moment(calendarEvent.date).format('YYYYMMDD') === date
    )
}