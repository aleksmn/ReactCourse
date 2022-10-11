import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
        imageUrl: 'https://source.unsplash.com/200x200/?computer',
    }

    render() {
        return (
            <React.Fragment>
                <img src={this.state.imageUrl} alt="" />
                <h1>Привет, всем!</h1>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;