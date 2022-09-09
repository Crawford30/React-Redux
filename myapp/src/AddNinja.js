import React, { Component } from 'react';
import AddModal from './AddModal';
import ModalExample from './Modal';
import ChildModal from './ChildModal';




import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class AddNinjas extends Component {

  constructor(props) {
    super(props);

    console.log("===LOGGIG PROPS(MODAL) HERE======", this.props);
    this.state = {
      showModal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.showModal
    });
  }



  render() {
    return (
      <div>
        <Button className="btn btn-primary" onClick={() => this.setState({ show: true })}>SHOW</Button>
        {/* < ModalExample /> */}
        <ModalExample show={this.state.showModal} close={this.state.closeModal} />


        {/* <Button color="danger" onClick={this.toggle}>Show Modal</Button>

        <Button onClick={() => this.setState({ show: true })}>SHOW</Button> */}


        {/* <ModalExample /> */}






        {/* <Button onClick={() => this.setState({ show: true })}>TEST</Button>
        <ChildModal show={this.state.showModal} close={this.state.closeModal} />

        <Button onClick={() => this.setState({ show: true })}>ADD MODAL</Button>
        <AddModal isOpen={this.state.isModalOpen}
          toggle={this.toggle} /> */}



        {/* <SignUpModal /> */}
      </div>

    );
  }





  //     // constructor(props) {
  //     //     super(props);
  //     //     this.state = {
  //     //       isModalOpen: false
  //     //     };

  //     //     this.showModal = this.showModal.bind(this);
  //     //     this.toggle = this.toggle.bind(this);
  //     //   }

  //     state = {
  //         name: null,
  //         age: null,
  //         belt: null,
  //         modal: false,
  //         isModalOpen: false,


  //     }
  //     handleChange = (e) => {
  //         this.setState({
  //             [e.target.id]: e.target.value
  //         })

  //     }

  //     toggleModal() {
  //         console.log("hello");
  //         console.log( 'before setState: ', this.state );
  //         this.setState({
  //             modal: !this.state.modal
  //         })
  //         console.log( 'after setState: ', this.state );
  //       }

  //     handleSubmit = (e) => {
  //         e.preventDefault();

  //         this.props.addNinja(this.state);

  //         //console.log("STATE: ", this.state);
  //     }


  //     toggle() {
  //         this.setState({
  //           isModalOpen: !this.state.isModalOpen
  //         });
  //       }

  //       showModal() {
  //         this.setState({
  //           isModalOpen: true
  //         });
  //       }

  //     render() {
  //         return (
  //             <div>
  //                 <form onSubmit={this.handleSubmit}>
  //                     <label htmlFor="name">Name:</label>
  //                     <input type="text" id="name" onChange={this.handleChange} />

  //                     <label htmlFor="name">Age:</label>
  //                     <input type="text" id="age" onChange={this.handleChange} />


  //                     <label htmlFor="name">Belt:</label>
  //                     <input type="text" id="belt" onChange={this.handleChange} />

  //                     <button>Submit</button>

  //                 </form>


  // <AddModal
  //   isOpen={this.state.isModalOpen}
  //   toggle={this.toggle}
  // />





  //         <button className="btn btn-primary" onClick={this.toggle}>
  //           Show Modal From Parent Component
  //         </button>
  //                 {/* <Button outline color="primary" onClick={() => this.toggleModal()}>Click</Button> */}
  //             </div>



  //         );
  //     }
}

export default AddNinjas;