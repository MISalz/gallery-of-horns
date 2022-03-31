import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button"

class SelectedBeast extends React.Component {
  render() {
console.log(this.props.beast)
    return (

      <Modal
        show={this.props.showModal}
        onHide={this.props.hideModal}>

        <Modal.Header>
          {this.props.beast.title}
        </Modal.Header>


        <Modal.Body>
        <img src={this.props.beast.image_url} alt={this.props.beast.title} onClick={this.props.openModal}/>
          <p>
            {this.props.beast.description}
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.props.hideModal}>X
          </Button>
        </Modal.Footer>

      </Modal>
    );
  }
}
export default SelectedBeast;

