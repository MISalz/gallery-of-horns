import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.hideModal}>
          <Modal.Header closeButton>
            
          </Modal.Header>
        <Modal.Body>
          {/* <img
            src={this.props.beast.image_url}
            alt={this.props.beast.title}></img> */}
          <p>
            {this.props.beasts.description}
            </p>
        </Modal.Body>
      </Modal>
    );
  }
}
export default SelectedBeast;