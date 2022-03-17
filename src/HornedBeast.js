
import React from 'react';

class HornedBeast extends React.Component {
  render() {
    console.log(this.props.name);
    return (
      <article>
        <h2>{this.props.name}</h2>
        <img src= 'https://rurallivingtoday.com/wp-content/uploads/animals-with-horns-1.jpeg' alt='Horn1' title='Horn1'/>
        <p>Details about HB1</p>
      </article>
    );
  }
}
export default HornedBeast;