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
        title: 'Réunion',
        text: 'Réunion avec le client',
        date: '20181012 140000'
    }, {
        id: v4(),
        title: 'Eat fish',
        text: 'Faire le repas pour aujourd\'hui',
        date: '20181012 100000'
    }, {
        id: v4(),
        title: 'Danse',
        text: 'Cours de salsa',
        date: '20181012 210000'
    }, {
        id: v4(),
        title: 'Fnac',
        text: 'Acheter le dernier album de Patrick sebastien',
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

export const add = (type, data) => {
    return getDatabase().then(response => {
        const object = {
            id: v4(),
            ...data
        }
        response[type].push(object)
        return object
    })
}