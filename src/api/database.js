import { v4 } from "node-uuid";

export default {
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