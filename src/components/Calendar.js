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

    render () {
        return (
            <div>
                {this.allEvents()}
            </div>
        )
    }
}

export default Calendar