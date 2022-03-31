import React from 'react';
import Button from 'react-bootstrap/Button';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      favorite: false
    }
  }
  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }
  favorite = () => {
    this.setState({
      favorite: true
      
    })
    this.props.openModal(this.props.beast)
  }
  

  render() {
    return (
      <article >
        <div >
          <h3>{this.props.title}</h3>
          <p>{this.state.likes}</p>
          <p onClick={this.handleLikes}>❤️</p>
          <img onClick={this.favorite}
            alt={this.props.beast.title}
            src={this.props.beast.image_url}
          />
          <p>{this.props.description}</p>
        </div>
        <Button
          className="hb-button"
          onClick={this.handleLikes}
        >Favorite
        </Button>
      </article>
    );
  }
}
export default HornedBeast;