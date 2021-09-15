import React, { Component } from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'welcome visitor'
        }
    }

    changeMessage(){
        this.setState({
            message : 'thank you for subcribing'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subcribe</button>

            </div>
        )
    }
}

export default Message
