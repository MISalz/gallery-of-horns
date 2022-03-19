
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
  }
  handleShowModal = () => {
    this.props.openModal(this.props.image_url)
  }
  render() {
    return (
      <article>
        <h3>{this.props.title}</h3>
        <p>{this.state.likes}</p>
        <p onClick={this.handleLikes}>❤️</p>
        <img
          src={this.props.image_url}
          alt={this.props.title}
          description={this.props.description}
          onClick={this.props.handleShowModal}
        />
        <p>{this.props.description}</p>

        <div>{this.state.likes ? 'I Love this Horn!':''}</div>
         
      

        <Button 
        className="hb-button"
        onClick={this.favorite}
        >Favorite
        </Button>

      </article>
    );
  }
}
export default HornedBeast;