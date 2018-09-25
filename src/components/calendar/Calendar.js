import React, { Component } from 'react'
import moment from 'moment'
import Cell from './CalendarCell';
import { Link } from 'react-router-dom'
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
        console.log(month, year)
        
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
                    <Cell
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
        const prev = this.currentMonth().subtract({ months: 1 })
        const next = this.currentMonth().add({ months: 1 })

        return (
            <div className="calendar">
                <Link
                    to={`/month/${prev.format('YYYY')}/${prev.format('MM')}`}
                >
                    Previous month
                </Link>
                <div>
                    <h1>
                        {this.currentMonth().format('YYYY MMMM')}
                    </h1>
                    <ul className="calendar list-unstyled">
                        {this.renderAllDay()}
                    </ul>
                </div>
                <Link
                    to={`/month/${next.format('YYYY')}/${next.format('MM')}`}
                >
                    Next month
                </Link>
            </div>
        )
    }
}