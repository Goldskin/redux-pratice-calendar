import React, { Component } from 'react'
import Agenda from '../components/agenda/Agenda';
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
        const { date, fetchCalendarEventsByDay, fetchPublicHolidaysByDay } = this.props
        fetchCalendarEventsByDay(date)
        fetchPublicHolidaysByDay(date)
    }

    render () {
        const { calendarEvents, publicHolidays } = this.props
        const date = moment(this.props.date)
        return (
            <Agenda
                month={date.format('MM') - 1}
                year={date.format('YYYY')}
                day={date.format('DD')}
                calendarEvents={calendarEvents}
                publicHolidays={publicHolidays}
            />
        )
    }
}

const mapStateToProps = (state, { match }) => {
    // months starts at 0 like arrays
    const current = moment()
    const month = parseInt(match.params.month, 10) - 1 || current.month()
    const year = parseInt(match.params.year, 10) || current.year()
    const day = parseInt(match.params.day, 10) || current.day()

    const date = moment({
        year,
        month,
        day
    }).format('YYYYMMDD')

    return {
        calendarEvents: fromReducers.getDailyCalendarEvents(state, date),
        publicHolidays: fromReducers.getDailyPublicHolidays(state, date),
        errorMessage: fromReducers.getErrorMessage(state, date),
        isFetching: fromReducers.getIsFetching(state, date),
        date
    }
}

CurrentCalendar = withRouter(connect(
    mapStateToProps,
    actions
)(CurrentCalendar))

export default CurrentCalendar