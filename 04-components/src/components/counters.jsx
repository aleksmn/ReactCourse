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


    handleIncrement = (counter) => {
        // console.log('Клик!', counter)

        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value++;
        // console.log(counters[index]);
        this.setState({ counters })
    };


    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });

        this.setState({ counters });
    }

    handleDelete = (counterId) => {
        // console.log('Удаляем компонент!', counterId)
        const counters = this.state.counters.filter(c => c.id !== counterId)
        this.setState({ counters: counters })
    }

    render() {
        return (
            <div>
                <h1 className="display-1">Кликни меня!</h1>
                <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>Сброс</button>
                {this.state.counters.map(counter =>
                    <Counter 
                        key={counter.id} 
                        counter={counter}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}>

                        <h4 className='lead mt-3'>Счетчик {counter.id}</h4>

                    </Counter>)}
            </div>);
    }
}

export default Counters;