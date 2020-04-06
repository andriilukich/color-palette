import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex' };
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }

    return shades.slice(1);
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { name, emoji } = this.props.palette;
    const { format } = this.state;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.hex}
        name={color.name}
        background={color[format]}
        isShowing={false}
      />
    ));

    return (
      <div className='Palette'>
        <NavBar changeFormat={this.changeFormat} isShowingAllColors={false} />
        <h1>SingleColorPalette</h1>
        <div className="Palette__colors">{colorBoxes}</div>
        <PaletteFooter paletteName={name} paletteEmoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;