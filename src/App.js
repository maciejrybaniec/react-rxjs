import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { addTodo } from './Actions';
import Store from './Store';

import FormInput from './Components/FormInput';

class App extends Component {
  state = {};

  componentDidMount() {
      Store.subscribe((appState) => {
          this.setState({
             ...appState
          });
      });
  }

  onAddTodo = (taskName) => {
      addTodo(taskName);
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <div className="App-content">
            {todos && todos.map((todo) => <li key={todo}>{todo}</li>)}
            <FormInput
                onFormSubmit={this.onAddTodo}
            />
        </div>
      </div>
    );
  }
}

export default App;
