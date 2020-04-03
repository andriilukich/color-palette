import React from 'react';
import Palette from './Palette';
import paletteColors from './paletteColors';
import { getPalette } from './colorHelpers';

function App() {
  return (
    <div className="App">
      <Palette palette = {getPalette(paletteColors[3])} />
    </div>
  );
}

export default App;
