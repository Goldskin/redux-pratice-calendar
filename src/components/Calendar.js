import React, { Component } from 'react'
import moment from 'moment'
import Day from './Day';
import './month.css'


class Calendar extends Component {
    getCalendarEvents (date) {
        return this.props.calendarEvents.filter(calendarEvent =>  calendarEvent.date === date)
    }

    getPublicHolidays (date) {
        return this.props.publicHolidays.filter(publicHoliday => publicHoliday.date === date)
    }

    renderAllDay () {
        const { month, year } = this.props
        const resetTime = { hour: 0, minute: 0, second: 0, millisecond: 0 }
        const currentDay = moment()
        const currentMonth = moment({ month, year, date: 1, ...resetTime })
        const firstDay = moment(currentMonth)
        const daysInMonth = firstDay.daysInMonth()
        const lastDay = moment(firstDay).set({ date: daysInMonth })
        const days = []


        const firstDayDisplayed = moment(firstDay).startOf('isoWeek')
        const lastDayDisplayed = moment(lastDay).endOf('isoWeek')

        for (
            let current = moment(firstDayDisplayed);
            moment(current).isSameOrBefore(lastDayDisplayed);
            current.add({ days: 1 })
        ) {
            days.push(
                <li key={current.format('YYYYMMDD')}>
                    <Day
                        moment={moment(current)}
                        active={current.format('YYYYMM') === currentMonth.format('YYYYMM')}
                        highlight={current.format('YYYYMMDD') === currentDay.format('YYYYMMDD')}
                        calendarEvents={this.getCalendarEvents(current.format('YYYYMMDD'))}
                        publicHolidays={this.getPublicHolidays(current.format('YYYYMMDD'))}
                    />
                </li>
            )
        }

        return days
    }

    render () {
        return (
            <ul className="month list-unstyled">
                {this.renderAllDay()}
            </ul>
        )
    }
}

export default Calendar