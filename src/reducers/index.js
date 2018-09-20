
import { combineReducers } from 'redux';
import byId, * as fromByid  from './byId'
import createList, * as fromList from './createList';
import moment from 'moment'

const months = {}
for (let month = 1; month <= moment.months().length; month++) {
    months[month] = createList(month)
}

const listByMonth = combineReducers(months)

const calendarEvents = combineReducers({
    byId,
    listByMonth
})


export default calendarEvents


export const getVisibleMonth = (state, month) => {
    const ids = fromList.getIds(state.listByMonth[month])
    return ids.map(id => fromByid.getCalendarEvent(state.byId, id))
}

export const getIsFetching = (state, month) =>
    fromList.getIsFetching(state.listByMonth[month])


export const getErrorMessage = (state, month) =>{
    fromList.getErrorMessage(state.listByMonth[month])
}
