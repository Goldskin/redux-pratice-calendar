import createList from './createList';
import { FETCH_PUBLIC_HOLIDAYS } from "../actions-type";

const publicHolidays = createList(FETCH_PUBLIC_HOLIDAYS, 'publicHolidays')

export default publicHolidays