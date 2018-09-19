import React, { Component } from 'react'
import Calendar from '../components/Calendar';
import { connect } from 'react-redux'
import { getVisibleMonth, getErrorMessage, getIsFetching } from '../reducers'
import * as actions from '../actions';
import { withRouter } from 'react-router-dom'

class CurrentCalendar extends Component {
    componentDidMount () {
        this.fetchData()
    }

    componentDidUpdate (prevProps) {
        if (this.props.month !== prevProps.month) {
            this.fetchData()
        }
    }

    fetchData () {
        const { month, fetchCalendarEvents } = this.props
        fetchCalendarEvents(month)
    }

    render () {
        const {calendarEvents} = this.props
        return (
            <Calendar calendarEvents={calendarEvents}/>
        )
    }
}

const mapStateToProps = (state, { match }) => {
    const month = parseInt(match.params.month || 1, 10)

    return {
        calendarEvents: getVisibleMonth(state, month),
        errorMessage: getErrorMessage(state, month),
        isFetching: getIsFetching(state, month),
        month
    }
}

CurrentCalendar = withRouter(connect(
    mapStateToProps,
    actions
)(CurrentCalendar))

export default CurrentCalendar