import * as api from '../api'
import { ADD_CALENDAR_EVENTS, FETCH_CALENDAR_EVENTS } from '../actions-type';
import { normalize } from "normalizr";
import * as schema from './schema'

export const fetchDay = date => dispatch => {
    dispatch({
        type: FETCH_CALENDAR_EVENTS.REQUEST
    })

    return api.fetchCalendarEventsByDay(date).then(
        response => {
            dispatch({
                type: FETCH_CALENDAR_EVENTS.SUCCESS,
                response: normalize(response, schema.arrayOfCalendarEvents)
            })
        },
        error => {
            dispatch({
                type: FETCH_CALENDAR_EVENTS.FAILURE,
                message: error.message || 'Something went wrong'
            })
        }
    )
}

export const add = (title, text, date) => dispatch => {
    dispatch({
        type: ADD_CALENDAR_EVENTS.REQUEST
    })

    return api.addCalendarEvent(title, text, date).then(
        response => {
            dispatch({
                type: ADD_CALENDAR_EVENTS.SUCCESS,
                response: normalize(response, schema.calendarEvent)
            })
        },
        error => {
            dispatch({
                type: ADD_CALENDAR_EVENTS.FAILURE,
                message: error.message || 'Something went wrong'
            })
        }
    )
}

export const fetchMonth = date => dispatch => {
    dispatch({
        type: FETCH_CALENDAR_EVENTS.REQUEST
    })

    return api.fetchCalendarEventsByMonth(date).then(
        response => {
            dispatch({
                type: FETCH_CALENDAR_EVENTS.SUCCESS,
                response: normalize(response, schema.arrayOfCalendarEvents)
            })
        },
        error => {
            dispatch({
                type: FETCH_CALENDAR_EVENTS.FAILURE,
                message: error.message || 'Something went wrong'
            })
        }
    )
}
