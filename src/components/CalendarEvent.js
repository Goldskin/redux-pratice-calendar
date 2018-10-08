import React, { Component, Fragment } from 'react'

export default class extends Component {
    render () {
        if (this.props.detailed) {
            return (
                <Fragment>
                    <h2>{this.props.title}</h2>
                    <div>{this.props.text}</div>
                </Fragment>
            )
        }

        return (
            <div>{this.props.title}</div>
        )
    }
}