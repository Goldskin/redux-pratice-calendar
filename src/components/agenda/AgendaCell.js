import React from 'react'
import './agendaCell.css'
import classNames from 'classnames'
import CalendarEvent from '../CalendarEvent'


export default (props) => {
    const myClassNames = classNames(
        'hours',
        {highlight: props.highlight}
    )

    const calendarEvents = props.calendarEvents.map(calendarEvent =>
        <CalendarEvent {...calendarEvent} key={calendarEvent.id}/>
    )

    return (
        <div className={myClassNames}>
            <span>{props.moment.format('HH:mm')}</span>
            {calendarEvents}
        </div>
    )
}
