import { schema } from 'normalizr';

export const calendarEvent = new schema.Entity('calendarEvents')
export const arrayOfCalendarEvents = new schema.Array(calendarEvent)

export const publicHoliday = new schema.Entity('publicHolidays')
export const arrayOfpublicHolidays = new schema.Array(publicHoliday)