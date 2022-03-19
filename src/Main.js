
import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';

class Main extends React.Component {
  
  render() {
    let hb = [];
    this.props.data.forEach((beast, index) => {
      hb.push(
        <HornedBeast image_url={beast.image_url} title={beast.title} description={beast.description} key={index}
        openModal={this.props.openModal}
        />
      )
    })
    console.log(hb)
    return (
      <main>
        {hb}
      </main>
    );
  }
}
export default Main;