import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

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

  //Add Action
  addNinja = (ninja) => {
    console.log("NINJA OBJECT: ", ninja);

    ninja.id = Math.random();
    let newNinjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: newNinjas
    });
  
  } 

  //Delete Action
  deleteNinja = (id) => {
    console.log("ID: ", id);

    //we can use a non destructuring method, filter

    let newNinjas = this.state.ninjas.filter(ninja => {

      //return false if the id is equal to the ninja.id
      return ninja.id !== id;  //this will return false if id === ninja.id and will filter the ninja out of the array
    });

    this.setState({
      ninjas:newNinjas 
    });
  }


  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome</p>
        {/* <Ninjas name="Joel" age="13" belt="black"></Ninjas> */}
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} ></Ninjas>

          {/*Send the addNinja function as prop to addNinja component */}
        <AddNinja addNinja={this.addNinja} />  
      </div>
    );

    }
}

export default App;
