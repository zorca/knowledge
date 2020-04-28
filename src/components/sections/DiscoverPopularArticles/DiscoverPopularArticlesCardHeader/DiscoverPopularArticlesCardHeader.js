import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import Author from '../../../blocks/Author/Author';

const styles = makeStyles(theme => ({
  Header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '25px'
  },
  Button: {
    color: theme.palette.primary.main,
    fontFamily: 'inherit',
    fontSize: theme.typography.fontSizes.s10,
    fontWeight: 700,
    border: '2px solid #3D8BFF'
  }
}));

export default props => {
  const classes = styles();

  return (
    <div className={ classes.Header }>
      <Author { ...props }/>
      <Button variant="outlined" className={ classes.Button }>FOLLOW</Button>
    </div>
  );
}
