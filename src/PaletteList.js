import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
render() {
  const { palettes } = this.props;
  return (
    <div>
      <h1>react Colors</h1>
      {palettes.map(color => (
        <p>
          <Link to={`/palette/${color.id}`}>{color.paletteName}</Link>
        </p>
      ))}
    </div>
  );
}
}

export default PaletteList;