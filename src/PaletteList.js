import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MiniPalette from './MiniPalette';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'blue',
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  navBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navBar__title: {
    color: '#fff'
  },
  navBar__link: {

  },
  palettes: {
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
  }
};
class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.navBar}>
            <h1 className={classes.navBar__title}>React Colors</h1>

          </div>
          <div className={classes.palettes}>
            {palettes.map(palette => (
              <MiniPalette {...palette} key={palette.paletteName} handelClick={() => this.goToPalette(palette.id)}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);