import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: this.props.value,
    };

    handleIncrement = () => {
        console.log("Increment Clicked", this)
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        let classes = "badge m-2 ";
        classes += this.state.count === 0 ? "text-bg-warning" : "text-bg-primary"

        // console.log(this.props)

        return (
            <div>
                <span className={classes}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Клик</button>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;