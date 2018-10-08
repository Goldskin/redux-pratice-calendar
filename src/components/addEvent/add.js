import React, { Component } from 'react'
import moment from 'moment'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            text: '',
            date: new Date()
        }
    }

    handleNameChange (event) {
        this.setState({ title: event.target.value });
    }

    handleDescriptionChange (event) {
        this.setState({ text: event.target.value });
    }
    
    handleDateChange (event) {
        console.log(event.target.value)
        
        this.setState({ date: event.target.value });
    }

    handleSubmit (event) {
        event.preventDefault();
        const { title, text, date } = this.state
        this.props.handleSubmit({
            title,
            text,
            date: moment(date).format('YYYYMMDD HHmmss')
        })
    }

    render() {
        return (
            <form>
                <input type="text" value={this.state.title} onChange={event => this.handleNameChange(event)}/>
                <textarea value={this.state.text} onChange={event => this.handleDescriptionChange(event)}/>
                <input type="datetime" value={this.state.date} onChange={event => this.handleDateChange(event)}/>
                <button 
                    type="submit" 
                    onClick={event => this.handleSubmit(event)}>
                    Envoyer
                </button>
            </form>
        )
    }
}