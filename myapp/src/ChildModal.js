import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, ButtonGroup } from 'reactstrap';


class ChildModal extends Component {
    render() {
        return (

            <div>
                {/* <Button color="danger" onClick={this.toggle}>Show Modal</Button> */}
                {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} cssModule={{ 'modal-title': 'w-100 text-center' }} className="border-0">Change Username</ModalHeader> */}

                <Modal show={this.props.showModal} className={this.props.className}>
                    <ModalHeader closeButton cssModule={{ 'modal-title': 'w-100 text-center' }} className="border-0">Change Username</ModalHeader>

                    <h6 style={{ textAlign: 'center', color: '#782878' }}>Answer All security Questions</h6>
                    <ModalBody className='mb-0 last-button' style={{ marginBottom: 0 }} >
                        <Button onClick={this.props.closeModal}></Button>

                    </ModalBody>


                </Modal>
            </div>

            // <Modal show={this.props.showModal}>
            //     <ModalHeader closeButton>
            //         <ModalTitle>Test</ModalTitle>
            //     </ModalHeader>
            //     <ModalBody>
            //         <Button onClick={this.props.closeModal()}>
            //     </ModalBody>
            // </Modal>
        );
    }
}
export default ChildModal;