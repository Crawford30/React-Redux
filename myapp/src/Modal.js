import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, ButtonGroup } from 'reactstrap';

class ModalExample extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     modal: false
  //   };

  //   this.toggle = this.toggle.bind(this);
  // }

  // toggle() {
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  // }

  render() {
    return (
      <div>
        {/* <Button color="danger" onClick={this.toggle}>Show Modal QUIZ</Button> */}
        {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} cssModule={{ 'modal-title': 'w-100 text-center' }} className="border-0">Change Username</ModalHeader> */}



        {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}> */}
        <Modal show={this.props.showModal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} cssModule={{ 'modal-title': 'w-100 text-center' }} className="border-0">Change Username</ModalHeader>
          <h6 style={{ textAlign: 'center', color: '#782878' }}>Answer All security Questions</h6>
          <ModalBody className='mb-0 last-button' style={{ marginBottom: 0 }} >
            <FormGroup>
              <Input
                placeholder="Security Question 1"
                ref={descriptionInput => (this.descriptionInput = descriptionInput)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                placeholder="Security Question 2"
                ref={descriptionInput => (this.descriptionInput = descriptionInput)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                placeholder="Security Question 3"
                ref={descriptionInput => (this.descriptionInput = descriptionInput)}
              />
            </FormGroup>
          </ModalBody>
          <ButtonGroup>
            <Button style={{ marginLeft: 16, marginRight: 16, marginBottom: 24, marginTop: 4, background: '#782878' }} color="primary " onClick={this.toggle}>Submit</Button>

          </ButtonGroup>

          {/* <ModalFooter className='border-0 mt-0'>
            <Button style={{maxWidth: '700px', width: '100%' , background: '#782878'}} color="primary " onClick={this.toggle}>Do Something</Button>{' '}
            
          </ModalFooter> */}
        </Modal>
      </div>
    );
  }
}

export default ModalExample;