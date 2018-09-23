import createList from './createList';
import { FETCH_PUBLIC_HOLIDAYS } from "../actions-type";
import * as fromByid from './byId'
import * as fromList from './createList';
import moment from 'moment'

export default createList(FETCH_PUBLIC_HOLIDAYS, 'publicHolidays')

export const getVisibleDay = (state, date) => {
    date = moment(date).format('YYYYMMDD')
    const ids = fromList.getIds(state.publicHolidays)
    const publicHolidays = ids.map(id => fromByid.getById(state.publicHolidays.byId, id))
    return publicHolidays.filter(calendarEvent => moment(calendarEvent.date).format('YYYYMMDD') === date)
}
export const getVisibleMonth = (state, date) => {
    date = moment(date).format('YYYYMM')
    const ids = fromList.getIds(state.publicHolidays)
    const publicHolidays = ids.map(id => fromByid.getById(state.publicHolidays.byId, id))
    return publicHolidays.filter(calendarEvent => moment(calendarEvent.date).format('YYYYMM') === date)
}