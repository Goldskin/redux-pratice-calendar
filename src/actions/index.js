import * as api from '../api'
import { FETCH_CALENDAR_EVENTS } from '../const';
import { normalize } from "normalizr";
import * as schema from './schema'


export const fetchCalendarEvents = (date) => dispatch => {
    dispatch({
        type: FETCH_CALENDAR_EVENTS.REQUEST,
        date
    })

    return api.fetchCalendarEvents(date).then(
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
