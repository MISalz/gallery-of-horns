
import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    let hb = [];
    this.props.data.forEach((beast, index) => {
      hb.push(
        <HornedBeast
        imageUrl={beast.image_Url}
          title={beast.title}
          description={beast.description}
          key={index}
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