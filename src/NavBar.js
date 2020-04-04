import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css';

class NavBar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="NavBar">
        <div className="NavBar__logo-container">
          <a href="#" className="NavBar__logo">color picker</a>
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
      </header>
    )
  }
}

export default NavBar;