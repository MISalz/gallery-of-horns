
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Modal from 'react-bootstrap/Modal'
import './App.css';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: {},
      showModal: true
    }
  }
  hideModal = () => {
    this.setState({
      showModal: false
    })
  }
  openModal = () => {
    this.setState({
      showModal: true
    })
  }
  handleShowModal = () => {
    this.props.openModal(this.props.image_url)
  }
  render() {
    return (
      <>
        <Header />
        <Main
          data={data}
          showModal={this.props.showModal}
          />
        <Footer/>
        <Modal>
          show={this.handleShowModal}
          onHide={this.props.hideModal}
          {/* <Modal.Body>
          openModal={this.props.openModal}
          </Modal.Body> */}
        </Modal>
      </>
    );
  }
}
export default App;