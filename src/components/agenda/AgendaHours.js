import React from 'react'
import './hours.css'
import classNames from 'classnames'
import CalendarEvent from '../CalendarEvent'
// import PublicHoliday from '../PublicHoliday';



export default (props) => {
    const myClassNames = classNames(
        'hours',
        {active: props.active},
        {highlight: props.highlight}
    )

    const calendarEvents = props.calendarEvents.map(calendarEvent =>
        <CalendarEvent {...calendarEvent} key={calendarEvent.id}/>
    )
    // const publicHolidays = props.publicHolidays.map(publicHoliday => 
    //     <PublicHoliday {...publicHoliday} key={publicHoliday.id}/>
    // )

    return (
        <div className={myClassNames}>
            <span>{props.moment.format('HH:mm')}</span>
            {calendarEvents}
        </div>
    )
}
