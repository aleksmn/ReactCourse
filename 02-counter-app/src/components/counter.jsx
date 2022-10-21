import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
        imageUrl: 'https://source.unsplash.com/240x240/?computer',
        tags: ['JS', 'HTML', 'CSS'],

    };

    handleIncrement = () => {
        console.log("Increment Clicked", this)
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        let classes = "badge m-2 ";
        classes += this.state.count === 0 ? "text-bg-warning" : "text-bg-primary"

        return (
            <React.Fragment>
                <img src={this.state.imageUrl} alt="" />
                <h1>Счетчик кликов</h1>
                <span className={classes}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Клик</button>
                <ul>
                    { this.state.tags.map( tag => <li key={tag} >{tag}</li>) }
                </ul>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;