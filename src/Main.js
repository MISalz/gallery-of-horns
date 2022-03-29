
import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';

class Main extends React.Component {
  render() {
    let hb = this.props.allBeast.map((beast, index) => {
      return(
        <HornedBeast
          image_url={beast.image_url}
          title={beast.title}
          description={beast.description}
          key={index}
          openModal={this.props.openModal}
          hideModal={this.props.hideModal}
          showModal={this.props.showModal}
          />
      )
    })
    return (
      <main>
        {hb}
      </main>
    );
  }
}
export default Main;  