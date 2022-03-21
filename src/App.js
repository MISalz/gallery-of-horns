
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
      img: 'hi',
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
      showModal: true,
      img: image_url
    })
  }

  render() {
    return (
      <>
        <Header />
        <Main
          data={data}
          openModal={this.openModal}
        />
        <Footer />
        <Modal
          show={this.state.showModal}
          onHide={this.hideModal}
        >
          <Modal.Body>{this.state.img} </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default App;