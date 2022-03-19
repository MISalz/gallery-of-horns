import React from 'react';
import Modal from 'react-bootstrap/Modal'

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img:'',
      showModal: false
    }
  }
  hideModal = () => {
    this.setState({
      showModal: false
    })
  }
  openModal = (image_url) => {
    this.setState({
      showModal: true
    })
  }
  render() {
    return (
     
        <Modal
          show={this.state.showModal}
          onHide={this.hideModal}>

          <Modal.Header closeButton>
          show={this.state.showModal}
          onHide={this.hideModal}
          </Modal.Header>
        </Modal>
        
      );
  }
}
export default SelectedBeast;