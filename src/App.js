import React from 'react';
import Palette from './Palette';
import paletteColors from './paletteColors';
import { getPalette } from './colorHelpers';

function App() {
  console.log(getPalette(paletteColors[1]));
  return (
    <div className="App">
      <Palette {...paletteColors[3]} />
    </div>
  );
}

export default App;
