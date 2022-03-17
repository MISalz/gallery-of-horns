
import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <article>
        <img src={this.props.image_url}
          alt={this.props.title}
          description={this.props.description}
        />

      </article>
    );
  }
}
export default HornedBeast;