import React, { Component } from 'react';

class Counter extends Component {

    render() {
        // console.log(this.props)

        return (
            <div>
                {this.props.children}
                <span>{this.props.counter.type}</span>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Клик</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Удалить</button>

            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.props.counter.value === 0 ? "text-bg-warning" : "text-bg-primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;