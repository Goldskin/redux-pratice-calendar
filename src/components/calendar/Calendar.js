import React, { Component } from 'react'
import moment from 'moment'
import CalendarDay from './CalendarDay';
import './calendar.css'

export default class extends Component {
    getCalendarEvents (date) {
        date = date.format('YYYYMMDD')
        return this.props.calendarEvents.filter(calendarEvent =>
            moment(calendarEvent.date).format('YYYYMMDD') === date
        )
    }

    getPublicHolidays (date) {
        date = date.format('YYYYMMDD')
        return this.props.publicHolidays.filter(publicHoliday =>
            moment(publicHoliday.date).format('YYYYMMDD') === date
        )
    }

    currentMonth () {
        const { month, year } = this.props
        const resetTime = { hour: 0, minute: 0, second: 0, millisecond: 0 }
        return moment({ month, year, date: 1, ...resetTime })
    }

    renderAllDay () {
        const currentMonth = this.currentMonth()
        const currentDay = moment()
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
                    <CalendarDay
                        moment={moment(current)}
                        active={current.format('YYYYMM') === currentMonth.format('YYYYMM')}
                        highlight={current.format('YYYYMMDD') === currentDay.format('YYYYMMDD')}
                        calendarEvents={this.getCalendarEvents(current)}
                        publicHolidays={this.getPublicHolidays(current)}
                    />
                </li>
            )
        }

        return days
    }

    render () {
        return (
            <div className="calendar">
                <h1>
                    {this.currentMonth().format('YYYY MMMM')}
                </h1>
                <ul className="calendar list-unstyled">
                    {this.renderAllDay()}
                </ul>
            </div>
        )
    }
}