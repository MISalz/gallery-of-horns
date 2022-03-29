
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import SelectedBeast from './SelectedBeast'
import { Form } from 'react-bootstrap';
import data from './data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beast: {},
      allBeast: data
    }
  }

  hideModal = () => {
    this.setState({
      showModal: false
    })
  }

  openModal = (title) => {
    let pickedbeast = data.find(beast => beast.title === title)
    this.setState({
      showModal: true,
      SelectedBeast: pickedbeast
    })
    console.log(this.state.selectedBeast);
  }

  handleSelect = (e) => {
    let option = parseInt(e.target.value)
    console.log(e.target.value)
    let horns = data.filter(hornPick => hornPick.horns === option);
    console.log(horns);
    this.setState({ listBeast: horns });
  };
  
  render() {
    return (
      <>
        <Header />
        <form name="selected" onChange={(this.handleSelect)}>
          <Form.Select name="option" onChange={(this.handleSelect)}>
            <option>Choose number of Horns</option>
            <option value="1">One Horn</option>
            <option value="2">Two Horns</option>
            <option value="3">Three Horns</option>
            <option value="100">AllHorns!</option>
          </Form.Select>
        </form>
        <Main
          data={data}
          openModal={this.openModal}
          hideModal={this.hideModal}
          allBeast={this.state.allBeast}
          showModal={this.state.showModal}
        />
        <SelectedBeast
          theBeast={this.state.selectedBeast}
          showModal={this.state.showModal}
          hideModal={this.hideModal}
        />
        <Footer />

      </>
    );
  }
}

export default App;