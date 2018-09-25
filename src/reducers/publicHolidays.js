import createList from './createList';
import { FETCH_PUBLIC_HOLIDAYS } from "../actions-type";
import * as fromByid from './byId'
import * as fromList from './createList';

export default createList(FETCH_PUBLIC_HOLIDAYS, 'publicHolidays')

export const getVisibleDay = (state) => {
    const ids = fromList.getIds(state.publicHolidays)
    return ids.map(id => fromByid.getById(state.publicHolidays.byId, id))
}
export const getVisibleMonth = (state) => {
    const ids = fromList.getIds(state.publicHolidays)
    return ids.map(id => fromByid.getById(state.publicHolidays.byId, id))
}