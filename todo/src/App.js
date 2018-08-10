import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './todo';

class App extends Component {
  state = {
    todos: [],
    fetchedTodo: ''
  };

  addTodoHandler = () => {
    let copyTodo = this.state.todos.slice();
    copyTodo.push(this.state.fetchedTodo);

    this.setState({ todos: copyTodo, fetchedTodo: '' });
  };

  onInputChange = event => {
    this.setState({ fetchedTodo: event.target.value });
  };

  deleteTodo = i => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i, 1);
    this.setState({ todos: todosCopy });
  };
  render() {
    let formatedTodo = this.state.todos.map((item, index) => {
      return <Todo singletodo={item} delete={() => this.deleteTodo(index)} />;
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My React TODO APP</h1>
        </header>

        <p> Hello take a tour of the todo App</p>

        <div>
          <input
            type="text"
            placeholder="Enter the todo"
            onChange={this.onInputChange}
          />
          <button onClick={this.addTodoHandler}> Add to todo </button>

          <p>Todos will appear here </p>
          <div>
            {this.state.todos.length === 0 ? (
              'Nothing to do yet'
            ) : (
              <ul> {formatedTodo} </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
