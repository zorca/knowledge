import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  root: {
    maxWidth: '1408px',
    margin: '0 auto',
    padding: '24px'
  }
}));

export default ({ children, value, index, ...other }) => {
  const classes = styles();

  return (
    <Box
      className={ classes.root }
      role="tabpanel"
      hidden={ value !== index }
      aria-labelledby={ `simple-tab-${ index }` }
      id={ `simple-tabpanel-${ index }` }
      { ...other }
    >
      { value === index && children }
    </Box>
  );
};