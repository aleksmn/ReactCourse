import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {


    render() {
        return (
            <div>
                <h1 className="display-1">Кликни меня!</h1>
                <button 
                    className="btn btn-primary btn-sm m-2" 
                    onClick={this.props.onReset}>Сброс
                </button>
                {this.props.counters.map(counter =>
                    <Counter 
                        key={counter.id} 
                        counter={counter}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}>

                        <h4 className='lead mt-3'>Счетчик {counter.id}</h4>

                    </Counter>)}
            </div>);
    }
}

export default Counters;