import React, { Component } from 'react'
// import './Message.css'
// import {Link} from "react-router-dom"
import MessageManager from '../../modules/uniqueMessage';
// import MessageForm from './MessageForm';
import "../establishment/establishmentCard.css"



export default class MessageList extends Component {

    state = {
        messages: [],
        username: ''
    }

    editable = function(message){
        if(message.username === this.state.username){
            return <div>
                <button
                                        type="button"
                                            className="btn btn-success"
                                            onClick={() => this.props.history.push(`/message-edit/${message.id}`)}
                                            className="card-link">Edit
                                            </button>
                                        {/* <button onClick={() => this.props.deleteMessage(this.props.message.id)}>Delete</button> */}
                                        <a href="#"
                                            onClick={() => this.props.deleteMessage(message.id)
                                                // .then(MessageManager.getAll('messages')
                                                // .then(messages => {
                                                //   this.setState({ messages: messages });
                                                // }))
                                            }
                                            className="card-link">Delete</a>
            </div>
        }
    }

    componentDidMount() {
        let user = JSON.parse(sessionStorage.getItem("credentials"))
        this.setState({username: user.username})
        MessageManager.getAll('messages')
            .then(messages => {
                this.setState({ messages: messages });
            })
    }
    render() {
        return (
            <React.Fragment>

                <section className="messages">
                    {
                        this.props.uniqueMessages.map(message =>
                            <div key={message.id}
                            // className="card"
                            >
                                <div className="card-body">
                                    <div className="card-title">
                                        <div className="message-card">
                                            <h4 className="message-username">{message.username}</h4>
                                            <h3><span className="newMessage">{message.message}</span></h3>
                                            {/* <h6 className="message-Date">{message.date}</h6> */}
                                            <time className="entry__timestamp">{new Date(message.date).toLocaleDateString("en-US", {
                                                weekday: "long",
                                                year: "numeric",
                                                hour: "numeric",
                                                minute: "numeric",
                                                month: "long",
                                                day: "numeric"
                                            })}</time>
                                        </div>
                                        {this.editable(message)}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </section>

            </React.Fragment>
        )
    }
}

