import moment from 'moment';
import getDatabase from './database';

export const fetchDay = (date) => getDatabase()
    .then(database => database.publicHolidays)
    .then(publicHolidays => publicHolidays.filter(publicHoliday =>
        moment(publicHoliday.date).format('YYYYMMDD') === moment(date).format('YYYYMMDD')
    ))

export const fetchMonth = (date) => getDatabase()
    .then(database => database.publicHolidays)
    .then(publicHolidays => publicHolidays.filter(publicHoliday =>
        moment(publicHoliday.date).format('YYYYMM') === moment(date).format('YYYYMM')
    ))
