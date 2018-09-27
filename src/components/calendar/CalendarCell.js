import React from 'react'
import './cell.css'
import classNames from 'classnames'
import CalendarEvent from '../CalendarEvent'
import PublicHoliday from '../PublicHoliday';
import { Link } from 'react-router-dom'

export default (props) => {
    const myClassNames = classNames(
        'day',
        {active: props.active},
        {highlight: props.highlight}
    )

    const calendarEvents = props.calendarEvents.map(calendarEvent =>
        <CalendarEvent {...calendarEvent} key={calendarEvent.id}/>
    )
    const publicHolidays = props.publicHolidays.map(publicHoliday => 
        <PublicHoliday {...publicHoliday} key={publicHoliday.id}/>
    )

    const year = props.moment.format('YYYY')
    const month = props.moment.format('MM')
    const day = props.moment.format('DD')
    const link = `/day/${year}/${month}/${day}/`

    return (
        <Link to={link}>
            <div className={myClassNames}>
                <span>{props.moment.format('D')}</span>
                {' '}
                <span>{props.moment.format('ddd')}</span>
                {calendarEvents}
                {publicHolidays}
            </div>
        </Link>
    )
}
