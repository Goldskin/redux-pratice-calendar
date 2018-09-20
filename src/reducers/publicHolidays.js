import createList from './createList';
import { FETCH_PUBLIC_HOLIDAYS } from "../actions-type";

const calendarEvents = createList(FETCH_PUBLIC_HOLIDAYS)

export default calendarEvents