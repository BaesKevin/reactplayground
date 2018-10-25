import React, {Component} from 'react';
import './App.css';
import MessageList from "./messages/MessageList";
import {Message} from './messages/classes/Message';
import AddMessageForm from "./messages/AddMessageForm";
import MessageRepository from "./firebase/MessageRepository";
import Counter from './counter/Counter';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: []
        };

        this.db = this.props.db;
        this.messageRepo = new MessageRepository(this.db);
        this.messageRepo.onMessagesChanged = this.messagesChanged;
    }

    deleteMessage = (id) => {
        this.messageRepo.deleteMessage(id);
    };

    addMessage = (message) => {
        this.messageRepo.addMessage(message);
    };

    messagesChanged = (snapshotData) => {
        this.setState({messages: []});
        const newMessages = [];
        for (let messageId in snapshotData) {
            const id = messageId;
            const messageText = snapshotData[messageId].message;
            newMessages.push(new Message(id, messageText));
        }
        this.setState({messages: newMessages});
    };

    render() {
        return (
            <div className="App">
                <h1>Messages</h1>
                <h2>Message form</h2>
                <AddMessageForm addMessage={this.addMessage}/>
                <h2>recoreded messages</h2>
                <MessageList messages={this.state.messages} deleteMessage={this.deleteMessage}/>
                <h1>Counter</h1>
                <Counter/>
            </div>
        );
    }
}

export default App;
