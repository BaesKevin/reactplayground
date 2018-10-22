import React, {Component} from 'react'

export default class AddMessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ""}
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addMessage(this.state.message);
        this.setState({message: ""});
    };

    handleChange = (event) => {
        this.setState({message: event.target.value});
    };

    render() {
        return (
            <form action="#" onSubmit={this.handleSubmit}>
                <input type="text" name="message" value={this.state.message} onChange={this.handleChange}/>
                <input type="submit" text="add message"/>
            </form>
        )
    }
}