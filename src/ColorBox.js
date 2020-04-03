import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
  render() {
    return (
      <div className="ColorBox" style={{ backgroundColor: this.props.background }}>
        <button className="ColorBox__btn ColorBox__btn--copy">COPY</button>
        <div className="ColorBox__features">
          <p className="ColorBox__name">{this.props.name}</p>
          <button className="ColorBox__btn ColorBox__btn--see-more">MORE</button>
        </div>
      </div>
    )
  }
}

export default ColorBox;