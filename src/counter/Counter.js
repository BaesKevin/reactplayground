import React, {Component} from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        };
    }

    increaseCounter = () => {
        this.setState({counter: this.state.counter + 1});
    };

    decreaseCounter = () => {
        this.setState({counter: this.state.counter - 1});
    };

    render() {
        return (
            <div>
                <button onClick={this.increaseCounter}>Increase</button>
                <button onClick={this.decreaseCounter}>Increase</button>

                <span>{this.state.counter}</span>
            </div>
        );
    }
}

export default Counter;
