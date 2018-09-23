import React, { Component } from 'react'
import moment from 'moment'
import Hours from './AgendaHours';

export default class extends Component {
    getCalendarEvents (date) {
        date = date.format('HH')
        return this.props.calendarEvents.filter(calendarEvent =>
            moment(calendarEvent.date).format('HH') === date
        )
    }

    getPublicHolidays (date) {
        date = date.format('YYYYMMDD')
        return this.props.publicHolidays.filter(publicHoliday =>
            moment(publicHoliday.date).format('YYYYMMDD') === date
        )
    }

    renderAllHours () {
        const { month, year, day } = this.props
        const resetTime = { hour: 0, minute: 0, second: 0, millisecond: 0 }
        const currentDay = moment({ month, year, date: day, ...resetTime})
        const nextDay = moment(currentDay).add({ days: 1 })
        const hours = []
        for (
            let current = currentDay;
            current.isBefore(nextDay);
            current.add({hours: 1})
        ) {

            const events = this.getCalendarEvents(current)
            
            if (events.length) {
                hours.push(
                    <li key={current.format('HH')}>
                        <Hours moment={moment(current)} calendarEvents={events}/>
                    </li>
                )
            }
        }

        return hours
    }

    render () {
        console.log(this.props)
        return (
            <div>
                <ul className="agenda list-unstyled">
                    {this.renderAllHours( )}
                </ul>
            </div>
        )
    }
}