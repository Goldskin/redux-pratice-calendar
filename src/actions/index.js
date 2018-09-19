import * as api from '../api'
import { FETCH_CALENDAR_EVENTS } from '../const';
import { normalize } from "normalizr";
import * as schema from './schema'


export const fetchCalendarEvents = month => dispatch => {
    dispatch({
        type: FETCH_CALENDAR_EVENTS.REQUEST,
        month
    })

    return api.fetchCalendarEvents(month).then(
        response => {
            dispatch({
                type: FETCH_CALENDAR_EVENTS.SUCCESS,
                month,
                response: normalize(response, schema.arrayOfCalendarEvents)
            })
        },
        error => {
            dispatch({
                type: FETCH_CALENDAR_EVENTS.FAILURE,
                month,
                message: error.message || 'Something went wrong'
            })
        }
    )
}
