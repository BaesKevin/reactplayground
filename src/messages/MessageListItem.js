import  React, {Component} from 'react'

export default class MessageListItem extends Component{
    constructor(props){
        super(props);
        this.message = props.message;
    }

    deleteMessage = (e) => {
        this.props.deleteMessage(this.message.id);
    };

    render() {
        return (
            <li>
                {this.message.text}
                <a href="#" onClick={this.deleteMessage}>Delete</a>
            </li>
        );
    }
}