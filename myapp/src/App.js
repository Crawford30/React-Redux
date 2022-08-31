import React, {Component} from 'react';
import Ninjas from './Ninjas';

class  App extends Component {
  state = {
    ninjas: [
      {name: 'Joel', age: 30, belt: 'black', id: 1},
      {name: 'John', age: 20, belt: 'brown', id: 2},
      {name: 'Peter', age: 35, belt: 'pink', id: 3},
      {name: 'Sam', age: 40, belt: 'red', id: 4},
      {name: 'Okoth', age: 6, belt: 'green', id: 5},
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome</p>
        {/* <Ninjas name="Joel" age="13" belt="black"></Ninjas> */}
        <Ninjas ninjas={this.state.ninjas}></Ninjas>
      </div>
    );

    }
}

export default App;
