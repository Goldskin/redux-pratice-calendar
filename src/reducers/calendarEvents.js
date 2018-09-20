import createList from './createList';
import { FETCH_CALENDAR_EVENTS } from "../actions-type";
import * as fromByid from './byId'
import * as fromList from './createList';

const calendarEvents = createList(FETCH_CALENDAR_EVENTS, 'calendarEvents')

export default calendarEvents

export const getVisibleDate = (state, date) => {
    const ids = fromList.getIds(state.calendarEvents)
    return ids.map(id => fromByid.getById(state.calendarEvents.byId, id))
}