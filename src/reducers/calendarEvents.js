import createList from './createList';
import { FETCH_CALENDAR_EVENTS } from "../actions-type";

const calendarEvents = createList(FETCH_CALENDAR_EVENTS, 'calendarEvents')

export default calendarEvents