import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0, type: '💖' },
            { id: 2, value: 4, type: '🤣' },
            { id: 3, value: 3, type: '😇' },
            { id: 4, value: 1, type: '😱' },
            { id: 5, value: 2, type: '😩' },

        ]
    };

    handleDelete = (counterId) => {
        // console.log('Удаляем компонент!', counterId)
        const counters = this.state.counters.filter(c => c.id !== counterId)
        this.setState({ counters: counters })
    }

    render() {
        return (
            <div>
                {this.state.counters.map(counter =>
                    <Counter 
                        key={counter.id} 
                        counter={counter}
                        onDelete={this.handleDelete}>

                        <h4>Счетчик {counter.id}</h4>

                    </Counter>)}
            </div>);
    }
}

export default Counters;