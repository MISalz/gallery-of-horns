
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beast: {}
    }
  }
  hideModal = () => {
    this.setState({
      showModal: false
    })
  }
  openModal = (beastName) => {
    let beast = data.find((object)=>{return object.title=beastName});
    this.setState({
      showModal: true,
      beast,
    })
  }
  render() {
    return (
      <>
        <Header />
        <Main
          data={data}
          openModal={this.openModal}
          hideModal={this.hideModal}
          beast={this.state.beast}
          showModal={this.state.showModal}
        />
        <Footer />

      </>
    );
  }
}
export default App;