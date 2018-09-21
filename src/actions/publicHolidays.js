import * as api from '../api'
import { FETCH_PUBLIC_HOLIDAYS } from '../actions-type';
import { normalize } from "normalizr";
import * as schema from './schema'

export const fetchDay = date => dispatch => {
    dispatch({
        type: FETCH_PUBLIC_HOLIDAYS.REQUEST,
        date
    })

    return api.fetchPublicHolidaysByDay(date).then(
        response => {
            dispatch({
                type: FETCH_PUBLIC_HOLIDAYS.SUCCESS,
                date,
                response: normalize(response, schema.arrayOfpublicHolidays)
            })
        },
        error => {
            dispatch({
                type: FETCH_PUBLIC_HOLIDAYS.FAILURE,
                date,
                message: error.message || 'Something went wrong'
            })
        }
    )
}

export const fetchMonth = date => dispatch => {
    dispatch({
        type: FETCH_PUBLIC_HOLIDAYS.REQUEST,
        date
    })

    return api.fetchPublicHolidaysByMonth(date).then(
        response => {
            dispatch({
                type: FETCH_PUBLIC_HOLIDAYS.SUCCESS,
                date,
                response: normalize(response, schema.arrayOfpublicHolidays)
            })
        },
        error => {
            dispatch({
                type: FETCH_PUBLIC_HOLIDAYS.FAILURE,
                date,
                message: error.message || 'Something went wrong'
            })
        }
    )
}