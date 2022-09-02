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

    //We cant alter the state directly, hence we get the new data
    //NB: array.push() alter the state of array. We dont need to alter the state of array directly
    //like this.ninjas.push(ninja);

    //The correct way is to get a copy of the array, use spread operator to add the data and the setState
    //We add the element to the copied array
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


  componentDidMount() {

    //fire when the component first mount to the DOM
    console.log('MOUNTED COMPONENT');

  }

  componentDidUpdate(prevProps, prevState){
    //this fires when we get a chnage iin prop or state
    console.log('Component Updated');

    console.log(prevProps, prevState); //props and state before the data was updated

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
