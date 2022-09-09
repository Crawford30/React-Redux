import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// const { Button, Modal, ModalHeader, ModalBody, ModalFooter } = Reactstrap;

class AddModal extends Component {
  constructor(props) {
    super(props);
    console.log("===PROPS(MODAL)======", this.props);
  }

  render() {
    return (
      <div>
        <br />
        <label>
          (child) this.props.isOpen
          <input type="text" value={this.props.isOpen} />
        </label>

        <Modal

          isOpen={this.props.isModalOpen}
          toggle={this.props.toggle}
          // isOpen={this.props.isModalOpen}
          // toggle={this.props.toggleModalView}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Modal title
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.toggleModalView}>
              Do Something
            </Button>
            <Button color="secondary" onClick={this.props.toggleModalView}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddModal;