import * as api from '../api'
import { FETCH_CALENDAR_EVENTS } from '../actions-type';
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
