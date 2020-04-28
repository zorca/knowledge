import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const styles = makeStyles(theme => ({
  Title: {
    fontFamily: 'Muli',
    fontSize: '22px',
    fontWeight: 800,
    lineHeight: '25px',
    marginBottom: '15px'
  },
  Text: {
    fontFamily: 'inherit',
    fontSize: '15px',
    lineHeight: '25px'
  }
}));


export default props => {
  const classes = styles();

  return (
    <div className={ classes.Content }>
      <Typography variant="h5" className={ classes.Title }>{ props.title }</Typography>
      <Typography className={ classes.Text }>{ props.text }</Typography>
    </div>
  );
}
