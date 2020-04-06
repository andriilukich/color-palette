import React from 'react';
import './PaletteFooter.css';

function PaletteFooter(props) {
  const {paletteName, paletteEmoji} = props;
  return (
    <footer className="Footer">
      <span className="Footer__name">{paletteName}</span>
      <span className="Footer__emoji">{paletteEmoji}</span>
    </footer>
  )
}

export default PaletteFooter;