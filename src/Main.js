
import React from 'react';
import HornedBeast from './HornedBeast';
import SelectedBeast from './SelectedBeast';
import './Main.css';

class Main extends React.Component {
  render() {
    let hb = [];
    this.props.data.forEach((beast, index) => {
      hb.push(
        <HornedBeast
          image_url={beast.image_url}
          title={beast.title}
          description={beast.description}
          key={index}
          openModal={this.props.openModal}/>
      )
    })
    return (
      <main>
        {hb}
        <SelectedBeast>
          showModal={this.props.showModal}
          beasts={this.props.beast}
          hideModal={this.props.hideModal}
        </SelectedBeast>
      </main>
    );
  }
}
export default Main;  