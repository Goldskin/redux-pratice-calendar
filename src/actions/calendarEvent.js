import * as api from '../api'
import { CALENDAR_EVENTS } from '../actions-type';
import { normalize } from "normalizr";
import * as schema from './schema'

export const fetchDay = date => dispatch => {
    dispatch({
        type: CALENDAR_EVENTS.FETCH.REQUEST
    })

    return api.fetchCalendarEventsByDay(date).then(
        response => {
            dispatch({
                type: CALENDAR_EVENTS.FETCH.SUCCESS,
                response: normalize(response, schema.arrayOfCalendarEvents)
            })
        },
        error => {
            dispatch({
                type: CALENDAR_EVENTS.FETCH.FAILURE,
                message: error.message || 'Something went wrong'
            })
        }
    )
}

export const add = (calendarEvent) => dispatch => {
    dispatch({
        type: CALENDAR_EVENTS.ADD.REQUEST
    })

    return api.addCalendarEvent(calendarEvent).then(
        response => {
            dispatch({
                type: CALENDAR_EVENTS.ADD.SUCCESS,
                response: normalize(response, schema.calendarEvent)
            })
        },
        error => {
            dispatch({
                type: CALENDAR_EVENTS.ADD.FAILURE,
                message: error.message || 'Something went wrong'
            })
        }
    )
}

export const fetchMonth = date => dispatch => {
    dispatch({
        type: CALENDAR_EVENTS.FETCH.REQUEST
    })

    return api.fetchCalendarEventsByMonth(date).then(
        response => {
            dispatch({
                type: CALENDAR_EVENTS.FETCH.SUCCESS,
                response: normalize(response, schema.arrayOfCalendarEvents)
            })
        },
        error => {
            dispatch({
                type: CALENDAR_EVENTS.FETCH.FAILURE,
                message: error.message || 'Something went wrong'
            })
        }
    )
}
