import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button"

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.hideModal}>
        <Modal.Header>
          {this.props.title}
        </Modal.Header>
        <img src={this.props.image_url} alt={this.props.title} />
        <Modal.Body>
          <p>
            {this.props.description}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.hideModal}>X</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default SelectedBeast;

