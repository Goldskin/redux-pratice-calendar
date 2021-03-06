import React, { Component } from 'react'
import moment from 'moment'
import Cell from './AgendaCell';
import PublicHoliday from '../PublicHoliday';
import { Link } from 'react-router-dom'

export default class extends Component {
    getCalendarEvents (date) {
        date = date.format('YYYYMMDDHH')
        return this.props.calendarEvents.filter(calendarEvent =>
            moment(calendarEvent.date).format('YYYYMMDDHH') === date
        )
    }

    getPublicHolidays (date) {
        date = date.format('YYYYMMDD')
        return this.props.publicHolidays.filter(publicHoliday =>
            moment(publicHoliday.date).format('YYYYMMDD') === date
        )
    }

    renderPublicHolidays () {
        const date = this.getCurrentMomentDay()
        return this.getPublicHolidays(date).map(publicHoliday =>
            <li key={publicHoliday.id}>
                <PublicHoliday {...publicHoliday} />
            </li>
        )
    }

    getCurrentMomentDay () {
        const { month, year, day } = this.props
        const resetTime = { hour: 0, minute: 0, second: 0, millisecond: 0 }
        return moment({ month, year, date: day, ...resetTime })
    }

    renderAllHours () {
        const currentDay = this.getCurrentMomentDay()
        const nextDay = moment(currentDay).add({ days: 1 })
        const cell = []
        for (
            let current = currentDay;
            current.isBefore(nextDay);
            current.add({hours: 1})
        ) {

            const events = this.getCalendarEvents(current)

            if (events.length) {
                cell.push(
                    <li key={current.format('HH')}>
                        <Cell moment={moment(current)} calendarEvents={events}/>
                    </li>
                )
            }
        }

        return cell
    }

    render () {
        const date = this.getCurrentMomentDay()
        const link = `/month/${date.format('YYYY')}/${date.format('MM')}`
        return (
            <div className="container agenda">
                <Link to={link}>Come back to {date.format('MMMM YYYY')}</Link>
                <h1>{date.format('DD MMMM YYYY')}</h1>
                <ul className="agenda-header list-unstyled">
                    {this.renderPublicHolidays()}
                </ul>
                <ul className="agenda list-unstyled">
                    {this.renderAllHours()}
                </ul>
            </div>
        )
    }
}