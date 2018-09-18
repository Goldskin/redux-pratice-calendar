
import { combineReducers } from 'redux';
import byId, * as fromByid  from './byId'
import createList, * as fromList from './createList';

const listByMonth = combineReducers({
    "1": createList(1),
    2: createList(2),
    3: createList(3),
    4: createList(4),
    5: createList(5),
    6: createList(6),
    7: createList(7),
    8: createList(8),
    9: createList(9),
    10: createList(10),
    11: createList(11),
    "12": createList(12)
})

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
