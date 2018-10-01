import { v4 } from "node-uuid";
import moment from "moment";
import { publicHolidaysPeriod } from './url'

const formatData = response => ({
    id: v4(),
    date: moment().set({
        date: response.date.day,
        month: response.date.month - 1,
        year: response.date.year
    }).format('YYYYMMDD'),
    text: response.name.find(name => name.lang === 'fr').text
})

const fetchAll = () => {
    const before = moment().subtract({ years: 1 }).format('DD-MM-YYYY')
    const after = moment().add({ years: 1 }).format('DD-MM-YYYY')
    return fetch(`${publicHolidaysPeriod}&fromDate=${before}&toDate=${after}`)
        .then(response => response.json())
        .then(responses => responses.map(formatData))
}

const database = {
    calendarEvents: [{
        id: v4(),
        text: 'calendarEvent 1',
        date: '20181012 200000'
    }, {
        id: v4(),
        text: 'calendarEvent 2',
        date: '20181012 100000'
    }, {
        id: v4(),
        text: 'calendarEvent 3',
        date: '20181012 210000'
    }, {
        id: v4(),
        text: 'calendarEvent 4',
        date: '20181023 210000'
    }]
}

const getDatabase = () => {
    if (database.publicHolidays && database.publicHolidays.length) {
        return Promise.resolve(database)
    }

    return fetchAll().then(response => {
        database.publicHolidays = response

        return database
    })
}



export default getDatabase