import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

class ColorBox extends Component {
  render() {
    const { name, background } = this.props;
    return (
      <div className="ColorBox" style={{ background }}>
        <CopyToClipboard text={background}>
          <button className="ColorBox__btn ColorBox__btn--copy">COPY</button>
        </CopyToClipboard>
        <div className="ColorBox__features">
          <p className="ColorBox__name">{name}</p>
          <button className="ColorBox__btn ColorBox__btn--see-more">MORE</button>
        </div>
      </div>
    )
  }
}

export default ColorBox;