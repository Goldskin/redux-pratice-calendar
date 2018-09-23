import {publicHolidaysMonth, publicHolidaysPeriod} from './url'
import moment from 'moment';
import { v4 } from 'node-uuid';

const formatData = response => ({
    id: v4(),
    date: moment().set({
        date: response.date.day,
        month: response.date.month -1,
        year: response.date.year
    }).format('YYYYMMDD'),
    text: response.name.find(name => name.lang === 'fr').text
})

export const fetchDay = (date) => {
    const askedMoment = moment(date)
    return fetch(`${publicHolidaysPeriod}&fromDate=${askedMoment.format('DD-MM-YYYY')}&toDate=${askedMoment.format('DD-MM-YYYY')}`)
        .then(response => response.json())
        .then(responses => responses.map(formatData))
}

export const fetchMonth = (date) => {
    const askedMoment = moment(date)
    return fetch(`${publicHolidaysMonth}&month=${askedMoment.format('MM')}&year=${askedMoment.format('YYYY')}`)
        .then(response => response.json())
        .then(responses => responses.map(formatData))
}