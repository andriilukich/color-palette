import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
  render() {
    return (
      <div className="ColorBox" style={{ backgroundColor: this.props.background }}>
        <p className="ColorBox__name">{this.props.name}</p>
        <button className="ColorBox__btn">More</button>
      </div>
    )
  }
}

export default ColorBox;