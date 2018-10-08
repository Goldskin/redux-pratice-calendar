import createList from './createList'
import { CALENDAR_EVENTS } from "../actions-type"
import * as fromByid from './byId'
import * as fromList from './createList'
import moment from 'moment'

export default createList(CALENDAR_EVENTS, 'calendarEvents')

export const getVisibleDay = (state, date) => {
    date = moment(date).format('YYYYMMDD')
    const ids = fromList.getIds(state.calendarEvents)
    const calendarEvents = ids.map(id => fromByid.getById(state.calendarEvents.byId, id))
    return calendarEvents//.filter(calendarEvent => moment(calendarEvent.date).format('YYYYMMDD') === date)
}
export const getVisibleMonth = (state, date) => {
    date = moment(date).format('YYYYMM')
    const ids = fromList.getIds(state.calendarEvents)
    const calendarEvents = ids.map(id => fromByid.getById(state.calendarEvents.byId, id))
    return calendarEvents//.filter(calendarEvent => moment(calendarEvent.date).format('YYYYMM') === date)
}