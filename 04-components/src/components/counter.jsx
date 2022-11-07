import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: this.props.counter.value,
    };

    handleIncrement = () => {
        console.log("Increment Clicked", this)
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        // console.log(this.props)

        return (
            <div>
                {this.props.children}
                <span>{this.props.counter.type}</span>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Клик</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Удалить</button>

            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.state.count === 0 ? "text-bg-warning" : "text-bg-primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;