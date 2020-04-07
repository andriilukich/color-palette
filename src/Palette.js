import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';
import './Palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: 'hex' };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { colors, name, emoji, id } = this.props.palette;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.hex} 
        moreUrl={`/palette/${id}/${color.id}`}
        isShowingFullPalette
      />
    ));

    return (
      <div className="Palette">
        <NavBar
          level={level} 
          changeLevel={this.changeLevel} 
          changeFormat={this.changeFormat} 
          isShowingAllColors={true}
        />
        <div className="Palette__colors">
          {colorBoxes}
        </div>
        <PaletteFooter paletteName={name} paletteEmoji={emoji}/>
      </div>
    )
  }
}

export default Palette;