import * as api from '../api'
import { FETCH_CALENDAR_EVENTS } from '../actions-type';
import { normalize } from "normalizr";
import * as schema from './schema'

export const fetchDay = date => dispatch => {
    dispatch({
        type: FETCH_CALENDAR_EVENTS.REQUEST,
        date
    })

    return api.fetchCalendarEventsByDay(date).then(
        response => {
            dispatch({
                type: FETCH_CALENDAR_EVENTS.SUCCESS,
                date,
                response: normalize(response, schema.arrayOfCalendarEvents)
            })
        },
        error => {
            dispatch({
                type: FETCH_CALENDAR_EVENTS.FAILURE,
                date,
                message: error.message || 'Something went wrong'
            })
        }
    )
}

export const fetchMonth = date => dispatch => {
    dispatch({
        type: FETCH_CALENDAR_EVENTS.REQUEST,
        date
    })

    return api.fetchCalendarEventsByMonth(date).then(
        response => {
            console.log(response)
            
            dispatch({
                type: FETCH_CALENDAR_EVENTS.SUCCESS,
                date,
                response: normalize(response, schema.arrayOfCalendarEvents)
            })
        },
        error => {
            dispatch({
                type: FETCH_CALENDAR_EVENTS.FAILURE,
                date,
                message: error.message || 'Something went wrong'
            })
        }
    )
}
