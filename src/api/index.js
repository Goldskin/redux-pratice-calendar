import { v4 } from "node-uuid";
import moment from "moment";

const fakeDatabase = {
    calendarEvents: [{
        id: v4(),
        text: 'calendarEvent 1',
        date: '2018-11-12'
    }, {
        id: v4(),
        text: 'calendarEvent 2',
        date: '2018-12-12'
    }, {
        id: v4(),
        text: 'calendarEvent 3',
        date: '2018-12-12'
    }]
}

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms))

export const fetchCalendarEvents = (date) => {
    return delay(1500).then(() => {
        if (Math.random() > 0.8) {
            throw new Error('KABOOM')
        }

        return fakeDatabase.calendarEvents.filter(calendarEvent => {
            console.log(moment(calendarEvent.date).format('YYYYMMDD'), date)
            
            return moment(calendarEvent.date).format('YYYYMMDD') === date
        })
    })
}