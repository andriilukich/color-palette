import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import './ColorBox.css';
import './btn.css';

const styles = {
  ColorBox: {
    height: props => (props.isShowingFullPalette ? '25%' : '50%'),
  },
  btnColor: {
    color: props => (chroma(props.background).luminance() >= 0.35 ? 'rgb(72, 72, 72)' : '#fff'),
    backgroundColor: props => (chroma(props.background).luminance() >= 0.35 ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.3)'),
  },
  textColor: {
    color: props => (chroma(props.background).luminance() <= 0.17 ? '#fff' : 'color: rgb(37, 37, 37)'),
  }

};

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
    const { name, background, moreUrl, isShowingFullPalette, classes } = this.props;
    const { isCopied } = this.state;

    return (
      <div className={`ColorBox ${classes.ColorBox}`} style={{ background }}>
        <div className={`ColorBox__overlay ${isCopied && 'show'}`} style={{ background }} />
        <div className={`ColorBox__copy-msg ${isCopied && 'show'} ${classes.textColor}`}>
          <h1 className="ColorBox__copy-title">COPIED!</h1>
          <p className="ColorBox__copy-sub-title">{background}</p>
        </div>
        <CopyToClipboard text={background} onCopy={this.changeCopyState}>
          <button className={`ColorBox__btn btn btn--centered ${classes.btnColor}}`}>COPY</button>
        </CopyToClipboard>
        <div className="ColorBox__features">
          <p className={`ColorBox__name ${classes.textColor}`}>{name}</p>
          {isShowingFullPalette && (
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <button className={`btn btn--see-more ${classes.btnColor}`}>MORE</button>
            </Link>
          )}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ColorBox);