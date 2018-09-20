import createList from './createList';
import { FETCH_PUBLIC_HOLIDAYS } from "../actions-type";
import * as fromByid from './byId'
import * as fromList from './createList';

const publicHolidays = createList(FETCH_PUBLIC_HOLIDAYS, 'publicHolidays')

export default publicHolidays

export const getVisibleDate = (state, date) => {
    const ids = fromList.getIds(state.publicHolidays)
    return ids.map(id => fromByid.getById(state.publicHolidays.byId, id))
}