import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import './ColorBox.css';
import './btn.css';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { isCopied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ isCopied: true }, () => {
      setTimeout(() => this.setState({ isCopied: false }), 1500);
    });
  }

  render() {
    const { name, background, moreUrl, isShowing } = this.props;
    const { isCopied } = this.state;
    const isLightColor = chroma(background).luminance() >= 0.35;
    const isDarkColor = chroma(background).luminance() <= 0.17;

    return (
      <div className="ColorBox" style={{ background }}>
        <div className={`ColorBox__overlay ${isCopied && 'show'}`} style={{ background }} />
        <div className={`ColorBox__copy-msg ${isCopied && 'show'} ${isDarkColor && 'ColorBox__copy-msg--light'}`}>
          <h1 className="ColorBox__copy-title">COPIED!</h1>
          <p className="ColorBox__copy-sub-title">{background}</p>
        </div>
        <CopyToClipboard text={background} onCopy={this.changeCopyState}>
          <button className={`ColorBox__btn btn btn--centered ${isLightColor && 'btn--light'}`}>COPY</button>
        </CopyToClipboard>
        <div className="ColorBox__features">
          <p className={`ColorBox__name ${isDarkColor && 'ColorBox__name--light'}`}>{name}</p>
          {isShowing && (
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <button className={`btn btn--see-more ${isLightColor && 'btn--light'}`}>MORE</button>
            </Link>
          )}
        </div>
      </div>
    )
  }
}

export default ColorBox;