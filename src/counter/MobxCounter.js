import React, {Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

@observer class MobxCounter extends Component {
    @observable count = 0;

    increaseCount = () => { this.count++ };
    decreaseCount = () => { this.count-- };

    render() {
        return (
            <div>
                Counter: {this.count}

                <button onClick={this.increaseCount}>Increase</button>
                <button onClick={this.decreaseCount}>Decrease</button>
            </div>
        );
    }
}

export default MobxCounter;
