import React, { Component } from 'react'

export default class extends Component {
    render() {
        return (
            <div>
                <input type="text"/>
                <button type="submit" onClick={() => this.props.handleSubmit('toto', 'tata', '20181012 100000')}>
                    Envoyer
                </button>
                
            </div>
        )
    }
}