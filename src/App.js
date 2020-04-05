import React, { Component } from 'react';
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
        <Route exact path='/' render={() => <h1>Initial page</h1>} />
        <Route
          exact
          path='/palette/:id'
          render={(routeProps) => (
            <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
          )}
        />
      </Switch>
    );
  }
}

export default App;
