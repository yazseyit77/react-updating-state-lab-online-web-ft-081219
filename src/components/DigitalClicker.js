import React, { Component } from "react";

// Code DigitalClicker Component Here

export default class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClicked = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClicked}>{this.state.timesClicked}</button>
            </div>
        )
    }
}