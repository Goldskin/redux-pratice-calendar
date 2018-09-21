import React, { Component } from 'react'
import CalendarEvent from './CalendarEvent';


class Calendar extends Component {
    allEvents () {
        return this.props.calendarEvents.map((calendarEvent) => {
            return (
                <CalendarEvent key={calendarEvent.id} {...calendarEvent} />
            )
        })
    }

    allPublicHolidays () {
        return this.props.publicHolidays.map((publicHoliday) => {
            return (
                <CalendarEvent key={publicHoliday.id} {...publicHoliday} />
            )
        })
    }

    render () {
        return (
            <div>
                {this.allEvents()}
                {this.allPublicHolidays()}
            </div>
        )
    }
}

export default Calendar