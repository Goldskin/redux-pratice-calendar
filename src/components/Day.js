import React from 'react'
import './day.css'
import classNames from 'classnames'

import CalendarEvent from './CalendarEvent'



export default (props) => {
    const myClassNames = classNames(
        'day',
        {active: props.active},
        {highlight: props.highlight}
    )

    const calendarEvents = props.calendarEvents.map(calendarEvent => <CalendarEvent {...calendarEvent} key={calendarEvent.id}/>)
    const publicHolidays = props.publicHolidays.map(publicHoliday => <CalendarEvent {...publicHoliday} key={publicHoliday.id}/>)

    return (
        <div className={myClassNames}>
            <span>{props.moment.format('D')}</span>
            {' '}
            <span>{props.moment.format('dddd')}</span>
            {calendarEvents}
            {publicHolidays}
        </div>
    )
}
