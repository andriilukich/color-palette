import React from 'react';
import Palette from './Palette';
import paletteColors from './paletteColors';

function App() {
  return (
    <div className="App">
      <Palette {...paletteColors[3]} />
    </div>
  );
}

export default App;
