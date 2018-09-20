import * as api from '../api'
import { FETCH_PUBLIC_HOLIDAYS } from '../actions-type';
import { normalize } from "normalizr";
import * as schema from './schema'


export const fetch = date => dispatch => {
    dispatch({
        type: FETCH_PUBLIC_HOLIDAYS.REQUEST,
        date
    })

    return api.fetchPublicHolidays(date).then(
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
