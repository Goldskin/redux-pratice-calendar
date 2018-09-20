import React, { Component } from 'react'
import Calendar from '../components/Calendar';
import { connect } from 'react-redux'
import { getVisibleDate, getErrorMessage, getIsFetching } from '../reducers'
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
        const { date, fetchCalendarEvents } = this.props
        fetchCalendarEvents(date)
    }

    render () {
        const {calendarEvents} = this.props
        return (
            <Calendar calendarEvents={calendarEvents}/>
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
        calendarEvents: getVisibleDate(state, date),
        errorMessage: getErrorMessage(state, date),
        isFetching: getIsFetching(state, date),
        date
    }
}

CurrentCalendar = withRouter(connect(
    mapStateToProps,
    actions
)(CurrentCalendar))

export default CurrentCalendar