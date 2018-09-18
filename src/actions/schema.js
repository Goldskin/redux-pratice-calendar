import { schema } from 'normalizr';

export const calendarEvent = new schema.Entity('calendarEvents')
export const arrayOfCalendarEvents = new schema.Array(calendarEvent)