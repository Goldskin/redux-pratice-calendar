import React, { Component } from 'react'
import Calendar from '../components/calendar/Calendar';
import { connect } from 'react-redux'
import * as fromReducers from '../reducers'
import * as actions from '../actions';
import { withRouter } from 'react-router-dom'
import moment from 'moment'


class CurrentCalendar extends Component {
    componentDidMount () {
        this.fetchData()
    }

    componentDidUpdate (prevProps) {
        if (this.props.date !== prevProps.date) {
            this.fetchData()
        }
    }

    fetchData () {
        const { date, fetchCalendarEventsByMonth, fetchPublicHolidaysByMonth } = this.props
        fetchCalendarEventsByMonth(date)
        fetchPublicHolidaysByMonth(date)
    }

    render () {
        const { calendarEvents, publicHolidays, addCalendarEvent } = this.props
        const date = moment(this.props.date)
        return (
            <Calendar
                month={date.format('MM') - 1}
                year={date.format('YYYY')}
                calendarEvents={calendarEvents}
                publicHolidays={publicHolidays}
                addCalendarEvent={addCalendarEvent}
            />
        )
    }
}

const mapStateToProps = (state, { match }) => {
    const current = moment()
    const monthUrl = parseInt(match.params.month, 10)

    // months starts at 0 like arrays
    const month = monthUrl ? monthUrl - 1 : current.month()
    const year = parseInt(match.params.year, 10) || current.year()
    const day = parseInt(match.params.day, 10) || current.date()

    const date = moment({
        year,
        month,
        date: day
    }).format('YYYYMMDD')

    return {
        calendarEvents: fromReducers.getMonthlyCalendarEvents(state, date),
        publicHolidays: fromReducers.getMonthlyPublicHolidays(state, date),
        errorMessage: fromReducers.getErrorMessage(state),
        isFetching: fromReducers.getIsFetching(state),
        date
    }
}

CurrentCalendar = withRouter(connect(
    mapStateToProps,
    actions
)(CurrentCalendar))

export default CurrentCalendar