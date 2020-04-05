import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: '0.5rem',

    backgroundColor: '#eee',
    border: '1px solid black',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  colors: {
    
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '0.5rem',
    margin: 0,
    fontSize: '1rem',
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '0.9rem'
  }
};

function MiniPalette(props) {
  const { classes, paletteName, emoji } = props;
  return (
    <div className={classes.container}>
      <div className={classes.colors} />
      <h5 className={classes.title}>
        {paletteName} 
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette);