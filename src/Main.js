
import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';

class Main extends React.Component {
  render() {
    let hb = this.props.data.map((beast, index) => {
      return (
        <HornedBeast
          key={index}
          beast={beast}
          openModal={this.props.openModal}
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