import { v4 } from "node-uuid";

const fakeDatabase = {
    calendarEvents: [{
        id: v4(),
        text: 'calendarEvent 1',
        month: 12
    }, {
        id: v4(),
        text: 'calendarEvent 2',
        month: 12
    }, {
        id: v4(),
        text: 'calendarEvent 3',
        month: 11
    }]
}

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms))

export const fetchCalendarEvents = (month) => {
    return delay(1500).then(() => {
        if (Math.random() > 0.8) {
            throw new Error('KABOOM')
        }

        return fakeDatabase.calendarEvents.filter(calendarEvent => calendarEvent.month === parseInt(month, 10))
    })
}