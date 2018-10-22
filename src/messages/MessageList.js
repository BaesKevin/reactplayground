import  React, {Component} from 'react'
import MessageListItem from "./MessageListItem";

export default class MessageList extends Component{
    render() {
        return (<ul>
            {this.props.messages.map((message) => {
                return <MessageListItem message={message} deleteMessage={this.props.deleteMessage}/>;
            })}
        </ul>)
    }
}