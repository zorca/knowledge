import { IconButton, makeStyles, Paper } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';

const styles = makeStyles((theme) => ({
  IconButton: {
    padding: 6
  },
  IconButtonLabel: {
    width: '46px',
    height: '46px',
    border: '2px solid black',
    backgroundColor: 'white',
    borderRadius: '50%',
  },
  IconButtonIcon: {
    fontSize: '26px',
    color: 'black'
  }
}));

export default props => {
  const classes = styles();

  return (
    <IconButton
      aria-label=""
      component="button"
      onClick={ props.close }
      classes={ {
        root: classes.IconButton,
        label: classes.IconButtonLabel
      } }
    >
      <Close classes={ { root: classes.IconButtonIcon } }/>
    </IconButton>
  )
}