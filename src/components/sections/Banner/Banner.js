import React from 'react';
import { makeStyles, Box, Typography, Container } from '@material-ui/core';
import Search from '../../blocks/Search/Search';

const styles = makeStyles(theme => ({
  wrapperRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px 0',
    minHeight: '320px',
    color: theme.palette.text.white,
    backgroundColor: theme.palette.background.blue
  },
  gutterBottom: {
    marginBottom: '40px'
  }
}));

const Banner = (props) => {
  const classes = styles();

  return (
    <Box component="section" classes={ { root: classes.wrapperRoot } }>
      <Container maxWidth="md">
        <Typography
          variant="h1"
          element="h1"
          align="center"
          gutterBottom={ true }
          classes={ { gutterBottom: classes.gutterBottom } }
        >
          Help Center
        </Typography>
        <Search/>
      </Container>
    </Box>
  );
};

export default Banner;