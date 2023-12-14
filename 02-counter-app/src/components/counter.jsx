import React, { Component } from 'react';

class Counter extends Component {
    // state - состояние компонента
    state = {
        count: 0,
        tags: ['JS', 'HTML', 'CSS'],
    };

    handleIncrement = () => {
        console.log("Increment Clicked", this)
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        let classes = this.state.count === 0 ? "badge m-2 text-bg-warning" : "badge m-2 text-bg-primary"

        return (
            <React.Fragment>
                <span className={classes}>{this.state.count}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Клик</button>
                <ul>
                    { this.state.tags.map( tag => <li key={tag} >{tag}</li>) }
                </ul>
            </React.Fragment>
        );
    }












    // formatCount() {
    //     const { count } = this.state;
    //     return count === 0 ? 'Zero' : count;
    // }
}

export default Counter;