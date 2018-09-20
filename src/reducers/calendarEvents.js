import createList from './createList';
import { FETCH_CALENDAR_EVENTS } from "../actions-type";

const calendarEvents = createList(FETCH_CALENDAR_EVENTS)

export default calendarEvents