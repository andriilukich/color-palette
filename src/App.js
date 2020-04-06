import React, { Component } from 'react';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import Palette from './Palette';
import paletteColors from './paletteColors';
import { generatePalette } from './colorHelpers';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  findPalette(id) {
    return paletteColors.find(function (palette) {
      return palette.id === id;
    });
  }

  render() {
    return (
      
      <Switch>
        <Route 
          exact 
          path='/' 
          render={(routeProps) => (
            <PaletteList palettes={paletteColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path='/palette/:paletteId'
          render={(routeProps) => (
            <Palette palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} />
          )}
        />
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={() => (
            <SingleColorPalette />
          )}
        />
      </Switch>
    );
  }
}

export default App;
