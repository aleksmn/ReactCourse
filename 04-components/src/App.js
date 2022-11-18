import NavBar from './components/navbar';
import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';


class App extends Component {

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
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
