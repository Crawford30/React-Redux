import React, { Component } from 'react';
import Todos from './Todos';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: 'Buy some milk'
      },
      {
        id: 2,
        content: 'play Murioca'
      }
    ]
  }

  deleteTodo = (id) => {
    console.log("ID DELETE TODO: ", id);

    //filter array is non destrcutive
    const todosFiltered = this.state.todos.filter(todo => {

      //return true if we wanna keep the item in the array

      return todo.id !== id //if not equal return true
    });

    //update the state
    this.setState({
      todos: todosFiltered
    });

    //if the key and the  value both have the same name, you could use one like: 
    // this.setState({
    //   todos
    // });

    //if todos had the same name with todosFiltered

  }
  render() {
    return (
      <div className="todo-app container" >
        <h1 className="center blue-text">ToDo's</h1>

        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}></Todos>


      </div>
    );

  }
}

export default App;
