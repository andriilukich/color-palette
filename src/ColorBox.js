import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

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
    const { name, background, moreUrl } = this.props;
    const { isCopied } = this.state;

    return (
      <div className="ColorBox" style={{ background }}>
        <div className={`ColorBox__overlay ${isCopied && 'show'}`} style={{ background }} />
        <div className={`ColorBox__copy-msg ${isCopied && 'show'}`}>
          <h1 className="ColorBox__copy-title">COPIED!</h1>
          <p className="ColorBox__copy-sub-title">{background}</p>
        </div>
        <CopyToClipboard text={background} onCopy={this.changeCopyState}>
          <button className="ColorBox__btn ColorBox__btn--copy">COPY</button>
        </CopyToClipboard>
        <div className="ColorBox__features">
          <p className="ColorBox__name">{name}</p>
          <Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <button className="ColorBox__btn ColorBox__btn--see-more">MORE</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default ColorBox;