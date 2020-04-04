import React, { Component } from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex' };
    this.handelChange = this.handelChange.bind(this);
  }

  handelChange(e) {
    this.setState({format: e.target.value}, () => 
      this.props.changeFormat(this.state.format)
    );
  }

  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;

    return (
      <header className="NavBar">
        <div className="NavBar__logo-container">
          <a href="#" className="NavBar__logo">color*picker</a>
        </div>
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
        <div className="NavBar__select-container">
          <Select value={format} onChange={this.handelChange} >
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
      </header>
    )
  }
}

export default NavBar;