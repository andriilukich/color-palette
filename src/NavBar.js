import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex', open: false };
    this.handelFormatChange = this.handelFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handelFormatChange(e) {
    this.setState({ format: e.target.value, open: true }, () =>
      this.props.changeFormat(this.state.format)
    );
  }

  closeSnackbar() {
    this.setState({ open: false });
  }

  render() {
    const { level, changeLevel, isShowingAllColors } = this.props;
    const { format, open } = this.state;

    return (
      <header className="NavBar">
        <div className="NavBar__logo-container">
          <Link className="NavBar__logo" to='/'>color*picker</Link>
        </div>
        {isShowingAllColors && (
        <div className="NavBar__slider-container">
          <p className="NavBar__level">Level: {level}</p>
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onChange={changeLevel}
          />
        </div>
        )}
        <div className="NavBar__select-container" >
          <Select value={format} onChange={this.handelFormatChange} >
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={3000}
          onClose={this.closeSnackbar}
          message={<span id='message-id'>Format changed to {format.toUpperCase()}</span>}
          contentProps={{
            'aria-describedby': 'message-id'
          }}
          action={
            <IconButton key='close' aria-label="close" color="inherit" onClick={this.closeSnackbar}>
              <CloseIcon color='inherit' />
            </IconButton>
          }
        >
        </Snackbar>
      </header>
    )
  }
}

export default NavBar;