import React from 'react';
import Palette from './Palette';
import paleteeColors from './paletteColors';

function App() {
  return (
    <div className="App">
      <Palette {...paleteeColors} />
    </div>
  );
}

export default App;
