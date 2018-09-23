import { v4 } from "node-uuid";

export default {
    calendarEvents: [{
        id: v4(),
        text: 'calendarEvent 1',
        date: '20181112 200000'
    }, {
        id: v4(),
        text: 'calendarEvent 2',
        date: '20181212 200000'
    }, {
        id: v4(),
        text: 'calendarEvent 3',
        date: '20181212 210000'
    }, {
        id: v4(),
        text: 'calendarEvent 4',
        date: '20180923 210000'
    }]
}