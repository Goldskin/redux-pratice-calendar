import React, { Component } from 'react'


class CalendarEvent extends Component {
    render () {
        return (
            <div>{this.props.text}</div>
        )
    }
}

export default CalendarEvent