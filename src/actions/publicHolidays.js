import * as api from '../api'
import { PUBLIC_HOLIDAYS } from '../actions-type';
import { normalize } from "normalizr";
import * as schema from './schema'

export const fetchDay = date => dispatch => {
    dispatch({
        type: PUBLIC_HOLIDAYS.FETCH.REQUEST,
        date
    })

    return api.fetchPublicHolidaysByDay(date).then(
        response => {
            dispatch({
                type: PUBLIC_HOLIDAYS.FETCH.SUCCESS,
                date,
                response: normalize(response, schema.arrayOfpublicHolidays)
            })
        },
        error => {
            dispatch({
                type: PUBLIC_HOLIDAYS.FETCH.FAILURE,
                date,
                message: error.message || 'Something went wrong'
            })
        }
    )
}

export const fetchMonth = date => dispatch => {
    dispatch({
        type: PUBLIC_HOLIDAYS.FETCH.REQUEST,
        date
    })

    return api.fetchPublicHolidaysByMonth(date).then(
        response => {
            dispatch({
                type: PUBLIC_HOLIDAYS.FETCH.SUCCESS,
                date,
                response: normalize(response, schema.arrayOfpublicHolidays)
            })
        },
        error => {
            dispatch({
                type: PUBLIC_HOLIDAYS.FETCH.FAILURE,
                date,
                message: error.message || 'Something went wrong'
            })
        }
    )
}